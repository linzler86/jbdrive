function randomKey() {
  var key = document.getElementById("key");
  var keyByte = forge.random.getBytesSync(20);
  key.value = forge.util.bytesToHex(keyByte);
}

function hmac() {
  var message = document.getElementById("message").value;
  var result = document.getElementById("result");
  var select = document.getElementById("item");
  var keyValue = document.getElementById("key").value;
  var option_value = select.options[select.selectedIndex].value;

  if (option_value == 1) { // HMAC-MD5
    var hmac = forge.hmac.create();
    hmac.start('md5', keyValue);
    hmac.update(message);
    result.value = hmac.digest().toHex();
  }
  if (option_value == 2) { // HMAC-SHA1
    var hmac = forge.hmac.create();
    hmac.start('SHA1', keyValue);
    hmac.update(message);
    result.value = hmac.digest().toHex();
  }
  if (option_value == 3) { // HMAC-SHA256
    var hmac = forge.hmac.create();
    hmac.start('sha256', keyValue);
    hmac.update(message);
    result.value = hmac.digest().toHex();
  }
  if (option_value == 4) { // HMAC-SHA384
    var hmac = forge.hmac.create();
    hmac.start('sha384', keyValue);
    hmac.update(message);
    result.value = hmac.digest().toHex();
  }
  if (option_value == 5) { // HMAC-SHA512
    var hmac = forge.hmac.create();
    hmac.start('sha512', keyValue);
    hmac.update(message);
    result.value = hmac.digest().toHex();
  }

}