import "./Login.scss";
import main_logo from "../../images/brand-ez-logo.svg";
import main_name from "../../images/ezCloudhotel.svg";
import sao_khue from "../../images/ic_sao_khue.svg";
import is_owner from "../../images/checkbox_checked.svg";
import not_owner from "../../images/checkbox_uncheck.svg";
import { useState } from "react";

const Login = () => {
  const [isOwner, setIsOwner] = useState(false);
  const checkIsOwner = () => {
    setIsOwner(!isOwner);
    console.log(isOwner);
  };
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-child-logo">
          <div className="login-info">
            <div className="login-info-logo">
              <div>
                <img
                  className="login-info-logo-main-logo"
                  src={main_logo}
                  alt=""
                />
              </div>
              <img
                className="login-info-logo-main-name"
                src={main_name}
                alt=""
              />
              <p className="login-info-logo-title">
                Phần mềm quản lý khách sạn tốt nhất Việt Nam
              </p>
            </div>
            <div className="login-info-achievement">
              <img
                className="login-info-achievement-sao-khue"
                src={sao_khue}
                alt=""
              />
              <p className="login-info-achievement-des">
                Giải thưởng Sao Khuê 2019
              </p>
            </div>
          </div>
        </div>
        <div className="login-container-child-form">
          <div className="login-form">
            <div className="login-form-customer">
              <p className="login-form-customer-title">Tên đăng nhập / Email</p>
              <input className="login-form-customer-email" />
              <p className="login-form-customer-title">Mật khẩu</p>
              <input className="login-form-customer-password" />
              <div className="login-form-check">
                <img
                  className="login-form-check-owner"
                  src={isOwner ? is_owner : not_owner}
                  alt=""
                  onClick={checkIsOwner}
                />
                <p className="login-form-check-title">Chủ khách sạn</p>
              </div>
            </div>
            {isOwner && (
              <>
                <div className="login-form-owner">
                  <p className="login-form-owner-title">Mã khách sạn</p>
                  <input className="login-form-owner-id" />
                </div>
              </>
            )}
            <div className="login-form-handle">
              <button className="login-form-handle-login">Đăng nhập</button>
              <a
                href="http://localhost:3000/"
                className="login-form-handle-reset-pass"
              >
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
