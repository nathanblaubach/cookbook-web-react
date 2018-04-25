import React from 'react';

function About() {
  const fLink = "https://feathericons.com/";
  const cbLink = "https://twitter.com/colebemis";
  const mitLink = "https://github.com/feathericons/feather/blob/master/LICENSE";
  return (
    <div>
      <h1 align="center">About</h1>
      <div className="card about">
        <p>This cookbook is a digitized version of the cookbook that was created in 2006 of McClain Family Recipes. The goal is to make it easier to access as well as add new recipes as time goes on.</p>
        <hr />
        <p>If you run into any issues send me an email at <a href="mailto:nathanblaubach@gmail.com">nathanblaubach@gmail.com</a></p>
        <hr />
        <p>Icons are from <a href={fLink}>Feather</a> by <a href={cbLink}>Cole Bemis</a> which is licensed under the <a href={mitLink}>MIT License</a></p>
      </div>
    </div>
  );
}

export default About;