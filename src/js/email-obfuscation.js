/* =========== IMPORTS ========== */
// Smooth scroll
export function emailObfuscator() {
  /* Encryption function */
  /* The anchor element should look exactly like this:
<a data-erot13="yvanf.znpxbavf@tznvy.pbz"><span class="email"></span>Email Me</a> */
  function erot13(s) {
    return (s ? s : this)
      .split("")
      .map(function (_) {
        if (!_.match(/[A-za-z]/)) return _;
        var c = Math.floor(_.charCodeAt(0) / 97);
        var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
        return String.fromCharCode(k + (c == 0 ? 64 : 96));
      })
      .join("");
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
}
