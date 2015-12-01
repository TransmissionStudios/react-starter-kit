import React, { Component } from 'react';
import Header from 'components/Header.jsx';
import Content from 'components/Content.jsx';
import Footer from 'components/Footer.jsx';

class App extends Component {
  render() {
   return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
   )
  };
}

export default App;
