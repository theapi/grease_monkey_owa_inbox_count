// ==UserScript==
// @name        Inbox count
// @namespace   work
// @grant       metadata
// @description Put the email count in the title
// @include     https://webmail.example.com/owa/#
// @version     1
// ==/UserScript==


function checkMail() {
  var countSuffixSingular = ' unread email'; 
  var countSuffixPlural = ' unread emails'; 
  var spnCV = document.getElementById('spnCV');
  
  if (spnCV) {
    count = document.getElementById('spnCV').innerHTML; 
  } 
  else {
    count = 0;
  }

  titles = document.getElementsByTagName('title');
  if (count == 1) {
    titles[0].innerHTML = count + countSuffixSingular;
  } else {
    titles[0].innerHTML = count + countSuffixPlural;
  }

}

setInterval(checkMail, 4000);
