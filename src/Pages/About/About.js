import React from 'react';

function About() {
  return (
    <div>
      <h1 align="center">About</h1>
      <div className="card about">
        <p>This cookbook is a digitized version of the cookbook that was created in 2006 of McClain Family Recipes. The goal is to make it easier to access as well as add new recipes as time goes on.</p>
      </div>
      <div className="card about">
        <p>If you run into any issues send me an email at <a href="mailto:nathanblaubach@gmail.com">nathanblaubach@gmail.com</a></p>
      </div>
      <div className="card about">
        <p>Powered by React.js, create-react-app and react-router</p>
      </div>
    </div>
  );
}

export default About;