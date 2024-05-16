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
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
        document.getElementById("contactName").value = 'Sent';
        document.getElementById("contactEmail").value = '';
        document.getElementById("contactContent").value = '';
        setTimeout(function(){
            document.getElementById("contactName").value = '';
       },1000);
    });
}
