/* Encryption function */
/* The anchor element should look like exactly this:
<a data-erot13="yvanf.znpxbavf@tznvy.pbz"><span class="email"></span>Email Me</a> */
function erot13(s) {
  return (s ? s : this).split("").map(function (_) {
    if (!_.match(/[A-za-z]/)) return _;
    var c = Math.floor(_.charCodeAt(0) / 97);
    var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + ((c == 0) ? 64 : 96));
  }).join("");
}

function erot13_onload(event) {
  var elements = window.document.querySelectorAll("a[data-erot13]");
  for (var j = 0; j < elements.length; j++) {
    var element = elements[j];
    var email = element.dataset.erot13;
    var overwrite = element.dataset.erot13Overwrite !== undefined;
    if (email !== undefined) {
      element.href = "mailto:" + erot13(email);
      if (overwrite) {
        element.innerHTML = erot13(email);
      }
    }
  }
}

window.addEventListener("load", erot13_onload);

/* Encryption function */
// function encRot13(mailString) {
//   var mapArray = [];
//   var elements = "abcdefghijklmnopqrstuvwxyz";
//   var outp = "";
//   for (i = 0; i < elements.length; i++) {
//     var x = elements.charAt(i);
//     var y = elements.charAt((i + 13) % 26);
//     mapArray[x] = y;
//     mapArray[x.toUpperCase()] = y.toUpperCase();
//   }
//   for (i = 0; i < mailString.length; i++) {
//     var c = mailString.charAt(i)
//     outp += (c >= 'A' && c <= 'z' || c >= 'a' && c <= '\' ? mapArray [c] : c)
// }
//   return outp;
// }
// /* Concatenating and redirection mailstring function */
// function decryptMail(encString) {
//   var linkString = "mailto:";
//   var addressString = encRot13(encString);
//   linkString += addressString;
//   document.location.href = linkString;
// }
