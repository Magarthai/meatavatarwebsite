import React, {useState } from "react";
import '../CSS/Menubra.css';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };    
function Menubra() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <header className="header">
      <section className="container">
        <div className="menu-con">

          <div className="webname">
          <Link to = "/">
            <img src="https://cdn.discordapp.com/attachments/445928139021877259/1186552066605322339/meat-avartar_logo.png?ex=6593a9b9&is=658134b9&hm=9536dfe76a26991593b1148371ca870c7b2a3833be0cb62f64f116c478df5884&" alt="logo"/>
            </Link>
          </div>
          <ul className={click ? 'menu active' : 'menu'}>
            <li className="menulink" onClick={closeMenu}>
              <Link to="/">Home</Link>
            </li>
            <li className="menulink" onClick={closeMenu}>
              <Link to="/menu">Menu</Link>
            </li>
            <li className="menulink" onClick={closeMenu}>
              <Link to="/coupon">Reward</Link>
            </li>
            <li className="menulink" onClick={closeMenu}>
              <Link to="/redeemcode">Redeem</Link>
            </li>
            <a href="/Profile" class="User" aria-label="User Profile" style={{marginRight:12}}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
              <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
          </svg>
            </a>


                    <button onClick={logOut} className="btn btn-danger">
            Log Out
          </button>
                </ul>

                <div className="menumobile" onClick={handleClick}>
                    {click ? (
                        <FiX />
                    ) : (
                        <FiMenu />
                    )}
                </div>
            </div>
        </section>
    </header>
  )
}

export default Menubra