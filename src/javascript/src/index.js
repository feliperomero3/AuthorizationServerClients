function log() {
  document.getElementById('results').innerText = '';

  Array.prototype.forEach.call(arguments, function(message) {
    if (message instanceof Error) {
      message = `Error: ${message.message}`;
    } else if (typeof message !== 'string') {
      message = JSON.stringify(message, null, 2);
    }
    document.getElementById('results').innerHTML += message + '\r\n';
  });
}

document.getElementById("login").addEventListener("click", login, false);
document.getElementById("logout").addEventListener("click", logout, false);

Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.DEBUG;

const settings = {
  authority: "https://localhost:5000",
  client_id: "js-app",
  redirect_uri: "http://localhost:4000/callback.html",
  response_type: "id_token",
  scope: "openid profile email",
  post_logout_redirect_uri: "http://localhost:4000/index.html",
};

const manager = new Oidc.UserManager(settings);

manager.getUser().then(function(user) {
  if (user) {
    log('User logged in.', user.profile);
  }
  else {
    log('User not logged in.');
  }
});

function login() {
  manager.signinRedirect().then(function() {
    log('signinRedirect done');
  }).catch(function(err) {
    log(err);
  });
}

function logout() {
  manager.signoutRedirect().then(function() {
    log('signoutRedirect done');
  }).catch(function(err) {
    log(err);
    console.log(err);
  });
}
