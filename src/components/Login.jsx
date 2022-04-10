import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginSagaStart } from '../redux/modules/auth';


export default function Login() {
    const IdRef = useRef(null);
    const pswordRef = useRef(null);

    const handleLoginBtn = () => {
        const Id = IdRef.current.value
        const Psword = pswordRef.current.value
        console.log(Id, Psword);
        login({ Id, Psword });
    };

    const dispatch = useDispatch();

    const login = useCallback((req) => {
        dispatch(loginSagaStart(req));

    }, [dispatch]);

  return (
      <>
        <div className="login-inner">
            <div className="form">
                <form className="login-form">
                    <input ref={IdRef} id="id" type="text" placeholder="아이디" autoComplete='username'/>
                    <input ref={pswordRef} id="password" type="password" placeholder="비밀번호" autoComplete='current-password' />
                    <p onClick={handleLoginBtn} className="form-btn" id="loginBtn">login</p>
                    <p className="message">아직 회원이 아니신가요? <a href="/register">회원가입</a></p>
                </form>
            </div>
        </div>
      </>
  )
}
