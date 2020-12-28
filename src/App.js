import React from 'react';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Favorites } from './components/Favorites';
import { Footer } from './components/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main />
        </Route>
        <Route
          path="/favorites"
        >
          <Favorites />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
