function sendMail(contactForm) {
    emailjs.send("gmail","resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        };
    )
}