import React from 'react'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Team from './pages/Team'
import WrongPage from "./pages/WrongPage";
import { Switch, Route } from "react-router-dom";

export default function Main() {
    return (
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <WrongPage />
          </Route>
        </Switch>

      </main>
    );
}
