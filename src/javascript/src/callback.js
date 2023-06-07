Oidc.Log.logger = console;
Oidc.Log.level = Oidc.Log.DEBUG;

const settings = {
  response_mode: "fragment",
};

const manager = new Oidc.UserManager(settings);

manager.signinRedirectCallback().then(function() {
  window.location = "index.html";
}).catch(function(e) {
  console.error(e);
});
