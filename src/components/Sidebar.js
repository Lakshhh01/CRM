import React, { useState } from 'react';
import {
    FaCommentAlt,
    FaPhone ,
    FaRegChartBar,
    FaShoppingBag,
    FaTh,
    // FaThList, 
    FaUserAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { StickyContainer } from 'react-sticky';

const Sidebar = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path:"dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"leadslist",
            name:"LeadsList",
            icon:<FaShoppingBag/>
        },
        {
            path:"about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"contactus",
            name:"ContactUs",
            icon:<FaPhone />
        }

    ]
    return (
        
        <div className='container'>
            <div style={{width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Media  </h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"></div>
                        {/* <FaBars onClick={toggle}/> */}
                        <h2><i className="fa fa-newspaper-o" aria-hidden="true" style={{cursor:"pointer"}} onClick={toggle}/></h2>
                    
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Sidebar;

