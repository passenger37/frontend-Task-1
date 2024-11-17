import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Componen
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from"./components/Footer/Footer";

function App() {
  // React.useEffect(()=>{
  //   WebFont.load({
  //     google:{
  //       families:["Roboto","Droid Sans", "Chilanka"]
  //     }
  //   })
  // },[]);
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path='/' element={< Home />} />
          {/* <Route path='/about' element={< About/>} /> */}
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
