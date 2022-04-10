import { React } from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div id="header">
            <div className="inner">
                <h1 className="top-logo"><Link to="/"><img src="../images/logo.png" alt=""/></Link></h1>
            </div>
    </div>
  )
}
