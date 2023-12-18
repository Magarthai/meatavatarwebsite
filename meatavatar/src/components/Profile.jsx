import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import Menulist from './Menulist'
import "../CSS/Profile.css";
import Level from "./Level";
import RedeemPoint from "./RedeemPoint";
import { Link } from 'react-router-dom';

export default function profile({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <div className="profile">
          <div className="profile-box">
            <div className="rankimg"><img src="https://media.discordapp.net/attachments/445928139021877259/1181627798058717314/image_44.png?ex=6581bfa4&is=656f4aa4&hm=9c9039bc93ee781e1b4035057de6e1488e13ea602df53b0dd4f0a50346770933&=&format=webp&quality=lossless" alt="" /></div>
            <div className="info">
              <div className="name_info">
                <div className="prefix">Mr.</div>
                <div className="name">Thatsamaphon</div>
              </div>
              <div className="ranklevel">
                <p>diamond</p>
              </div>
              <div className="user_point">
                <div className="point">
                  My Point : <p id="points">2000</p>
                </div>
                <div className="pointbtn">
                <button><Link to="/redeemcode">แลกแต้ม</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Level/>
        <RedeemPoint/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
