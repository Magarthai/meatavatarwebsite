import React from 'react';
import '../CSS/CouponDetail.css';

function CouponDetail() {
  return (
    <div className="detialcoupon">
        <div className="detialtext">
            
            <div className="task">
                <img src="https://media.discordapp.net/attachments/445928139021877259/1181595688186957824/image_49.png?ex=6581a1bd&is=656f2cbd&hm=058553014e887006e372717c2f15c34f2f9c2d9f944ab74abeae6fad4e4f5be0&=&format=webp&quality=lossless" alt="" />
                <div className="tasktext">
                    <p style={{fontWeight:600}}>50 บาท เท่ากับ 1 แต้ม</p>
                    <p style={{marginTop:-5,fontWeight:300}}>รับแต้มสะสม 1 แต้ม จากการใช้จ่ายทุก ๆ 50 บาท ผ่านช่องทาง Subscription box ของ Meat Avatar</p>
                </div>
            </div>


            <div className="task">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181595687704608778/image_46.png?ex=6581a1bc&is=656f2cbc&hm=1c4c2950023639caf915e610eb8ed9bff3ca7f0da416e45e681d7472048f8acd&=&format=webp&quality=lossless" alt="" />
                <div className="tasktext">
                <p style={{fontWeight:600}}>สะสมแต้มครบ 500 แต้ม เพื่อปรับระดับเป็น Platinum</p>
                <p style={{marginTop:-5,fontWeight:300}}>เมื่อสะสมแต้มครบ 500 แต้ม ภายใน 12 เดือน คุณจะได้ปรับระดับเป็น Platinum </p>
                </div>
            </div>

            <div className="task">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181595687939485807/image_47.png?ex=6581a1bc&is=656f2cbc&hm=0f02f58e4dafa90f1b281eae772799f483a84d8c7334204f5b605c16c68afe43&=&format=webp&quality=lossless" alt="" />
                <div className="tasktext">
                <p style={{fontWeight:600}}>สะสมแต้มครบ 1000 แต้ม เพื่อปรับระดับเป็น Diamond</p>
                <p style={{marginTop:-5,fontWeight:300}}>เมื่อสะสมแต้มครบ 1000 แต้ม ภายใน 24 เดือน คุณจะได้ปรับระดับเป็น Diamond</p>
                </div>
            </div>

            <div className="task">
            <img src="https://media.discordapp.net/attachments/445928139021877259/1181595688451194931/image_50.png?ex=6581a1bd&is=656f2cbd&hm=bf64931ae7292e68812f4cac2c316aae12c5ebf68954740a0c744f571451c3b5&=&format=webp&quality=lossless" alt="" />
                <div className="tasktext">
                <p style={{fontWeight:600}}>ตรวจสอบการใช้จ่ายของคุณ</p>
                <p style={{marginTop:-5,fontWeight:300}}>สามารถตรวจสอบการใช้จ่ายผ่านช่องทาง Subscription box ของ Meat Avatar</p>
                </div>
            </div>

            


            
            
        </div>
    </div>
  );
}

export default CouponDetail;
