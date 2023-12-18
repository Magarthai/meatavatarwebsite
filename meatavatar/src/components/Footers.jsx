import React from 'react';
import '../CSS/footer.css';

function footer() {
  return (
    <footer>
      <div className="contract">
        <div className="ari"></div>

        <p className="year" style={{ textAlign: 'center' }}>©2023 Meat Avartar</p>

        <div className="contractbtn">
          <button>
            <img
              src="https://media.discordapp.net/attachments/445928139021877259/1180961174033006712/225129.png?ex=657f52cd&is=656cddcd&hm=3dad105c4c486c1e5ad1e4437fb5d9a7e4b6d3127be581f1a572e0bc8861d359&=&format=webp&quality=lossless&width=676&height=676"
              alt="Facebook Like Icon"
            />
          </button>

          <button>
            <img
              src="https://media.discordapp.net/attachments/445928139021877259/1180961173714251806/CITYPNG.COMLazada_Laz_Square_Black_Icon_FREE_PNG_-_1500x1500.png?ex=657f52cd&is=656cddcd&hm=5cdc1e42edb0256bbafaf68485b92887634d0075df33a00cac829a96e22f4c44&=&format=webp&quality=lossless&width=676&height=676"
              alt="Facebook Like Icon"
            />
          </button>
          <button>
          <img
              src="https://media.discordapp.net/attachments/445928139021877259/1180961174301458432/shopee_logo_icon_249631.png?ex=657f52cd&is=656cddcd&hm=eead1a0065c95ecf3301cefccc6ddf27eacd7b36e8d90a838ff50a6ed183c9c1&=&format=webp&quality=lossless&width=676&height=676"
              alt="Facebook Like Icon"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default footer;
