import {Form,Button} from "react-bootstrap";
import emailjs from "emailjs-com";
import env from "react-dotenv";
import "./css/contact.css";


function Contact(){

    function sendEmail(e) {
        e.preventDefault();

        // emailjs.init(`${env.REACT_APP_EMAIL_USER_ID}`);
    
        emailjs.sendForm(`${env.REACT_APP_EMAIL_SERVICE_ID}`, `${env.REACT_APP_EMAIL_TEMPLATE_ID}`, e.target, `${env.REACT_APP_EMAIL_USER_ID}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      e.target.reset();

      }

    return(
<div className="d-flex flex-column justify-content-center align-items-center p-3" style={{height:'100vh'}}>
    <div className="p-3" style={{width:'400px'}}>
            <p className="sourcefont" >  Hi guys, i hope you doing well. My name is Akinsola Oluwadamilare, 
            i am a software developer with keen interest in music applications, 
            i am willing to bring to life any project you can conjure from the depths of your magical mind, 
            feel free to reach me here &#128071; </p>   
 <div className="format" >
<Form onSubmit={sendEmail}>
<Form.Group className="mb-3 firafont" controlId="exampleForm.ControlInput1">
<Form.Label htmlFor="inlineFormInputName" visuallyhidden>Name</Form.Label>
<Form.Control id="inlineFormInputName" className="mb-2" placeholder="Jane Doe" name="name" />
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="name@example.com" name="email" />
</Form.Group>
<Form.Group className="mb-3 firafont" controlId="exampleForm.ControlTextarea1">
<Form.Label>How can i help you</Form.Label>
<Form.Control as="textarea" rows={3} name="message" />
</Form.Group>
<Button variant="outline-success" className="btn popperfont" type="submit">
    Submit
  </Button>
</Form>
</div>
         

<p className="sourcefont" > i am excited to work with you, so please let me know if you need anything.</p>
        </div>
            </div>
           
    )
}

export default Contact;