//import logo from './logo.svg';
import './App.css';

import React from "react";
//import {Switch, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

// import addReview from "./components/add-review";
// import Restaurants from "./components/Restaurants";
// import restaurantList from "./components/restaurant-list";
//  import Login from "./components/Login";
import Home from "./Pages/Home"
import {BrowserRouter,Route} from "react-router-dom";

function App() {
return (
  <BrowserRouter>
  <div className="App">
      <h1>React Router DOM Tutorial</h1>
    </div>
    </BrowserRouter>
);
}
export default App;

/* function App() {

    const [user, setUser] = React.useState(null);

    async function login(user=null){
      setUser(user);
    }
    async function logout(){
      setUser(null);
    }

  return (
   
    <div>
     <nav className="navbar navbar-empand navbar-dark bg-dark">
      <a href="/Restaurants" classname="navbar-brand">
        Restaurant Reviews
      </a>
      <div className = "navbar-nav mr-auto">
        <li className = "nav-item">
          <link to= {"/Restaurants"} className="nav-link">
            Restaurants
          </link>
        </li>
        { <li className="nav-item"> { user ? ( 
          <a onClick={logout} className="nav-link" style={{cursor:"pointer"}}>
          logout {user.name} </a>
          ) : (
            <link to={"/login"} className = "nav-link">
              Login
            </link>)
          }
        </li> }
      </div>
     </nav>

     { <div className="container mt-3">
      <switch>
        <Route exact path={["/","/Restaurants"]} component = {restaurantList} />
        <Route 
          path="/restaurants/:id/review" 
          render = {(props) => (
            <addReview {...props} user={user} />
          )}
          
        />
        <Route 
          path="/Restaurants/:id"
          render={(props) => (
            <restaurants {...props} user={user} />
            )
          }
          />
          <Route
          path="/Login"
          render={(props) => (
            <Login {...props} login={login} />
          )}
          />
       </switch>
     </div> }
    </div>
   
  );
}

export default App;
 */