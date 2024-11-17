
import "./Header.css";
import {NavLink} from 'react-router-dom';
import { GrDashboard } from "react-icons/gr";
import { TiLocationArrowOutline } from "react-icons/ti";
import { MdOutlineInbox } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaCheckDouble } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiGift } from "react-icons/ci";

function Header() {

  const Sequences=()=>{
    return console.log("Hello anand");
  }

  const options = () => {
    alert("Great Shot!");
  } 
  return (
    <div className="main_header">
      <div className="header">
        <div className="logo">
          <FaCheckDouble/>
          <h3>SALESBLINK</h3>
        </div>
        <div className="sub-header1">
          <div className="header-controls visit" onClick={Sequences}>
            <NavLink to="#" onClick={options}><GrDashboard /> Dashboard </NavLink>
          </div>
          <div className="header-controls">
            <NavLink to="#" onClick={options} > <TiLocationArrowOutline /> Outreach </NavLink>
          </div>
          <div className="header-controls">
            <NavLink to="#" onClick={options} > <MdOutlineInbox /> Inbox </NavLink>
          </div>
          <div className="header-controls">
            <NavLink to="#" onClick={options}> <IoCalendarClearOutline /> Meet </NavLink>
          </div> 
        </div>
      </div>
      <div className="sub-header2">
         <div className="sub-header2-controls">
            {/* <NavLink to="#"><Button type="button" variant="outline-primary" class="btn btn-primary-outline"> <IoMdAddCircleOutline /> New <RiArrowDropDownLine /></Button> </NavLink> */}
            <NavLink to="#"><button className="btn new"><IoMdAddCircleOutline /> New <RiArrowDropDownLine /></button></NavLink>
          </div>
          <div className="sub-header2-controls icon">
            <NavLink to="#"> <CiGift /> </NavLink>
          </div>
          <div className="sub-header2-controls icon">
            <NavLink to="#"> <FaRegBell /> </NavLink>
          </div>
          <div className="sub-header2-controls icon">
            <NavLink to="#"> <VscAccount /> </NavLink>
          </div>
          <div className="sub-header2-controls">
            <NavLink to="#"> Sushant S<RiArrowDropDownLine /></NavLink>
          </div>
      </div>
    </div>
  );
}

export default Header;

