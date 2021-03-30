import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
      
      {/* <Login /> */}
    </div>
  );
}

export default App;
