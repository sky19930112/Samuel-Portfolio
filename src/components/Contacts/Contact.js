import React, { useState } from 'react';


function Contact() {
    return (
      <section>
        <h1>Contact Me</h1>
        <form onSubmit={Submit}>
          <div>
            <label>Name:</label>
            <input type="text"/>
          </div>
          <div>
            <label>Email:</label>
            <input type="text"/>
          </div>
          <div>
            <label>Content:</label>
            <textarea type="text"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

  export default Contact;