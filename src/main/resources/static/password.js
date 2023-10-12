const firstName = document.getElementById("firstName");
    const middleName = document.getElementById("middleName");
    const lastName = document.getElementById("lastName");
    const submitBtn = document.getElementById("btn-submit");

    submitBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      const first = firstName.value;
      const middle = middleName.value;
      const last = lastName.value;


      function generatePassword(firstName, middleName, lastName) {
	    let password = '';
	    password += firstName.substring(0, 2);
	    password += middleName.substring(0, 2);
	    password += lastName.substring(0, 2);
	    password += Math.floor(Math.random() * 1000);
	    return password;
	  }

      console.log(generatePassword);
      
      const newUser = {
        firstName: first,
        middleName: middle,
        lastName: last,
        password: generatePassword,
      };

      console.log(newUser);

      const res = await fetch(`http://localhost:8080/user/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      console.log(res);
    });