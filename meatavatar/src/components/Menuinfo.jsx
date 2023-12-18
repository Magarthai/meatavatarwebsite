import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import "../CSS/Menuinfo.css";


export default function menuinfo({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <div className="menuinfo_container">
        <div className="menuinfo_header">
            <div className="menuheadercontainer">

        <div className="menu-name">
            <p className="meatava" >Meat Avatar</p>
            <p className="menuname" >หมูกรอบจำแลง</p>
            <p className="menuname" >(หมูกรอบจากพืช)</p>
        </div>
        <div className="menu-img"><img src="https://cdn.discordapp.com/attachments/445928139021877259/1184533902396768346/Crispy-Pork-with-Shadow-1024x765.png?ex=658c5229&is=6579dd29&hm=b835adace376684a1925529989af1bd6911c9705a8871374127eace6cf310f57&"/></div>
    </div>
            </div>
    
    <div className="menuinfo">
        <div className="headermenuinfo">รายระเอียดผลิตภัณฑ์</div>
        <div className="infos">
        <p><b>Meat Avatar</b> นำเสนอผลิตภัณฑ์จากพืชที่มีรสชาติเหมือนเนื้อสัตว์แท้</p>
        <p>พวกเขาช่วยให้ผู้บริโภคชอบทานผักมากขึ้นและหลีกเลี่ยงเนื้อสัตว์ให้มากที่สุดเท่าที่จะเป็นไปได้เพื่อรักษาวิถีชีวิตที่มีสุขภาพดี </p>
        <p>ผลิตภัณฑ์ของ Meat Avatar ได้รับการคัดเลือกอย่างพิถีพิถันเพื่อรักษาคุณภาพสูงสุดและคงไว้ซึ่งกลิ่น เนื้อสัมผัส โภชนาการ</p>
        <p>และรสชาติของผลิตภัณฑ์เหมือนกับเนื้อสัตว์จริง!</p>
        <b>ในบรรดาผักที่ Meat Avatar ใช้ ได้แก่</b>
        <div className="ingredient">
           
            <div className="img_ingredient">
                <img src="https://media.discordapp.net/attachments/445928139021877259/1184528007684161616/image_60-1.png?ex=658c4cac&is=6579d7ac&hm=6309ccf63d6ef8bbff5bfe6c89d201f832ba38547efdd1bea28fd8f8017b25fd&=&format=webp&quality=lossless"/>
                <img src="https://media.discordapp.net/attachments/445928139021877259/1184528008242012240/image_62-2.png?ex=658c4cac&is=6579d7ac&hm=cb18048de4459975566f605c8f2c69ffa7307971b8a6581d3c9bb2a1d5a2e9d8&=&format=webp&quality=lossless"/>
                <img src="https://media.discordapp.net/attachments/445928139021877259/1184528007960989696/image_61-1.png?ex=658c4cac&is=6579d7ac&hm=8e8806fc10f08c3765657b7e1260455598e468a1ba96daf0e29a129da51aa1a8&=&format=webp&quality=lossless"/>
                <img src="https://media.discordapp.net/attachments/445928139021877259/1184528008497856632/image_63-1.png?ex=658c4cac&is=6579d7ac&hm=88f5a5a84bbc2aa3b977a5048f9f9781b056d99e77e4e45c3ebd1b4a6f9c8ead&=&format=webp&quality=lossless"/>
                <img src="https://media.discordapp.net/attachments/445928139021877259/1184528007398957116/image_64-4.png?ex=658c4cac&is=6579d7ac&hm=06cd13b2a84752698ed6156929076b36da64ce5a55ada956c55fc5a2ab3c2754&=&format=webp&quality=lossless"/>
            </div>
            <div>พืชตระกูลถั่ว ถั่วลันเตา ถั่วเหลือง เห็ด บีทรูท แครอท และอื่นๆ
            <ul>
                <li>มังสวิรัติ</li>
                <li>ไม่มีคอเลสเตอรอล</li>
                <li>ไม่มีกลูเตน</li>
                <li>ไม่มีน้ำมันปาล์ม</li>
            </ul>
            </div>
        </div>
        <b>สารก่อภูมิแพ้: ถั่วเหลือง</b>
        <br></br>
        <b>สารเติมแต่ง: E407 – คาราจีแนน</b>
        </div>
    </div>
   </div>
   <div className="nutritional_information">
    <div className="nutritional_header">
    ข้อมูลทางโภชนาการ
    </div>
    <div className="nutritional_stat">
        <div className="statbox">
            <div className="statname">Energy</div>
            <div className="statcount">130</div>
            <div className="statunit">Kcal</div>
        </div>
        <div className="statbox">
            <div className="statname">Protein</div>
            <div className="statcount">18</div>
            <div className="statunit">G</div>
        </div>
        <div className="statbox">
            <div className="statname">Fat</div>
            <div className="statcount">1</div>
            <div className="statunit">G</div>
        </div>
        <div className="statbox">
            <div className="statname">Fiber</div>
            <div className="statcount">2</div>
            <div className="statunit">G</div>
        </div>
        <div className="statbox">
            <div className="statname">Sodium</div>
            <div className="statcount">40</div>
            <div className="statunit">G</div>
        </div>
    </div>
    <div className="nutritional_img">
        <img src="https://media.discordapp.net/attachments/445928139021877259/1184544401679192074/xdddddaffsa.png?ex=658c5bf1&is=6579e6f1&hm=0edf6ce51e8a950e9675c31482d59979af96360e985fa925a0b2b1423889fda7&=&format=webp&quality=lossless" />
    </div>
    </div>  
        <Partner/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
