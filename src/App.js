import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import clientes from './components/clientes';
import productos from './components/productos';
import ventas from './components/ventas';

class App extends Component {

  render() { 
    return (  
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/clientes">CLIENTES</Link>
              </li>
              <li>
                <Link to="/productos">PRODUCTOS</Link>
              </li>
              <li>
                <Link to="/ventas">VENTAS</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route path="/clientes" component={clientes} />
          <Route path="/productos" component={productos} />
          <Route path="/ventas" component={ventas} />
        </Switch>
        </div>
      </Router>
      
    );
  }
}
 
export default App;
