import { push } from "connected-react-router";
import { createActions, handleActions } from "redux-actions"
import { call, put, takeEvery} from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import UserService from "../../services/UserService";

const prefix = "socar-react/auth"

export const {
    peding, success, fail
} = createActions('PEDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null,
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error: null,
    }),
    FAIL: (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
    })
}, { prefix });

export default reducer;

//saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });
    

function* loginSaga(action) {
    try {
        yield put(peding());
        const token = yield call(UserService.login, action.payload);
        TokenService.set(token);
        yield put(success(token));
        yield put(push("/"));

    } catch (err) {
        console.log("err");
        yield put(fail(new Error(err.res.data.error || 'UNKNOWN_ERROR')))
    }
}
// function* logoutSaga() {
    
// }

export function* authSaga() {
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, loginSaga);
}
