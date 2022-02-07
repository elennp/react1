import React from 'react';
import Navbar from './componentes/Navbar/Navbar';
import './App.css';
import {BrowserRouter ,  Router, Route, Switch } from 'react-router-dom';
import Home from './componentes/hom/Home';
import Singin from './componentes/sing-in/Singin';
import Items from './componentes/sing-in/Items';
import Cards from './componentes/card/Cards';
import Footer from './componentes/footer/Footer';
  

function App() {
  return (
    
    <div className='App'>
      
     <BrowserRouter>
      <Navbar/>
       
      <Switch >
        <Route  index element={<Home/>}/> 

        
      </Switch>
      <Cards/>
      <Items/> 
      <Footer/> 
       
       
      
     </BrowserRouter>
    </div>
    
  );
};

export default App;

