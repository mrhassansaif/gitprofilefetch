// var username;
// var data;

// var sname = document.querySelector("#name");
// var company = document.querySelector("#company");
// var bio = document.querySelector("#bio");
// var ids = document.querySelector("#ids");
// var followers = document.querySelector("#followers");
// var repository = document.querySelector("#repository");
// var following = document.querySelector("#following");
// var btn = document.getElementById("btn");

// var innerMain = document.getElementById("innerMain");
// var search = document.getElementById("search");

// // innerMain.style.display = "none";

// btn.addEventListener("click", function () {
//   username = document.getElementById("username").value;
//   console.log(username);
//   var user1 = "https://api.github.com/users/" + username;

//   if (user1 != null && user1 != "") {
//     fetch(user1)
//       .then(function (data) {
//         console.log("sssx");
//         return data.json();
//       })
//       .then(function (res) {
//         data = res;
//         if (data.name === undefined) {
//           alert(
//             "User Not Found or Error: 400 Bad Request. The request could not be understood by the server due to malformed syntax."
//           );
//         } else {
//           innerMain.style.display = "block";
//           search.style.display = "none";
//           sname.innerHTML = data.name;
//           company.innerHTML = data.company;
//           ids.innerHTML = data.location;
//           bio.innerHTML = data.bio;
//           followers.innerHTML = data.followers;
//           repository.innerHTML = data.public_repos;
//           following.innerHTML = data.following;
//           document.getElementById("avatar").src = data.avatar_url;
//         }
//       });
//   } else {
//     alert("Worng Input");
//   }
// });

var _0x712a = [
  "572maYyRR",
  "company",
  "avatar_url",
  "324313AmtchJ",
  "2kekJKm",
  "innerMain",
  "following",
  "43NjXRMm",
  "username",
  "display",
  "style",
  "json",
  "then",
  "https://api.github.com/users/",
  "name",
  "#ids",
  "#name",
  "Worng\x20Input",
  "93498DmqmHx",
  "getElementById",
  "3nlUsTd",
  "public_repos",
  "innerHTML",
  "1OQPrFz",
  "85429vBeoDe",
  "156574JFhYPf",
  "location",
  "btn",
  "click",
  "User\x20Not\x20Found\x20or\x20Error:\x20400\x20Bad\x20Request.\x20The\x20request\x20could\x20not\x20be\x20understood\x20by\x20the\x20server\x20due\x20to\x20malformed\x20syntax.",
  "#repository",
  "57773GtbTMy",
  "4721dpJwFU",
  "#bio",
  "src",
  "1tNOcoV",
  "318AueOkC",
  "#company",
  "avatar",
  "#followers",
  "querySelector",
];
function _0x153e(_0x1c408d, _0x24852a) {
  return (
    (_0x153e = function (_0x712aa0, _0x153e4f) {
      _0x712aa0 = _0x712aa0 - 0xf3;
      var _0x2067eb = _0x712a[_0x712aa0];
      return _0x2067eb;
    }),
    _0x153e(_0x1c408d, _0x24852a)
  );
}
var _0x1df41e = _0x153e;
(function (_0x5d17be, _0x32926f) {
  var _0x23dadf = _0x153e;
  while (!![]) {
    try {
      var _0x148f94 =
        parseInt(_0x23dadf(0x106)) * parseInt(_0x23dadf(0x10b)) +
        -parseInt(_0x23dadf(0xf6)) * -parseInt(_0x23dadf(0xf4)) +
        -parseInt(_0x23dadf(0x102)) * parseInt(_0x23dadf(0x112)) +
        parseInt(_0x23dadf(0x101)) * -parseInt(_0x23dadf(0x105)) +
        -parseInt(_0x23dadf(0xfa)) * -parseInt(_0x23dadf(0x10f)) +
        -parseInt(_0x23dadf(0xf9)) * parseInt(_0x23dadf(0x10e)) +
        parseInt(_0x23dadf(0xfb));
      if (_0x148f94 === _0x32926f) break;
      else _0x5d17be["push"](_0x5d17be["shift"]());
    } catch (_0x58b56d) {
      _0x5d17be["push"](_0x5d17be["shift"]());
    }
  }
})(_0x712a, 0x31fbd);
var username,
  data,
  sname = document["querySelector"](_0x1df41e(0x11b)),
  company = document["querySelector"](_0x1df41e(0x107)),
  bio = document["querySelector"](_0x1df41e(0x103)),
  ids = document[_0x1df41e(0x10a)](_0x1df41e(0x11a)),
  followers = document["querySelector"](_0x1df41e(0x109)),
  repository = document[_0x1df41e(0x10a)](_0x1df41e(0x100)),
  following = document[_0x1df41e(0x10a)]("#following"),
  btn = document["getElementById"](_0x1df41e(0xfd)),
  innerMain = document[_0x1df41e(0xf5)](_0x1df41e(0x110)),
  search = document[_0x1df41e(0xf5)]("search");
btn["addEventListener"](_0x1df41e(0xfe), function () {
  var _0x5dfdae = _0x1df41e;
  (username = document[_0x5dfdae(0xf5)](_0x5dfdae(0x113))["value"]),
    console["log"](username);
  var _0x23a25a = _0x5dfdae(0x118) + username;
  _0x23a25a != null && _0x23a25a != ""
    ? fetch(_0x23a25a)
        [_0x5dfdae(0x117)](function (_0xade501) {
          var _0x26668d = _0x5dfdae;
          return console["log"]("sssx"), _0xade501[_0x26668d(0x116)]();
        })
        [_0x5dfdae(0x117)](function (_0x21b9a8) {
          var _0x3b7146 = _0x5dfdae;
          (data = _0x21b9a8),
            data["name"] === undefined
              ? alert(_0x3b7146(0xff))
              : ((innerMain[_0x3b7146(0x115)][_0x3b7146(0x114)] = "block"),
                (search[_0x3b7146(0x115)][_0x3b7146(0x114)] = "none"),
                (sname[_0x3b7146(0xf8)] = data[_0x3b7146(0x119)]),
                (company[_0x3b7146(0xf8)] = data[_0x3b7146(0x10c)]),
                (ids["innerHTML"] = data[_0x3b7146(0xfc)]),
                (bio[_0x3b7146(0xf8)] = data["bio"]),
                (followers[_0x3b7146(0xf8)] = data["followers"]),
                (repository[_0x3b7146(0xf8)] = data[_0x3b7146(0xf7)]),
                (following[_0x3b7146(0xf8)] = data[_0x3b7146(0x111)]),
                (document["getElementById"](_0x3b7146(0x108))[
                  _0x3b7146(0x104)
                ] = data[_0x3b7146(0x10d)]));
        })
    : alert(_0x5dfdae(0xf3));
});
