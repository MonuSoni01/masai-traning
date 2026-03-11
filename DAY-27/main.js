class User {
  #password;
  constructor(name) {
    this.name = name;
  }

  validateUsername(userName) {
    if (userName == "Monu") {
      return true;
    }
    return false;
  }

  validatepassword(password) {
    if (password == 12336) {
      return true;
    }
    return false;
  }

  signUp(userName, password) {
    let isValidUser = this.validateUsername(userName);
    let isValidPass = this.validatepassword(password);

    if (isValidUser && isValidPass) {
      this.userName = userName;
      this.#password = password;
      return "🎉 Signup Successful!";
    } else {
      return "check Again Dikkat hai ";
    }
  }
}

let u1 = new User("TestUser");

function doSignup() {
  let un = document.getElementById("un").value;
  let pw = document.getElementById("pw").value;

  let result = u1.signUp(un, pw);

  // show message on screen
  document.getElementById("message").innerText = result;

  // also log in console
  console.log(result);
}
