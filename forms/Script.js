function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message :document.getElementById("message").value,
    }
    emailjs.send("service_k3v461u","template_iqvfq7t",parms).then(alert("Email sent !!!"))
}