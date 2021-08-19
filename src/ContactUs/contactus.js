import React from 'react'

//import { NetlifyForm, Honeypot } from 'react-netlify-forms'

const ContactUs = () => (
  // <NetlifyForm name='Contact' action='/submit/' honeypotName='bot-field'>
  //   {({ handleChange, success, error }) => (
  //     <>
  //       <Honeypot />
  //       {success && <p>Thanks for contacting us!</p>}
  //       {error && (
  //         <p>Sorry, we could not reach our servers. Please try again later.</p>
  //       )}
  //       <div class="field">
  //         <label htmlFor='name'>Name:</label>
  //         <input type='text' name='name' id='name' onChange={handleChange} />
  //       </div>
  //       <div class="field">
  //         <label htmlFor='message'>Message:</label>
  //         <textarea
  //           type='text'
  //           name='message'
  //           id='message'
  //           rows='4'
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div class="field">
  //         <button type='submit'>Submit</button>
  //       </div>
  //     </>
  //   )}
  // </NetlifyForm>
  <center>
  <form name="contact" method="POST" data-netlify="true">
    <div class="fields">
    <div class="field half">
      <input type="text" name="name" id="name" placeholder="Your Name"/>
    </div>
    <br/>
    <div class="field half">
      <input type="email" name="email" id="email" placeholder="Email" />
    </div>
    <br/>
    <div class="field">
      <textarea name="message" id="message" rows="7" placeholder="Message"></textarea>
    </div>
    <br/>
    <div class="field">
      <input type="file" id="myfile" name="myfile" placeholder="Upload file"/>
    </div>
    <br/>
    <div class="field">
      <div>
        <div data-netlify-recaptcha="true"></div>
      </div>
    </div>
    <div class="field">
      <button type="submit">Send</button>
    </div>
    </div>
  </form>
  </center>
)

export default ContactUs;

