// javascript

$('document').ready(function() {

	$(".lazy").lazy();



	/***************************** HEADER DROPDOWN */
		$("#myaccountToggle").click(function() {
			$("#myaccountDrop").fadeToggle(100);
		});
		$("body").click(function(e) {
			if( !$(e.target).closest("#myaccountToggle").length && !$(e.target).closest("#myaccountDrop").length && $("#myaccountDrop").is(":visible") ) {
				$("#myaccountDrop").fadeToggle(100);
            }
        });
	/***************************** /HEADER DROPDOWN */




	/***************************** SIDEMENU */
		$("#sidemenuOpen").click(function() {
			$("body").addClass("sidemenuOpen");
			$("body").prepend("<div class='overlay-sidemenu'></div>");
		});
		
		$("#sidemenuClose").click(function() {
			$("body").removeClass("sidemenuOpen");
			$(".overlay-sidemenu").remove();
		});
	

		$(".overlay-sidemenu").click(function() {
			$("body").removeClass("sidemenuOpen");
		});
	/***************************** /SIDEMENU */
  
	

});

	


$(window).on("load", function(){
	$(".ajax_loader").addClass('hideloader');
});