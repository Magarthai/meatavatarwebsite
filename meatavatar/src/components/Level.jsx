import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Level.css';

function Level() {
  const [selectedLevel, setSelectedLevel] = useState(0);

  const levels = [
    {
      name: 'Gold Level',
      image: 'https://media.discordapp.net/attachments/445928139021877259/1181629974759886919/image_54.png?ex=6581c1ab&is=656f4cab&hm=f64c92feb678513c1f8814da5fded22905195bce169d9d7d0fc756c86ef15361&=&format=webp&quality=lossless',
      details: 'รับโบนัสดาวเพิ่ม 1 เท่าต่อ 1 บิล สำหรับการใช้จ่ายครั้งแรก (ภายใน 30 วันหลังจากการลงทะเบียน)',
    },
    {
      name: 'Platinum Level',
      image: 'https://media.discordapp.net/attachments/445928139021877259/1181629974340452362/image_53.png?ex=6581c1ab&is=656f4cab&hm=e265de59146d641456fce21df0c6eec8c451e5e215d361d8c2e54d1f2517b92c&=&format=webp&quality=lossless',
      details: 'ได้รับส่วนลด 5% ทุกการใช้จ่าย 1 ครั้งต่อ 1 บิล',
    },
    {
      name: 'Diamond Level',
      image: 'https://media.discordapp.net/attachments/445928139021877259/1181627798058717314/image_44.png?ex=6581bfa4&is=656f4aa4&hm=9c9039bc93ee781e1b4035057de6e1488e13ea602df53b0dd4f0a50346770933&=&format=webp&quality=lossless',
      details: 'ได้รับส่วนลด 10% ทุกการใช้จ่าย 1 ครั้งต่อ 1 บิล',
    },
  ];

  const handleLevelClick = (index) => {
    setSelectedLevel(index);
  };

  return (
    <div className="levelcontainer">
      <p>คลิกเพื่อดูรายระเอียด</p>
      <div className="all-level">

        {levels.map((level, index) => (
          <div className={`level ${selectedLevel === index ? 'selected' : ''}`} key={index} onClick={() => handleLevelClick(index)}>
            <img src={level.image} alt={level.name} />
            <p className={selectedLevel === index ? 'underline' : ''}>{level.name}</p>
          </div>
        ))}
      </div>

      <div className="registermem">
        <img src={levels[selectedLevel]?.image} alt="" style={{marginRight:100}} />
        <div className="registerbox">
          <p className="headerlevel">{levels[selectedLevel]?.name}</p>
          <p className="leveldetails">{levels[selectedLevel]?.details}</p>
          <div className="doublebutton">
            <button><Link to="/redeemcode">แลกแต้ม</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Level;
