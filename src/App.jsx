import React from 'react'
import Logo from "./components/Logo"
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'


function App() {
return (
    <div className="App">
      <main>
        <Logo />
        <Header />
        <Content />
        <Footer />
      </main>
    </div>
  );
}


export default App;
