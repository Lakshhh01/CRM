import './App.css';
import './Sidebar.css'; 
import Home from './components/pages/Home';
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/pages/About";
import Analytics from "./components/pages/Analytics";
import Comment from "./components/pages/Comment";
import Dashboard from "./components/pages/DashboardHome";
import {BrowserRouter as Router, Routes, Route, Outlet} from "react-router-dom";
import DashboardLayout from './components/pages/DashboardLayout';
import HomeLayout from './components/pages/HomeLayout';
import DashboardHome from './components/pages/DashboardHome';
import ContactUs from './components/pages/ContactUs';
import LeadsList from "./components/pages/LeadsList";
import AddNewLeads from './components/pages/AddNewLeads';


// const SideBar = () => (
//   <>
//     <Sidebar/>
//     <Outlet/>
//   </>
// );

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup/>}/>
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About/>}/>
              <Route path="leadslist" element={<LeadsList/>}/>
              <Route path="leadslist/addnewleads" element={<AddNewLeads/>}/>
      
              <Route path="analytics" element={<Analytics/>}/>
              <Route path="comment" element={<Comment/>}/>
              <Route path="dashboard" element={<Dashboard/>}/>
              <Route path="contactus" element={<ContactUs/>}/>
             
            </Route>
        </Routes>
        
      </div>
    </Router>

    )
  };

export default App;


            

          



{/* <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/home" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/analytics" element={<Analytics/>}/>
<Route path="/comment" element={<Comment/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/productlist" element={<ProductList/>}/>
</Routes> */}

