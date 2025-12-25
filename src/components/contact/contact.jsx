import React, {useState} from 'react'
import './contact.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import whitearrow from '../../assets/white-arrow.png'


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "6bfa367b-c2dc-4b70-a5b5-0d53dbcd7cb2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((response)=>response.json());

    if(response.success){
        console.log("Success",response);
        setResult(response.message);
        event.target.reset();
    }else{
        console.log("Error", response);
        setResult(response.message);
    }
};
    return (
    <div className='contact container' >
        <div className="contact-col">
            <h3>Send us a message! <img src={msgicon} alt="" /></h3>
            <p>
                Feel free to reach out through contact form or find our contact 
                information below. Your feedback, questions, and suggestions are 
                important to us as we strive to provide exceptional service to our customer.
            </p>
            <ul>
                <li> <img src={mailicon} alt="" />Email: balkisadlina@gmail.com</li>
                <li><img src={phone} alt="" />Phone: +6011-36007067</li>
            </ul>
        </div>
        
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                <label>Write your message here:</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type ='submit' className='btn dark-btn'>Submit Now <img src={whitearrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact