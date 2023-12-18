import React from "react";
import '../CSS/auth.css';
import Menubra from "./Menubra";
import Footer from "./Footers";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
export default function Register() {
  return (
    <html>
      <body>
        <header>
          <div className="app">
            <header className="header">
              <section className="container">
                <div className="menu-con">
                  <div className="webname">
                    <Link to="/">Sadtabat</Link>
                  </div>
                  <ul className='menu'>
                    <li className="menulink">
                      <Link to="/sign-in">ล็อคอิน</Link>
                    </li>
                  </ul>
                </div>
              </section>
            </header>
          </div>
        </header>
        <div className="register_container">
        <section class="auth-wrappers">
            <div class="auth-inner">
            <div className="regisheader">
                <div className="iconheader">
                <FaUserCircle />
                </div>
                <p>สร้างบัญชีผู้ใช้งาน</p>
            </div>
            <form action="/register" method="post">
                <div class="mb-3">
                    <label for="name">ชื่อ-นามสกุล</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="ชื่อ-นามสกุล"/>
                </div>
                <div class="mb-3">
                    <label for="age">อายุ</label>
                    <input type="number" class="form-control" id="age" name="age" placeholder="อายุ"/>
                </div>
                <div class="mb-3">
                    <label for="birthday">วันเดือนปีเกิด</label>
                    <input type="date" class="form-control" id="birthday" name="birthday"/>
                </div>
                <div class="mb-3">
                    <label for="phone">เบอร์โทรศัพท์</label>
                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="เบอร์โทรศัพท์"/>
                </div>
                <div class="mb-3">
                    <label for="email">อีเมล</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="อีเมล"/>
                </div>
                <div class="mb-3">
                    <label for="username">ชื่อผู้ใช้</label>
                    <input type="text" class="form-control" id="username" name="username" placeholder="ชื่อผู้ใช้"/>
                </div>
                <div class="mb-3">
                    <label for="password">รหัสผ่าน</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="รหัสผ่าน"/>
                </div>
                <div class="mb-3">
                    <label for="confirm_password">ยืนยันรหัสผ่าน</label>
                    <input type="password" class="form-control" id="confirm_password" name="confirm_password" placeholder="ยืนยันรหัสผ่าน"/>
                </div>
                <div className="d-grid">
                <button type="submit" class="btn btn-primary">ลงทะเบียน</button>
                </div>
                <p class="forgot-password text-right">
                    มีบัญชีแล้ว? <a href="/login" className="signupbtn">ล็อคอิน</a>
                </p>
                </form>
            </div>
            </section>
            </div>
        <Footer/>
      </body>
    </html>
  );
}
