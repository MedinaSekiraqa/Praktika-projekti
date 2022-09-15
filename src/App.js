import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import pages
import LogIn from "./components/pages/LogIn"
import Home from "./components/pages/Home"
import Services from './components/pages/Services'
import AboutUs from './components/pages/AboutUs';
import Biografy from './components/pages/Biografy';
import ContactUs from './components/pages/ContactUs';

//React Router Import
import { Route, Routes}from "react-router-dom"
//import Layots
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';


function App() {
  return (
   
     <div className="App">

    
       
       <Navbar/>


       
        <br/>
       <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/biografy" element={<Biografy/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
       </Routes>

       

       
      <br/>




      
    <Footer/>
      

     </div>
       
  
  );
}

export default App;


