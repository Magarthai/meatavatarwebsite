import React from 'react';
import "../CSS/menulist.css";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
function menulist() {
    return (
        <div className="menulist">
            <div className="menulistbet">
                <div className="menucontainer">
                    <div className="menuwrap">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1180937716024750220/Component_6.png?ex=657f3cf4&is=656cc7f4&hm=20d8fe458967e30e5ffd866b4911ca7f8ca203be90359afd27fcaab7985d2053&=&format=webp&quality=lossless" />
                    </div>
                    <div className="text">
                        PLANT-BASE MEAT
                    </div>
                </div>
                <div className="menucontainer">
                    <div className="menuwrap">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1180937715697590272/Component_7.png?ex=657f3cf4&is=656cc7f4&hm=f41e8ca7624c3cef8097a1e0cb6e0f71484571e1fcced1af4590e95e19aa8330&=&format=webp&quality=lossless" />
                    </div>
                    <div className="text">
                        READY TO EAT
                    </div>
                </div>
            </div>
            <div className="Product-text"><p>Product</p></div>
            <div className="shop-list">
                <div className="item">
                    <div className="item-img">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786176507914/image_10.png?ex=65804c08&is=656dd708&hm=919aef2502bad2c5c2db5b16b2fb2c622edd641421a73826390e1a4dd6f71ca0&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Ground Beef</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786461712445/image_3.png?ex=65804c08&is=656dd708&hm=d1f962c85450510229248a193b0b64c6854e9ab52011a18403414e7dbf9cf7b7&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Ground Beef</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                    <img style={{ width: '70%' }} src="https://media.discordapp.net/attachments/445928139021877259/1181287066261274704/image_51.png?ex=6580824f&is=656e0d4f&hm=27237cfa8123b950b6ad03eb46498cf8bf574e9a92bd9ecd1eb26b682328347d&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Crispy Pock</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1181228786725949492/image_4.png?ex=65804c08&is=656dd708&hm=8dae6c316ea82353b3e2b49c196ad2450f0d46038bd8f4edc55846f96e349aac&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Minced Pork</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                    <img src="https://media.discordapp.net/attachments/445928139021877259/1181289189183074355/image_11.png?ex=65808449&is=656e0f49&hm=fa9d419d289879783a4a60019ab13405cd768ae9c8e45e95fb5f7d0ff422e143&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Japanese Curry</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img style={{ width: '70%' }} src="https://media.discordapp.net/attachments/445928139021877259/1181289189510238298/image_12.png?ex=6580844a&is=656e0f4a&hm=0828d9b3786894e8da0d868fc93f3cffe99bddc02920ffe12e9d591b22a4e396&=&format=webp&quality=lossless" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Hamburg Steak Beef</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>
                <div className="item">
                    <div className="item-img">
                        <img src="https://media.discordapp.net/attachments/445928139021877259/1181290465824354314/image_51z.png?ex=6580857a&is=656e107a&hm=5b7a700125e796533ba7e82ea873e9a13fa6db086ad14ac4d5abac4b79756a95&=&format=webp&quality=lossless&width=772&height=676" alt="Product Image" />
                        <div className="item-name">
                            <p>Plant-Based Krapow</p>
                        </div>
                    </div>
                    <Link to="/menu-info" className="buttoninfo">
                    <i><FaSearch /></i> ดูรายละเอียด
                    </Link>
                </div>

             
            </div>
        </div>
    );
}

export default menulist;
