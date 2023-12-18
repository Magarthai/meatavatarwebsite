import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import CouponDetail from './CouponDetail'
import MemberRegister from './MemberRegister'
import Level from './Level'

import "../CSS/Coupon.css";



export default function Coupon({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <div className="couponheaderbg">
            <div className="couponheader">
                <p>Meat avatar @ Reward</p>
                <button>เข้าสู่ระบบ</button>
            </div>
            
        </div>
      </div>
      <div className="smt">
            <p>Something for everyone</p>
       </div>
       <div className="smttext">
       <p>เปิดประสบการณ์ Meat Avatar สู่ความคุ้มค่าจากทุกการใช้จ่าย เพิ่มความสะดวกแบบไร้ขีดจำกัด พร้อมรับสิทธิพิเศษและเมนูโปรดฟรี</p>
       <p>สมาชิก Meat avatar@ Rewards รับแต้มสะสมจากทุกการใช้จ่าย เพื่อแลกรับสิทธิประโยชน์ต่างๆ</p>
       </div>
        <CouponDetail/>
        <div className="smt" style={{marginTop:30}}>
            <p>Getting start is easy</p>
       </div>
       <div className="smttext">
       <p>เรายินดีที่ได้ต้อนรับลูกค้าทุกท่าน ไม่ว่าคุณจะทาน meat avatar เดือนละครั้งหรือทุก ๆวัน เพื่อให้ทุกการใช้จ่ายของคุณคุ้มค่า เพียงสมัครสมาชิก 
</p>
        <p>และเริ่มสะสมแต้มจากทุกการใช้จ่าย สิทธิประโยชน์มากมายรอคุณอยู่</p>
       </div>
       <MemberRegister/>
       <div className="smt">
            <p>Meat Avatar Member Level</p>
       </div>
       <div className="smttext">
       <p>สิทธิประโยชน์มากมาย หากคุณเข้ามาเป็นส่วนหนึ่งของเรา Meat Avatar Member เราพร้อมที่จะมอบความสุข ความสนุกในการใชจ่ายของคุณ</p>
       <p>ทำให้ทุกการใช้จ่ายเป็นเรื่องราวดี ๆสำหรับคุณ</p>
       </div>
       <Level/>
       <div className="moredetails">
          <div className="detailstext">
          <p style={{fontWeight:600}}>ข้อมูลเพื่มเติม</p>
          <p>สะสมแต้มรับสิทธิพิเศษ --> extra point เพื่อแลกรับสิทธิพิเศษและเมนูโปรดฟรี รวมถึงส่วนลดมากมายทุกการใช้จ่าย</p>
          <p>Plat level --> ได้รับส่วนลด 5% ทุกการใช้จ่าย 1 ครั้งต่อ 1 บิล</p>
          <p>Diamond level --> ได้รับส่วนลด 10% ทุกการใช้จ่าย 1 ครั้งต่อ 1 บิล</p>
          </div>
       </div>
    <Footer/>
    </div>
    </div>
  );
}
