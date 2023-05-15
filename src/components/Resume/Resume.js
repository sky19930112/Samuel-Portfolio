import React from 'react';

function Resume() {
  return (
    <section>
     <a href={require("./Resume.pdf")} download>
	    Downloadable Resume
	</a>
    </section>
  );
}

export default Resume;