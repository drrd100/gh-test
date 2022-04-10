import axios from "axios";

const USER_API_URL = "mydata.cwuj6blxkx2x.ap-northeast-2.rds.amazonaws.com";
// const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService{
    static async login(req) {
        const res = await axios.post(USER_API_URL, req);
        console.log(req.data.token);
        return res.data.token;
        
    }

    static async logout(token) {
        await axios.delete(USER_API_URL, {
            headers: {Authorization: `Bearer ${token}`},
        })
    }
}