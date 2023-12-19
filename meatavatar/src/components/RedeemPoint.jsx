import React, { useState } from 'react';
import '../CSS/RedeemPoint.css';
import { MdAccessTime } from "react-icons/md";
import { Link } from 'react-router-dom';

function RedeemPoint() {
  return (
  <div className="redeem_container">
    <div className="header_redeem" style={{marginBottom:30,marginTop:30}}>แลกแต้ม</div>
    
    <div className="redeem_center_wrapper">
    <div className="redeem_items">
        <div className="items">
            
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="" />
            <p className='item_details' >ใช้ 200 Point เพื่อแลกรับ Crispy pork ในราคา 100 บาท</p>
            <div className="item_date">
            <MdAccessTime /> <p>ภายใน:</p> <div style={{marginLeft:5}} className="date">31</div> <div style={{marginLeft:5}} className="month">ธ.ค.</div> <div style={{marginLeft:5}} className="years">9999</div>
            </div>
            <div className="link_redeem">
            <Link to="/redeemcode" className="pointtext">
               แลกแต้ม : <span id='point'>200</span> Point
        </Link>
            </div>
        </div>
        <div className="items">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="" />
            <p className='item_details' >ใช้ 200 Point เพื่อแลกรับ Crispy pork ในราคา 100 บาท</p>
            <div className="item_date">
            <MdAccessTime /> <p>ภายใน:</p> <div style={{marginLeft:5}} className="date">31</div> <div style={{marginLeft:5}} className="month">ธ.ค.</div> <div style={{marginLeft:5}} className="years">9999</div>
            </div>
            <div className="link_redeem">
            <Link to="/redeemcode" className="pointtext">
               แลกแต้ม : <span id='point'>200</span> Point
        </Link>
            </div>
        </div>
        <div className="items">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="" />
            <p className='item_details' >ใช้ 200 Point เพื่อแลกรับ Crispy pork ในราคา 100 บาท</p>
            <div className="item_date">
            <MdAccessTime /> <p>ภายใน:</p> <div style={{marginLeft:5}} className="date">31</div> <div style={{marginLeft:5}} className="month">ธ.ค.</div> <div style={{marginLeft:5}} className="years">9999</div>
            </div>
            <div className="link_redeem">
            <Link to="/redeemcode" className="pointtext">
               แลกแต้ม : <span id='point'>200</span> Point
        </Link>
            </div>
        </div>
        <div className="items">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="" />
            <p className='item_details' >ใช้ 200 Point เพื่อแลกรับ Crispy pork ในราคา 100 บาท</p>
            <div className="item_date">
            <MdAccessTime /> <p>ภายใน:</p> <div style={{marginLeft:5}} className="date">31</div> <div style={{marginLeft:5}} className="month">ธ.ค.</div> <div style={{marginLeft:5}} className="years">9999</div>
            </div>
            <div className="link_redeem">
            <Link to="/redeemcode" className="pointtext">
               แลกแต้ม : <span id='point'>200</span> Point
        </Link>
            </div>
        </div>
        <div className="items">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="" />
            <p className='item_details' >ใช้ 200 Point เพื่อแลกรับ Crispy pork ในราคา 100 บาท</p>
            <div className="item_date">
            <MdAccessTime /> <p>ภายใน:</p> <div style={{marginLeft:5}} className="date">31</div> <div style={{marginLeft:5}} className="month">ธ.ค.</div> <div style={{marginLeft:5}} className="years">9999</div>
            </div>
            <div className="link_redeem">
            <Link to="/redeemcode" className="pointtext">
               แลกแต้ม : <span id='point'>200</span> Point
        </Link>
            </div>
        </div>
  
    </div>
    </div>
    
  </div>
  )
}

export default RedeemPoint;

