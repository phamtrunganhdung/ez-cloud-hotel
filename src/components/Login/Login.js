import "./Login.scss";
import main_logo from "../../images/brand-ez-logo.svg";
import main_name from "../../images/ezCloudhotel.svg";
import sao_khue from "../../images/ic_sao_khue.svg";
import is_owner from "../../images/checkbox_checked.svg";
import not_owner from "../../images/checkbox_uncheck.svg";
import { Row, Col, message } from "antd";
import { useState, useRef, useEffect } from "react";
import { Input } from "../Input/Input";
import { fetchData } from "../../api/useFetch";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [isOwner, setIsOwner] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const initInputRef = useRef();
  const idHotelInputRef = useRef();
  useEffect(() => {
    initInputRef.current.focus();
  }, []);
  useEffect(() => {
    isOwner ? idHotelInputRef.current.focus() : initInputRef.current.focus();
  }, [isOwner]);

  const checkIsOwner = () => {
    setIsOwner(!isOwner);
  };
  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const checkLogin = (res) => {
    res.success === "1"
      ? message
          .loading("Đang đăng nhập", 1)
          .then(() => message.success("Đăng nhập thành công", 1))
          .then(() => navigate("/room"))
      : message.error("Đăng nhập thất bại");
  };
  const loginError = (error) => {
    message.error(error);
  };

  const handleLogin = () => {
    if (
      userName !== "" &&
      userName !== undefined &&
      userName !== null &&
      password !== "" &&
      password !== undefined &&
      password !== null
    ) {
      fetchData(
        "/api/User/getCurrentUser",
        "post",
        "application/json",
        JSON.stringify({
          username: userName,
          password: password,
        }),
        checkLogin,
        loginError
      );
    } else {
      message.warning("Vui lòng nhập đầy đủ thông tin");
    }
  };
  return (
    <Row className="login" type="flex" justify="center" align="middle">
      <Row className="login-container">
        <Col
          className="login-container-child-logo"
          xs={{ span: 24 }}
          md={{ span: 12 }}
        >
          <div className="login-info">
            <div className="login-info-logo">
              <div className="login-info-logo-main animation-logo">
                <img
                  className="login-info-logo-main-logo"
                  src={main_logo}
                  alt=""
                />
              </div>
              <div className="login-info-logo-main">
                <img
                  className="login-info-logo-main-name"
                  src={main_name}
                  alt=""
                />
              </div>
              <p className="login-info-logo-main-title">
                Phần mềm quản lý khách sạn tốt nhất Việt Nam
              </p>
            </div>
            <div
              className={
                isOwner
                  ? "login-info-achievement padding-top"
                  : "login-info-achievement"
              }
            >
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
        </Col>
        <Col
          className="login-container-child-form"
          xs={{ span: 24 }}
          md={{ span: 12 }}
        >
          <div className="login-form">
            <form method="POST">
              <div className="login-form-customer">
                <p className="login-form-customer-title">
                  Tên đăng nhập / Email
                </p>
                <Input
                  ref={initInputRef}
                  className="login-form-customer-email"
                  placeholder="Nhập vào tài khoản"
                  value={userName}
                  onChange={handleOnChangeUserName}
                  prefix={main_logo}
                  name="userName"
                />
                <p className="login-form-customer-title">Mật khẩu</p>
                <Input
                  type="password"
                  className="login-form-customer-password"
                  placeholder="Nhập vào mật khẩu"
                  name="password"
                  value={password}
                  onChange={handleOnChangePassword}
                  suffix={sao_khue}
                />
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
                    <Input
                      ref={idHotelInputRef}
                      className="login-form-owner-id"
                      placeholder="Nhập vào mã khách sạn"
                    />
                  </div>
                </>
              )}
              <div className="login-form-handle">
                <button
                  type="button"
                  className="login-form-handle-login"
                  onClick={handleLogin}
                >
                  Đăng nhập
                </button>
                <a
                  href="http://localhost:3000/"
                  className="login-form-handle-reset-pass"
                >
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Row>
  );
};

export default Login;
