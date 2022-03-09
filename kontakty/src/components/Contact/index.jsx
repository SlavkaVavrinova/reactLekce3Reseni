import React from 'react';

const Contact = ({ name, job, info }) => {
  return (
    <div className="contact">
      <h2 className="contact__name">{name}</h2>
      <div className="contact__text">
        <p className="contact__job">{job}</p>
        <p className="contact__info">{info}</p>
      </div>
    </div>
  );
};

export default Contact;

/* varianta 2

const Contact = (props) => {
  return (
    <div className="contact">
      <h2 className="contact__name">{props.name}</h2>
      <div className="contact__text">
        <p className="contact__job">{props.job}</p>
        <p className="contact__info">{props.info}</p>
      </div>
    </div>
  );
};


*/
