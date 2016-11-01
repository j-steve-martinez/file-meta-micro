'use strict';

(function () {

   var submitButton = document.querySelector('#submit');
   var myFile = document.querySelector('#myFile');
   var form = document.querySelector('#myForm');
   var alert = document.querySelector('.alert');
   var count = 1;

   var base = document.URL;

   var apiUrl = base + 'api/clicks';

   function ready (fn) {
      if (typeof fn !== 'function') {
         return;
      }

      if (document.readyState === 'complete') {
         return fn();
      }

      document.addEventListener('DOMContentLoaded', fn, false);
   }

   function ajaxRequest (method, url, callback) {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function () {
         if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            callback(xmlhttp.response);
         }
      };

      xmlhttp.open(method, url, true);
      xmlhttp.send();
   }

   submitButton.addEventListener('click', function(ev){
    console.log('submit form clicked');
    // console.log(form);
    // console.log(myFile.files);
    if (myFile.files.length <= 0) {
      ev.preventDefault();
      alert.innerHTML = 'Warning ' + count++ + ': ' + 'Use the browse button to select a file.';
    } else {
      console.log('submitted...');
    }

   });
})();
