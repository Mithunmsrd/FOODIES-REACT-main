import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Payment from './Payment';
import PaymentConfirmation from './PaymentConfirmation'; // Create this component next

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Payment} />
        <Route path="/payment-confirmation/:amount" component={PaymentConfirmation} />
      </Switch>
    </Router>
  );
}

export default App;
