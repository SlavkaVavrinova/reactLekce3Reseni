import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

/* //Varianta před importem

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
};

const Main = (props) => {
  return (
    <main>
      <p>{props.content}</p>
    </main>
  );
};

const Footer = (props) => {
  return (
    <footer>
      &copy; {props.year}, {props.author}
    </footer>
  );
};

*/

const App = () => {
  return (
    <>
      <Header title="Titulek stránky" />
      <Main content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, nesciunt voluptate officiis veniam minima delectus quam voluptatum alias corrupti et quod repellat sapiente accusamus blanditiis, cumque illo debitis perferendis. Placeat, harum sint iure numquam aut blanditiis voluptatibus veritatis inventore nisi consequatur odio modi delectus aspernatur quas dolore, consectetur asperiores?" />
      <Footer author="Alena Nováková" year={2021} />
    </>
  );
};

render(<App />, document.querySelector('#app'));
