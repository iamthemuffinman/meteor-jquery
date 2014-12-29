Package.describe({
  summary: "An updated Jquery package for Meteor",
  git: "https://github.com/iamthemuffinman/meteor-jquery",
  version: "0.0.1",
  name: "iamthemuffinman:jquery"
});

Package.on_use(function(api, where) {
  api.add_files("jquery.1.11.2.min.js", "client");
});
