import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Holdings from './Holdings/HoldingsIndex'
import Accounts from './Accounts/AccountsIndex'
import Home from './Home'



export default class MainBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blank: ''

    }
  }

  render() {

    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/holdings" component={Holdings} />
        <Route path="/accounts" component={Accounts} />
      </Switch>
      </div>
    );
  }
}

