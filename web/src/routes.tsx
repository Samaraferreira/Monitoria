import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import List from './pages/List';
import TeacherForm from './pages/TeacherForm';
import Success from './pages/Success';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={List} />
        <Route path="/give-classes" component={TeacherForm} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
