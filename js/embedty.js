// $('iframe').hide(); //hide iframe from start

// $(document).ready(function () {

	$('.btn').click(function(e){

		//form submitted
		var hello="https://www.youtube.com/watch?v=Obe2LectOpg"; //u can put it here
		e.preventDefault(); //stop page reload
		let getURL = hello;
		// $('.url').val(); //.url use it as variable
		let newURL = getURL.replace("watch?v=", "embed/");

		$('iframe').attr("src", newURL).show();

	});

	$('.btn2').click(function(e){

		//form submitted
		var hello="https://www.youtube.com/watch?v=Eq28xz53cUc"; //u can put it here
		e.preventDefault(); //stop page reload
		let getURL = hello;
		// $('.url').val(); //.url use it as variable
		let newURL = getURL.replace("watch?v=", "embed/");

		$('iframe').attr("src", newURL).show();

	});

	$('.btn3').click(function(e){

		//form submitted
		var hello="https://www.youtube.com/watch?v=Eq28xz53cUc"; //u can put it here
		e.preventDefault(); //stop page reload
		let getURL = "https://www.youtube.com/watch?v=yMdhsTSzzCw";
		// $('.url').val(); //.url use it as variable
		let newURL = getURL.replace("watch?v=", "embed/");

		$('iframe').attr("src", newURL).show();

	});
// });

