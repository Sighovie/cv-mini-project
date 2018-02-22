function sendMail(contactForm) {

    // parameters: service_id, template_id, template_parameters
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
        console.log("FAILED. error=", err);
    });
}


