import React from "react";
import '../CSS/auth.css';
import Menubra from "./Menubra";
import Footer from "./Footers";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
export default function Login() {
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
                      <Link to="/login">ล็อคอิน</Link>
                    </li>
                  </ul>
                </div>
              </section>
            </header>
          </div>
        </header>
        <section class="auth-wrappers">
            <div class="auth-inner">
                <form>
                <h3>เข้าสู่ระบบ</h3>

                <div class="mb-3">
                    <div className="labels">
                        <label>Username</label>
                        <label className="icons"><FaUser /></label>
                    </div>
                    <input
                    type="email"
                    class="form-control"
                    placeholder="กรอกอีเมล"
                    />
                </div>

                <div class="mb-3">
                <div className="labels">
                        <label>Password</label>
                        <label className="icons"><FaLock /></label>
                    </div>
                    <input
                    type="password"
                    class="form-control"
                    placeholder="ป้อนรหัสผ่าน"
                    />
                </div>

                <div class="mb-3s">
                    <div class="custom-control custom-checkbox">
                    <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                    />
                    <label class="custom-control-label" htmlFor="customCheck1">
                        Remember me
                    </label>
                    </div>
                </div>

                <div class="d-grid">
                <Link to="/"><button type="submit" className="btn btn-primary">
                    เข้าสู่ระบบ
                    </button></Link>
                    
                </div>

                <p class="forgot-password text-right">
                    ยังไม่ได้สมัครสมาชิก? <a href="/sign-up" className="signupbtn">สมัครสมาชิก</a>
                </p>
                </form>
            </div>
            </section>
        
        <Footer/>
      </body>
    </html>
  );
}
