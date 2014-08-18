(function (window) {
  var document = window.document;
  if (["complete","loaded","interactive"].indexOf(document.readyState) != -1) {
    run();
  } else {
    document.addEventListener("DOMContentLoaded", run, false);
  }

  function run () {
    if (document.querySelector) {
      var un, req, avatar, avatars = document.querySelectorAll('.avatar');
      for (var i=0; i<avatars.length; i++) {
        avatar = avatars[i];
        if ((un = avatar.getAttribute('data-author'))) {
          req = new XMLHttpRequest();
          req.onreadystatechange = setAvatar(avatar);
          req.open("get", "https://api.github.com/users/"+un);
          req.responseType = "json";
          req.send();
        }
      }
    }
  };

  function setAvatar (avatar) {
    return function () {
      if (this.readyState == 4) {
        avatar.style.backgroundImage = "url(" + this.response.avatar_url + ")";
      }
    };
  }
})(this);
