/**
 * This work is published under Creative Commons Attribution 3.0 Unported
 * License.
 * 
 * Original idea from
 * http://www.jankoatwarpspeed.com/post/2009/09/28/webform-wizard-jquery.aspx
 * 
 * Current modifications: https://github.com/academo/jquery-wizard-form
 * 
 * New version features:
 * 
 * - Support multiple forms per page
 * - Doesn't create ids element, uses classes with contex instead
 * 
 */
(function($) {
	$.fn.formToWizard = function(options) {
		options = $.extend({
			hideSubmit : true
		}, options);
		
		//support multiple form wizards
		this.each(function() {
			//wrap elements
			//save form element
			var element = $(this);
			var steps = element.find("fieldset");
			var count = steps.size();
			//only works with more than 1 legend
			if(count < 2){
				console.log("You should define almost 2 legends, please reffer documentation");
				return;
			}
			//store steps count on form
			element.data("wizard-steps-count", count);
			//set css style
			element.addClass("form-wizard");
			
			if(options.hideSubmit){
				$("input[type='submit']", element).hide();
			}
			
			//set steps count
			$(element).prepend("<ul class='steps'></ul>");
			//iterate over fieldsets
			steps.each(function(i) {
				//wrap each element on div
				$(this).wrap("<div class='step" + i + " step'></div>");
				//create buttons container
				$(this).parent().append("<p class='form-wizard-buttons'></p>").hide();

				//add step titles
				var name = "";
				if($("legend", this).length > 0){
					name = $("legend", this).text();
				}
				$("ul.steps", element).append("<li class='stepDesc" + i + " step-description'>Step " + (i + 1) + "<span>" + name + "</span></li>");
				//create prev-next buttons
				if (i == 0) { //first step
					$(this).parent().show();
					$("li.stepDesc0", element).addClass("current");
					//bind show next element
					createButton(i, i+1, "Next", element);
				} else if (i == count - 1) { //last step
					//bind show prev element
					createButton(i, i-1, "Prev", element);
				} else { //any middle step
					//bind show next element
					createButton(i, i-1, "Prev", element);
					//bind hide next element
					createButton(i, i+1, "Next", element);
				}
			});
		});
		
		/**
		 * It allows to hide current element and show target element
		 * It uses css class names instead objects because on create button
		 * "target" element could not exist but current does exist
		 */
		function createButton(current, target, text, element){
			var parent=$("p.form-wizard-buttons", $("div.step" + current, element));
			$("<a />").text(text).addClass("form-wizard-button").appendTo(parent).attr("href", "#").click(function(e){
				e.preventDefault();
				//show hide elements
				$("div.step" + current, element).hide(); 
				$("div.step" + target, element).show();
				//set step current position
				$("li.stepDesc" + current, element).removeClass("current");
				$("li.stepDesc" + target, element).addClass("current");
				
				//check if last step when hidesubmit
				if(options.hideSubmit){
					if(target==element.data("wizard-steps-count")-1){
						$("input[type='submit']", element).show();
					}else{
						$("input[type='submit']", element).hide();
					}
				}
			});
		}
	}
})(jQuery);
function d(x) {
	console.log(x);
}