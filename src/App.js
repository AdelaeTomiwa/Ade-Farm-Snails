import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';

// Importing Context
import { Provider } from './data/Context';

// Importing Components
import Home from './components/pages/home/Home';

function App() {
   return (
      <Provider>
         <Router>
            <React.Fragment>
               <Switch>
                  <Route exact path='/' component={Home} />
               </Switch>
            </React.Fragment>
         </Router>
      </Provider>
   );
}

export default App;
