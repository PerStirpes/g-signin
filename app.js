

const $ = document.querySelector.bind(document);

$("body").innerHTML = `
   <button id="login">Login</button>
   <button id="logout">Logout</button>
`;

gapi.load("auth2", () => {
  const auth2 = gapi.auth2.init({
    clientId:
      ""
  });

  auth2.isSignedIn.listen(status => {
    console.log(status);
  });

  auth2.currentUser.listen(user => {
    const profile = user.getBasicProfile();
    const name = profile.getName();
    const givenName = profile.getGivenName()
    const email = profile.getEmail();
    const avatar = profile.getImageUrl();

    console.log({profile, name, givenName, email, avatar})
  });

  
  $("#login").addEventListener("click", () => {
    auth2.signIn();
  });

  $("#logout").addEventListener("click", () => {
    auth2.signOut();
  });

});
