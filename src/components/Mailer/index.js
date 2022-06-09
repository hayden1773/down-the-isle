import React from 'react'
import emailjs from '@emailjs/browser'


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_2xzoido', e.target, 'EDmHfavqn0UkNSC_M')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  return (
<div>
      <div className ="container">
          <form onSubmit={sendEmail}>
        <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="name" name="name"/>
            </div>
            <div className="col-8 form-group mx-auto">
                <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                </div>
                <div className="col-8 form-group mx-auto">
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                </div>
                <div className="col-8 form-group mx-auto">
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Message" name="message"> </textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="sendMessage"></input>
                </div>
        </div>
          </form>
    </div>
</div>




  )}

export default sendEmail