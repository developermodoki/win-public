import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = ():JSX.Element => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
