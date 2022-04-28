import "./Home.scss";
import vn_flag from "../../images/vietnamflag.svg";
import usa_flag from "../../images/usaflag.svg";
import japan_flag from "../../images/Flag_of_Japanese.svg";
import Login from "../Login/Login";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="home-header">
          <div className="home-languages">
            <div className="home-box-icon">
              <img className="home-icon" src={vn_flag} alt="" />
            </div>
            <div className="home-box-icon">
              <img className="home-icon" src={usa_flag} alt="" />
            </div>
            <div className="home-box-icon">
              <img className="home-icon" id="jp-flag" src={japan_flag} alt="" />
            </div>
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
