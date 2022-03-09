import React from 'react';

const Footer = ({ year, author }) => {
  return (
    <footer>
      &copy; {year}, {author}
    </footer>
  );
};

export default Footer;

/* Varianta 2


const Footer = (props) => {
  return (
    <footer>
      &copy; {props.year}, {props.author}
    </footer>
  );
};

*/
