import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Gerador from './pages/Gerador';
// import Wallet from './pages/Wallet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Gerador } />
        {/* <Route exact path="/carteira" component={ Wallet } /> */}
      </Switch>
    </div>
  );
}

export default App;