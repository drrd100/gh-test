import React from 'react'

export default function Resister() {
  return (
      <>
        <div class="login-inner">
        <div class="form">
            <form class="login-form">
                <input id="id" type="text" placeholder="아이디" />
                <input id="name" type="text" placeholder="이름" />
                <input id="password" type="password" placeholder="비밀번호" />
                <input id="confirm-password" type="password" placeholder="비밀번호확인" />
                <p class="form-btn" id="registerBtn">가입하기</p>
                <p class="message">이미 회원이신가요? <a href="/login">로그인</a></p>
            </form>
        </div>
    </div>
      </>
  )
}
