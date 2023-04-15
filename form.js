import {publicKey, serviceId, templateId} from "./config.js";


(function(){
    emailjs.init(publicKey);
    window.sendMail = sendMail;
    
    
})();

function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("replyTo").value
    };
    
        emailjs.send(serviceId, templateId, params)
        .then( res => {

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sucessfully sent! Thank you!");
        })
    
    
}
