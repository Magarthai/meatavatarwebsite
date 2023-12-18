import React from 'react';
import '../CSS/memberrigester.css';

function memberrigester() {
  return (
    <div className="member_container">
        <div className="memberheaderimg">
        <div className="imagecon">
        <img src="https://media.discordapp.net/attachments/445928139021877259/1181605849790161008/image_40.png?ex=6581ab33&is=656f3633&hm=4ce7f3e76cea5d941325a9c837d318a7dc0f6b12e7b6af8e0e2d33dae0fee6b5&=&format=webp&quality=lossless" alt="" />
        <u>ลงทะเบียนสมาชิก</u>
        </div>
        <div className="imagecon">
        <img src="https://media.discordapp.net/attachments/445928139021877259/1181605849433649282/image_48.png?ex=6581ab33&is=656f3633&hm=cb98fa8f9aa1651f6efd6e4f30862f0b87446b9c81d5b0322cfe1eeb154e7a6e&=&format=webp&quality=lossless" alt="" />
        <p>สะสมแต้มรับสิทธิประโยชน์</p>
        </div>
    </div>
    <div className="registermem">
    <img src="https://media.discordapp.net/attachments/445928139021877259/1181605849790161008/image_40.png?ex=6581ab33&is=656f3633&hm=4ce7f3e76cea5d941325a9c837d318a7dc0f6b12e7b6af8e0e2d33dae0fee6b5&=&format=webp&quality=lossless" alt="" />
    <div className="registerbox">
        <p>ลงทะเบียนสมาชิก</p>
        <p style={{marginBottom:30}}>สมัครสมาชิกง่ายๆ เพียงแอด line : Meat avatar หรือคลิกลงทะเบียน</p>
        <div className="doublebutton">
            <button>ลงทะเบียน</button>
            <button>Line : Meat Avater</button>
        </div>
    </div>
    </div>
    </div>
  );
}

export default memberrigester;
