let nameParam;
let email;
let feedback;

function getName() {
    nameParam = document.getElementById("name").value;
}

function getEmail() {
    email = document.getElementById("email").value;
}

function getFeedback(){
    feedback = document.getElementById("feedback").value;
}

$(document).ready(function(){
    $("#buttonSubmit").click(function(){
        $(".feedbacks").append(
            "<p class='feedbackP'>" + "Name: " + nameParam + "<br><br>" + "Email: " + email + "<br><br>" + "Message: " + feedback + "</p>"
        );
    });
});
