$(document).ready(function() {
  
  //Back to top
  
  $('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  });
  
  // Mobile nav
  
  $('#main-nav').slicknav({
		prependTo:'#mobile-nav'
  });
  
  // Contact form
  
  // process the form
	$('#contact-form').submit(function(event) {

    // $('.form-group').removeClass('has-error'); // remove the error class
    // $('.help-block').remove(); // remove the error text

		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'first_name' 			  	                : $('input[name=first_name]').val(),
			'last_name' 			                 	  : $('input[name=last_name]').val(),
			'email' 		      	                  : $('input[name=email]').val(),
			'company' 	    		                  : $('input[name=company]').val(),
			'phone' 	    	  	                  : $('input[name=phone]').val(),
			'message' 	    	                    : $('#contact-form-message').val(),
			'service_website_design' 	    	      : $('input[name=service_website_design]').val(),
			'service_web_application_development' : $('input[name=service_web_application_development]').val(),
			'service_other'                       : $('input[name=service_other]').val(),
		};

		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: '/themes/site_themes/harveyc/contact.php', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			encode 		: true
		})
			// using the done promise callback
			.done(function(data) {

				// log data to the console so we can see
				console.log(data); 

				// here we will handle errors and validation messages
				if ( ! data.success) {
					alert(JSON.stringify(data.errors))
					// handle errors for name ---------------
					// if (data.errors.name) {
//             $('#name-group').addClass('has-error'); // add the error class to show red input
//             $('#name-group').append('<div class="help-block">' + data.errors.name + '</div>'); // add the actual error message under our input
//           }
//
//           // handle errors for email ---------------
//           if (data.errors.email) {
//             $('#email-group').addClass('has-error'); // add the error class to show red input
//             $('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
//           }
//
//           // handle errors for superhero alias ---------------
//           if (data.errors.superheroAlias) {
//             $('#superhero-group').addClass('has-error'); // add the error class to show red input
//             $('#superhero-group').append('<div class="help-block">' + data.errors.superheroAlias + '</div>'); // add the actual error message under our input
//           }

				} else {

					// ALL GOOD! just show the success message!
					$('form').append('<div class="alert alert-success">' + data.message + '</div>');

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

				}
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});
  
});