// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function() {
    $('#leadForm').on('submit', function(e) {
        e.preventDefault();
        var form = $(this);
        var formData = form.serialize();
        $.ajax({
            type: "POST",
            url: "/home/lead",
            data: formData,
            dataType: "json",
            success: function(data) {
                form.html(
                    '<div class="card-panel teal lighten-2">Thanks for your interest!  We will keep you updated with all the latest Rout information.</div>')
            },
            error: function(){
                console.error('form submit failed');
            }
        });
    });
});