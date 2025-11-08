// Welcome alert
function welcomeMessage() {
  alert("🎓 Welcome to Group 10’s Online Course Enrollment Page!");
}

// Image click
function imageClick() {
  alert("You clicked the course image!");
}

// List click
function listAlert() {
  alert("List item clicked!");
}

// Email validation
function validateEmail() {
  let email = document.getElementById("email").value;
  let confirmEmail = document.getElementById("confirmEmail").value;

  if (email !== confirmEmail) {
    alert("Emails do not match. Please check again.");
    return false;
  } else {
    alert("✅ Enrollment form submitted successfully!");
    return true;
  }
}
