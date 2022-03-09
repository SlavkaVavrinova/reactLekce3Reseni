import React from 'react';

const Main = ({ content }) => {
  return (
    <main>
      <p>{content}</p>
    </main>
  );
};

export default Main;

/* Varianta 2


const Main = (props) => {
  return (
    <main>
      <p>{props.content}</p>
    </main>
  );
};

*/
