// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/dropdown
//= require bootstrap-sprockets
//= require_tree .

$(document).on('click', function() {

   if ($('#online_confirm').is(':checked')) {
      $('#location_field').hide();
   }
   else {
      $('#location_field').show();
   }
}
);

 $(document).ready(function(){
       $('.dropdown-toggle').dropdown();
   });

var score = document.getElementById("scoreCounter");
score.innerHTML = "0";
var scoreValue = 0;
checkScore();

function checkScore() {
  if (scoreValue < 0) {
    score.style.color = "#FF586C";
  } else if (scoreValue > 0) {
    score.style.color = "#6CC576";
  } else {
    score.style.color = "#666666";
  }
}