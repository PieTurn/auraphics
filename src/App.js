import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Reviews from './pages/Reviews/Reviews';
import Clients from './pages/Clients/Clients';
// import SignUp from './pages/SignUp/SignUp';
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/About" exact component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/Clients" exact component={Clients} />
        {/* <Route path="/sign-up" exact component={SignUp} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
