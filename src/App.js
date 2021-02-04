import UserIndex from './pages/User/UserIndex';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginIndex from './pages/Login/LoginIndex';


function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/users">
            <UserIndex />
        </Route>
        <Route exar path="/">
            <LoginIndex />
        </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
