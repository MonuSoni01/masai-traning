class User {
  #password; // private

  constructor(name) {
    this.name = name;
  }

  // username validation
  validateUsername(userName) {
    if (userName == "Monu") {
      return true;
    }
    return false;
  }

  // password validation
  validatePassword(password) {
    if (password == 1236) {
      return true;
    }
    return false;
  }

  // MAIN SIGNUP FUNCTION
  signUp(userName, password) {
    let isValidUser = this.validateUsername(userName);
    let isValidPass = this.validatePassword(password);

    if (isValidUser && isValidPass) {
      this.userName = userName;
      this.#password = password;
      return "🎉 Signup Successful!";
    } else {
      return "❌ Invalid Username or Password";
    }
  }
}

// GLOBAL OBJECT
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
