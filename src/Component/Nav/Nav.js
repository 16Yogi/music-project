import React from 'react'
import './Nav.css'
// import '../Css/Nav.css'
// import logo from './logo.svg';

export default function Nav() {
  return (
    <>
       <div className="container-fluid position-sticky">
            <div className="container p-0">
                <nav className="navbar navbar-expand-sm" id="nav">
                    <a className="navbar-brand text-dark" href="/">Westmire Wired</a>
                
                    {/* <ul className="navbar-nav"> 
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link 2</a>
                      </li>
                
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                          Dropdown link
                        </a>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Link 1</a>
                          <a className="dropdown-item" href="#">Link 2</a>
                          <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                      </li>
                    </ul> */}
                </nav>
            </div>
       </div>
    </>
    )
}
