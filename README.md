jquery form to wizard plugin
=========================

This work is published under Creative Commons Attribution 3.0 Unported License.

Original idea from http://www.jankoatwarpspeed.com/post/2009/09/28/webform-wizard-jquery.aspx

Current modifications: academo

Turn any webform into a powerful wizard with jQuery (FormToWizard plugin).

This plugin allows you to easily create wizards for large forms, it works by using fieldsets and legends.

Fearures
-------

* Allow you to create form wizard really easy, just define fieldsets and legends
* Only 1.4KB (minified) 3.4 (no minified)
* Basic CSS example style
* Multiple wizards per page
* Easy to use
* Easy to modify

Usage
-----

Create a form element, separate steps by fieldsets. Optional: Set step name by legend tags

	<form id="mywizardform">
		<fieldset>
		    <legend>Account information</legend>
		    <label for="Name">Name</label>
		    <input id="Name" type="text" />
		    <label for="Email">Email</label>
		    <input id="Email" type="text" />
		    <label for="Password">Password</label>
		    <input id="Password" type="password" />
		</fieldset>
		<fieldset>
		    <legend>Company information</legend>
		    <label for="CompanyName">Company Name</label>
		    <input id="CompanyName" type="text" />
		    <label for="Website">Website</label>
		    <input id="Website" type="text" />
		    <label for="CompanyEmail">CompanyEmail</label>
		    <input id="CompanyEmail" type="text" />
		</fieldset>
	</form>

Include form to wizard plugin (you should include jquery first)

	<script type="text/javascript" src="/path/to/js/formToWizard.min.js"></script>

Include base CSS style or add style to your current stylesheet
	
	<link rel="stylesheet" type="text/css" href="/path/to/css/formToWizard.css" />

Call form to wizard on document ready

	<script type="text/javascript">
	$(document).ready(function(){
	    $("#mywizardform").formToWizard();
	});
	</script>

Modify Styles
------------

You can edit formToWizard.css styles to set your own style or add it to your current styleshee and modify css
