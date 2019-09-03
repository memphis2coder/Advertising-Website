// stop form submitting
$("form").submit(function (e) {
    e.preventDefault();

    //Validation begins
    var error = "";

    if ($("#name").val() == "") {
        error += "<p>The name field is required.</p>";
    }

    if ($("#email").val() == "") {
        error += "<p>The email field is required.</p>";
    }

    if ($("#subject").val() == "") {
        error += "<p>The subject field is required.</p>";
    }

    if ($("#message").val() == "") {
        error += "<p>The message field is required.</p>";
    }
    // alert div content 
    if (error != "") {
        $("#error").html('<div class="alert alert-danger" role="alert"><p><strong>There were error(s) in your form:</strong></p>' + error + '</div>');
    } else {
        $("form").off("submit").submit();
    }

});