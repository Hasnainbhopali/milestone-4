var _a;
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var EducationElement = document.getElementById("Education");
    var ExperienceElement = document.getElementById("Experience");
    var SkillsElement = document.getElementById("Skills");
    if (profilePictureInput &&
        nameElement &&
        phoneElement &&
        emailElement &&
        EducationElement &&
        ExperienceElement &&
        SkillsElement) {
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var Education = EducationElement.value;
        var Experience = ExperienceElement.value;
        var Skills = SkillsElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> ").concat(name_1, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            \n            <h3>Education</h3>\n            <p>").concat(Education, "</p>\n            \n            <h3>Experience</h3>\n            <p>").concat(Experience, "</p>\n            \n            <h3>Skills</h3>\n            <p>").concat(Skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden"); // Display the resume output
        }
        else {
            console.error("The resume output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing");
    }
});
