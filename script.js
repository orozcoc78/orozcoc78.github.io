function loadSys() {
    emailjs.init({
        publicKey: "hGAYFWZLq_ZQn8MgU",
        blockHeadless: true,
    });
}

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_p5k74rv", "template_xpt9tlj", this, "hGAYFWZLq_ZQn8MgU")
            .then(() => {
                document.getElementById("contactName").value = 'Message Sent';
                document.getElementById("contactEmail").value = 'Message Sent';
                document.getElementById("contactContent").value = 'Message Sent';
            }, (error) => {
                document.getElementById("contactName").value = 'Error sending message';
                document.getElementById("contactEmail").value = 'Error sending message';
                document.getElementById("contactContent").value = 'Error sending message';
            });
        setTimeout(function(){
            document.getElementById("contactName").value = '';
            document.getElementById("contactEmail").value = '';
            document.getElementById("contactContent").value = '';
       },1500);
    });
}
