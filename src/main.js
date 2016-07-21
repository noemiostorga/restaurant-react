import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Layout

import Layout from 'layout/example.js'
// UI
import photoContainer from 'components/photoContainer';
import boxContainer from 'components/boxContainer';


const Site = (
  <Router history={hashHistory}>
  	<Route component={Layout}>
	   <Route path="/" component={photoContainer} />
    </Route>
  </Router>
);

render(Site, document.getElementById('app'));