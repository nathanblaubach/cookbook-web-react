import React from 'react';

function About() {
  return (
    <div style={{"text-align": "center"}}>
      <h1>About</h1>
      <div className="card">
        <p>This cookbook is a digitized version of the cookbook that was created in 2006 of McClain Family Recipes. The goal is to make it easier to access as well as add new recipes as time goes on.</p>
        <p>If you run into any issues send me an email at <a href="mailto:nathanblaubach@gmail.com">nathanblaubach@gmail.com</a></p>
      </div>
      <br />
      <div className="card">
        <p>Powered by React.js, create-react-app and react-router</p>
        <p>Logo created by Jeremy Slagle</p>
      </div>
      <img height="300px" width="300px" src={require("../../Resources/logo/logo-medium.png")} alt="logo"/>
    </div>
  );
}

export default About;