import React from 'react'
import { Link } from 'react-router-dom'

export default function GoStore() {
  return (
    <>
        <div className='go-store'>
            <Link to="/">
                <img src="/images/logo-store.png" alt="" />
                <span>앱 다운로드</span>
            </Link>
        </div>
    </>
  )
}
