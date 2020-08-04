function queryForm()
{
    var queryBox = document.getElementById("queryBox").style.display = "block";
    var queryForm = document.getElementById("queryForm");
    var linebreak = document.createElement("br");

    var lblName = document.createElement("label");
    lblName.textContent = "Name: ";
    queryForm.appendChild(lblName);

    var fullName = document.createElement("input");
    fullName.name = "fullName";
    fullName.type = "text";
    fullName.required = "required";
    queryForm.appendChild(fullName);
    queryForm.appendChild(linebreak);


    var lblEmail = document.createElement("label");
    lblEmail.textContent = "Email: ";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(lblEmail);

    var email = document.createElement("input");
    email.name = "email";
    email.type = "text";
    email.required = "required";
    queryForm.appendChild(email);


    var lblPhoneNumber = document.createElement("label");
    lblPhoneNumber.textContent = "Phone Number: ";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(lblPhoneNumber);

    var phoneNumber = document.createElement("input");
    phoneNumber.name = "phoneNumber";
    phoneNumber.type = "text";
    phoneNumber.required = "required";
    queryForm.appendChild(phoneNumber);


    var submitQuery = document.createElement("input");
    submitQuery.type = "submit";
    submitQuery.value = "Submit Query";
    queryForm.appendChild(linebreak);
    queryForm.appendChild(submitQuery);
}
queryForm();