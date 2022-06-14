// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";

// Set token
let _token = hash.access_token;

const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "eccc5903792f4c2d917b6192e55db263";
const redirectUri = "http://localhost:8000";
const scopes = ["user-top-read"];

// If there is no token, redirect to Spotify authorization
if (!_token) {
  window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
}

// Make a call using the token
$.ajax({
  url: "https://api.spotify.com/v1/me/top/artists",
  type: "GET",
  beforeSend: function (xhr) {
    xhr.setRequestHeader("Authorization", "Bearer " + _token);
  },
  success: function (data) {
    // Do something with the returned data

    data.items.map(function (artist) {
      console.log(artist.name);

      let item = $("<li>" + artist.name + "</li>");
      item.appendTo($("#top-artists"));
    });
  },
});
