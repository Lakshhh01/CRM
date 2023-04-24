import React, {useState} from 'react';
import './Dashboard.css';
import { NotificationsNone, Settings, AccountCircle } from "@mui/icons-material";
import DropDownProfile from './DropDownProfile';


const DashboardHome = () => {
  const[openProfile,setOpenProfile] = useState(false);
  

  return (
    <div className='topbar' >
      {/* <h1>Dashboard Page</h1> */}
      <div className='topbarWrapper'>
        <div className='topLeft'>.</div>

        <div className='topRight'>
          <div className='topbarIconContainer'>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          {/* <div className="topbarIconContainer">
            <AccountCircle />
          </div> */}
          
          <div className='topbarIconContainer'>
          {
			      openProfile && <DropDownProfile />
		      }
          <img src={require('./profile1.jpg')}  onClick={() => setOpenProfile((prev) => !prev)}
  			  style={{width: 70, height: 70, borderRadius: 400/ 2,position:'right', top:10}} />
          </div>
        </div>
      </div>
      test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> test<br/> brit<br/> hbdseuhf<br/> 
    </div>
  )
}

export default DashboardHome;