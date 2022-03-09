import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Date from './components/Date';

/* Varianta než se řešil import

const Date = ({ day, month, year }) => {
  return (
    <div className="date">
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
      <span className="date__year">{year}</span>
    </div>
  );
};

*/

const App = () => {
  return (
    <>
      <Date day={5} month="únor" year={2022} />
      <Date day={1} month="leden" year={2023} />
      <Date day={25} month="prosinec" year={2222} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
