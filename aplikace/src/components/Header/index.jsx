import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

/* Varianta 2


const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

*/
