import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';


function SendEmail() {
    const form = useRef()
    function submitEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6ouiddr', 'template_2xzoido',form.current, 'EDmHfavqn0UkNSC_M')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <h1>CONTACT YOUR GUEST TO JOIN YOUR SPECIAL DAY</h1>
            <div className="container">
                <form ref={form} onSubmit={submitEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Your Guest's name" name="name" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder=" Your Guest's Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="email" className="form-control" placeholder=" Reply to Email Address" name="reply_to" />
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
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

    )
}

export default SendEmail