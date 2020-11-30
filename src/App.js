import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';

// Importing Context
import { Provider } from './data/Context';

// Importing Components
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Contact from './components/pages/contact/Contact';
import Product from './components/pages/product/Product';
import OurProducts from './components/pages/ourProducts/OurProducts';
import OrderNow from './components/pages/ordernow/OrderNow';

function App() {
   return (
      <Provider>
         <Router>
            <ScrollToTop />
            <React.Fragment>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about-us' component={About} />
                  <Route exact path='/contact' component={Contact} />
                  <Route
                     exact
                     path='/products/order/:name/:id'
                     component={Product}
                  />
                  <Route path='/our-products' component={OurProducts} />
                  <Route path='/order-now' component={OrderNow} />
               </Switch>
               <Footer />
            </React.Fragment>
         </Router>
      </Provider>
   );
}

export default App;
