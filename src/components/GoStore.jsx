import React, { useRef } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function GoStore() {
    const goStore = useRef();

    function createScrollStopListener(element, callback, timeout) {
        let handle = null;
        let onScroll = function() {
            if (handle) {
                clearTimeout(handle);
            }
            handle = setTimeout(callback, timeout || 50); 
        };
        element.addEventListener('scroll', onScroll);
        return function() {
            element.removeEventListener('scroll', onScroll);
        };
    }

    useEffect(() => {
        window.addEventListener("scroll" , () => { 
            goStore.current.classList.remove("show-store")
        })
        createScrollStopListener(window, function() {
            goStore.current.classList.add("show-store")
        });
    
    },[])
    
    
    
  return (
    <>
        <div className='go-store' ref={goStore}>
            <Link to="/">
                <img src="/images/logo-store.png" alt="" />
                <span>앱 다운로드</span>
            </Link>
        </div>
    </>
  )
}
