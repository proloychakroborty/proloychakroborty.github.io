selectnav('nav', {activeclass: false, nested: false, label: false, autoselect: false});

jQuery(document).ready(function($){
	if($("html").hasClass("lt-ie9") == false) {
		if($('#contactModal').length > 0) {
			modalContact = function(){
					$('#contactModal').load('contact.php #contact', function(){
						$(this).removeClass("tiny");
						$(this).addClass("medium");
						$(this).append('<a class="close-reveal-modal">&#215;</a>');
						$(this).find("li.m").append("+91 9007974874");
						$(this).find("li.e").append("proloy@chakroborty");
						$(this).find("li.s").append("proloy.chakroborty");
						$(this).find("div.large-4 ul").removeClass("no-bullet").addClass("inline-list");
						$(this).find("#cml").ajaxForm( { beforeSubmit: formvalidin, success: showResponsein, clearForm: true, resetForm: true, target: "#contactModal", url: "contact.php?m=ajax" } );				
					});
			};
			modalContact();
			$('#contactModal').foundation('reveal').bind('closed', function() {
				modalContact();
			});
		}
		if($("#nav").find("a.revealmodal").length > 0) {
			$("#nav").find("a.revealmodal").click(function(){
				$('#contactModal').foundation('reveal', 'open');
				return false;
			});
		}
	}

	if($("ul.contactinfo").find("li.m").length > 0) {
		$("ul.contactinfo").find("li.m").append("+91 9007974874");
	}
	if($("ul.contactinfo").find("li.e").length > 0) {
		$("ul.contactinfo").find("li.e").append("proloy@chakroborty");
	}
	if($("ul.contactinfo").find("li.s").length > 0) {
		$("ul.contactinfo").find("li.s").append("proloy.chakroborty");
	}

	
	$("#cml").ajaxForm( { beforeSubmit: formvalid, success: showResponse, clearForm: true, resetForm: true, target: "#loader", url: "contact.php?m=ajax" } );
	
	function formvalid(formData, jqForm, options) { 
		jqForm.validate({errorClass: "error",errorElement: "small"});
     	if(jqForm.valid()) {
			var queryString = $.param(formData);
			$("#loader").append('<strong>Submiting Data</strong>');
			$('#loader').foundation('reveal', 'open');
			jqForm.find("input").attr("disabled","disabled");
			jqForm.find("textarea").attr("disabled","disabled");

			return true;
		}else {
			return false;
		}
	}
	function showResponse(responseText, statusText, xhr, $form)  { 		
	 	$("#loader").append('<a class="close-reveal-modal">&#215;</a>');
		$form.find("input").removeAttr("disabled");
		$form.find("textarea").removeAttr("disabled");
		//alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + '\n\nThe output div should have already been updated with the responseText.'); 
	}
	
	function formvalidin(formData, jqForm, options) { 
		jqForm.validate({errorClass: "error",errorElement: "small"});
     	if(jqForm.valid()) {
			var queryString = $.param(formData);
			$("#contactModal").removeClass("medium");
			$("#contactModal").addClass("tiny");
			$("#contactModal").find(".close-reveal-modal").remove();
			$("#contactModal").html('<strong>Submiting Data</strong>');

			return true;
		}else {
			return false;
		}
	}
	function showResponsein(responseText, statusText, xhr, $form)  { 		
	 	$("#contactModal").append('<a class="close-reveal-modal">&#215;</a>');
	}
	
	if($("#portfolio").length > 0) {
		$("#portfolio").find("a[target!=_blank]").click(function(){
			var imagurl = $(this).attr("href");
			var siteurl = $(this).attr("data-url");
			var modalHTMLwrapper = '<div id="portfolioModal" class="reveal-modal medium"></div>';
			if($("#portfolioModal").length <= 0) {
				$("body").append(modalHTMLwrapper);
			}
			var modalHTMLcontent = '<div class="row"><div class="large-12 columns text-center"><p><img src="' + imagurl + '" alt="Preview"></p><a href="' + siteurl + '" target="_blank" class="button radius">Visit Site</a></div></div><a class="close-reveal-modal">&#215;</a>';
			$("#portfolioModal").html(modalHTMLcontent);
			$('#portfolioModal').foundation('reveal', 'open');
			return false;
		});
	}
	
	//Count Days - present
	var joined = new Date('2013/07/01'); 
	var today = new Date();
	var duration = Math.floor(Math.abs((today - joined) / (1000 * 60 * 60 * 24)));
	var showDuration, totalYears = 7, totalMonths = 9;
	if(duration >= 365) {
		var years = Math.floor(duration/365);
		var months = Math.floor((duration-(365*years))/30);
		if(years == 1) { showDuration = '<strong>(' + years + ' year'; } else { showDuration = '<strong>(' + years + ' years'; }
		if(months == 1) { showDuration += ', ' + months + ' month)</strong>'; } else if(months > 1) { showDuration += ', ' + months + ' months)</strong>'; } else { showDuration += ')'; }
		$('#present').html(showDuration);
		
		totalYears = totalYears + years;
		totalMonths = totalMonths + months;
		$('#total').html('(' + totalYears + ' years, ' + totalMonths + ' months)');
	} else {
		var months = Math.floor(duration/30);
		if(months == 1) { showDuration = '<strong>(' + months + ' month)</strong>'; } else if(months > 1) { showDuration = '<strong>(' + months + ' months)</strong>'; }
		$('#present').html(showDuration);
		
		totalMonths = totalMonths + months;
		if(totalMonths >= 12) { totalYears = totalYears + Math.floor(totalMonths/12); totalMonths = totalMonths - (12*Math.floor(totalMonths/12)) }
		if(totalMonths == 0) { $('#total').html('(' + totalYears + ' years)'); } else if(totalMonths == 1) { $('#total').html('(' + totalYears + ' years, ' + totalMonths + ' month)'); }  else if(totalMonths > 1) { $('#total').html('(' + totalYears + ' years, ' + totalMonths + ' months)'); }
	}
}); 