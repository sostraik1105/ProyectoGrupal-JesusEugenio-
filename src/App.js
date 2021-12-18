import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { CContacto } from './components/CContacto';
import { CInicio } from './components/CInicio';
import { CNosotros } from './components/CNosotros';
import { CProducto } from './components/CProducto';

function App() {
  return (
    <>
      <Router>
        <Nav />

        <Switch>
          <Route path='/' exact>
            <CInicio/>
          </Route>
          <Route path='/nosotros'>
            <CNosotros/>
          </Route>
          <Route path='/contacto'>
            <CContacto/>
          </Route>
          <Route path='/producto'>
            <CProducto/>
          </Route>
          <Route path='/detalle/:id'>

          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
