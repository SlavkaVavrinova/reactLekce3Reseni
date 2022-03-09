import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Contact from './components/Contact';

const App = () => (
  <>
    <Contact name="Alena Nováková" job="Učitelka" info="27 let, Brno" />
    <Contact name="Petr Ajťák" job="Programátor" info="23 let, Budějce" />
    <Contact name="Pepa Dříč" job="Malíř pokojů" info="50 let, Horní Dolní" />
  </>
);

render(<App />, document.querySelector('#app'));
