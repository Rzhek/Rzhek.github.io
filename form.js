import {publicKey, serviceId, templateId} from "./config.js";


(function(){
    emailjs.init(publicKey);
    // document.getElementById("contact-btn").onclick = function(){
    //     return false;
    // };
    window.sendMail = sendMail;
    
    
})();

function sendMail(){
    console.log('1');
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        reply_to: document.getElementById("replyTo").value
    };
    
    // alert(!params.name);
    // console.log(params);
    
    console.log('2');
        // emailjs.send(serviceId, templateId, params)
        emailjs.send(serviceId, templateId, params)
        .then( res => {
    console.log('3');

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sucessfully sent! Thank you!");
        })
    
    
}
