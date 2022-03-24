// import { onNavigate } from '../main.js';

export const login = () => {
  const htmlLogin = `<div class="containerSignUpLogIn">
      <div class="logIn">
        <h1>Log In</h1>
        <label class="labels" for="emailLogIn"> Email Address </label>
        <input class="input" id="emailLogIn" type="email" placeholder=" "/>
        <label class="labels" for="passwordLogIn"> Password </label>
        <input class="input" id="passwordLogIn" type="password" placeholder=" " />
        <button class="btnSignupLogin" id="btnLogIn">Log In</button> <br>
        <button class="btnGoogle" id="btnSignUpGoogle2"> <span class="fa-brands fa-google"> </span> Log In with Google</button>
        <p class="messageLogIn"></p>
        <p class="message"> Already have an account?</p>
        <button class="btnSig" id="btnSig"> Sign Up here.</button>
        <h3 id="login"></h3>
      </div>
    </div>
  `;
  return htmlLogin;
};
