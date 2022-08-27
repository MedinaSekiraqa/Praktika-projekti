import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import pages
import LogIn from "./components/pages/LogIn"
import Home from "./components/pages/Home"
import Services from './components/pages/Services'

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
       </Routes>

       

       
      <br/>




      
    <Footer/>
      

     </div>
       
  
  );
}

export default App;


