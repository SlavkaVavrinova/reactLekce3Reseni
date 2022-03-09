import React from 'react';

const Date = ({ day, month, year }) => {
  return (
    <div className="date">
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
      <span className="date__year">{year}</span>
    </div>
  );
};

export default Date;

/* varianta 2

const Date = (props) => {
  return (
    <div className="date">
      <span className="date__month">{props.month}</span>
      <span className="date__day">{props.day}</span>
      <span className="date__year">{props.year}</span>
    </div>
  );
};

*/
