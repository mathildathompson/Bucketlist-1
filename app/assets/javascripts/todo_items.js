// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {

  $('body').bind("ajax:success", function(e,data) {
  	$('.todo_items-<%=destination_id%>').append(data);

});


});