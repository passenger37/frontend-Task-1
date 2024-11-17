import React from 'react';
import "./Dashboard.css";
import {NavLink} from 'react-router-dom';
import { BiPencil } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5";
import { PiLineVertical } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Dashboard() {
  return (
    <div className='dasboard'>
      <div className='task'>
        <h1>Task for MERN Stack  <BiPencil /></h1>
        <p> Click on block to configure and add in Sequence</p>
      </div>
      <div className='saveschedule'>
        <NavLink to="#"><button className="btn saveschedule"><IoRocketOutline /> Save & Schedule <PiLineVertical /><RiArrowDropDownLine /></button></NavLink>
      </div>
    </div>  
  )
}
