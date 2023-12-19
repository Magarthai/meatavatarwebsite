import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import RedeemPoint from './RedeemPoint'
import "../CSS/Redeemcode.css";


export default function menuinfo({ userData }) {

  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <div className="redeemcode">
        <div class="mb-33">
            <div className="label-redeem">
                <label className="icons"></label>
            </div>
            <div className="input_forms">
                <input
                type="email"
                class="form-controls"
                placeholder="กรอกโค๊ด"
                />
            </div>
            <div className="button_redeem">
                <button>ส่ง</button>
            </div>
        </div>
        </div>
       <RedeemPoint/>
        <Partner/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
