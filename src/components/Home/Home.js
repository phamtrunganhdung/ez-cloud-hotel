import "./Home.scss";
import vn_flag from "../../images/vietnamflag.svg";
import usa_flag from "../../images/usaflag.svg";
import japan_flag from "../../images/Flag_of_Japanese.svg";
import Login from "../Login/Login";
import { useState } from "react";

const Home = () => {
  const [listFlag, setListFlag] = useState([
    { id: "vn-flag", flag: vn_flag },
    { id: "usa-flag", flag: usa_flag },
    { id: "jp-flag", flag: japan_flag },
  ]);
  const handleActiveLanguages = (flag) => {
    console.log(">>> check click flag", flag);
  };
  return (
    <>
      <div className="home">
        <header className="home-header">
          <div className="home-languages">
            {listFlag.map((item, index) => {
              return (
                <div className="home-box-icon" key={item.id}>
                  <img
                    className="home-icon"
                    id={item.id}
                    src={item.flag}
                    alt=""
                    onClick={() => handleActiveLanguages(item.id)}
                  />
                </div>
              );
            })}
          </div>
        </header>
        <section className="home-content">
          <Login />
        </section>
        <footer className="home-footer">
          <p className="home-footer-title">
            Ứng dụng quản lý cho chủ khách sạn
          </p>
          <div className="home-footer-download">
            <div className="home-footer-download-app-store"></div>
            <div className="home-footer-download-ch-play"></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
