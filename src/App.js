import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserContext } from "./UserContext";

import Navbar from "./components/Navbar";
import ColorFlip from "./projects/ColorFlip";
import Counter from "./projects/Counter";
import Review from "./projects/Review";
import PasswordGenerator from "./projects/PasswordGenerator";
import Todo from "./projects/Todo";
import ImageFilter from "./projects/ImageFilter";
import Weather from "./projects/Weather";
import Quiz from "./projects/Quiz";

function App() {
  const [value, setValue] = useState("this is context");
  return (
    <div>
      <UserContext.Provider value={value}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/colorflip" component={ColorFlip} />
            <Route path="/counter" component={Counter} />
            <Route path="/review" component={Review} />
            <Route path="/random-password" component={PasswordGenerator} />
            <Route path="/todo" component={Todo} />
            <Route path="/image" component={ImageFilter} />
            <Route path="/weather" component={Weather} />
            <Route path="/quiz" component={Quiz} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
