import React, { Component } from 'react';
import Header from "./components/Header";
import api from "./services/api";
import "./style.css";
import Main from "./pages/main";
import Routes from "./routes";


//Projeto prático do curso de React da Rocketseat
const App = () =>(
  <div className="App">
      <Header/>
      <Routes/>
  </div>
);


export default App;
