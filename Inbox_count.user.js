// ==UserScript==
// @name        Inbox count
// @namespace   work
// @grant       metadata
// @description Put the email count in the title
// @include     https://webmail.example.com/owa/#
// @version     1
// ==/UserScript==


function checkMail() {
  var countSuffixSingular = ' email'; 
  var countSuffixPlural = ' emails'; 

  // Inbox unread count
  var spnCV = document.getElementById('_ariaId_35.ucount');
  var count = '0';
  if (spnCV) {
    count = document.getElementById('_ariaId_35.ucount').innerHTML; 
  }

  // Reminders
  var spnRmT = document.getElementById('spnRmT');
  var reminders = 0;
  if (spnRmT) {
    reminders = parseInt(document.getElementById('spnRmT').innerHTML); 
  }

  var titles = document.getElementsByTagName('title');
  if (titles.length > 0) {
    if (count == 1) {
      titles[0].innerHTML = count + countSuffixSingular;
    } else {
      titles[0].innerHTML = count + countSuffixPlural;
    }

    if (reminders > 0) {
      titles[0].innerHTML += ' &bull; ' + reminders + ' reminders';
    }

  }

}

setInterval(checkMail, 4000);

