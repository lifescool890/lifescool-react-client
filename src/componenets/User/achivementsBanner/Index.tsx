import {Typography } from "antd";
import appScaleLogo from "../../../assets/images/Fact 7.png";
import "../../font.scss";
import "./style.scss";

function Index() {
  return (
    <>
     
     <div className="achivement-out">
      <div className="achivement">
    <div className="achivement-sub">
      <Typography.Title className="type-usage achivement-text" style={{color:"#ffffff"}}>
        1500+ <br/>Learners
      </Typography.Title>
    </div>
    <div className="vertical-divider"></div>
    <div className="achivement-sub">
      <Typography.Title className="type-usage achivement-text" style={{color:"#ffffff"}}>
        15+ <br/>Courses
      </Typography.Title>
    </div>
    <div className="vertical-divider"></div>
    <div className="achivement-logo">
      <img className="appScaleLogo"src={appScaleLogo} alt="" />
    </div>
    <div className="vertical-divider"></div>
    <div className="achivement-sub">
      <Typography.Title className="type-usage achivement-text"style={{color:"#ffffff"}}>
        5+ <br/>Cities
      </Typography.Title>
    </div>
    <div className="vertical-divider"></div>
    <div className="achivement-sub">
      <Typography.Title className="type-usage achivement-text" style={{color:"#ffffff"}} >
        10+ <br/>Trainers
      </Typography.Title>
    </div>  
     </div>
     </div>
    </>
  );
}

export default Index;
