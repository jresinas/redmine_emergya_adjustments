$(document).ready(function(){
//	alert("hola");
/*
	$('#issue_tracker_id').change(function(){
		switch ($('#issue_tracker_id').val()){
			case "21":
				$('#issue_custom_field_values'+exposicion_id).addClass('select_disabled');
				params = {impacto: $('#issue_custom_field_values'+impacto_id).val(), probabilidad: $('#issue_custom_field_values'+probabilidad_id).val()};
				url = "/projects/"+project_name+"/issues/get_exposition_level";
				$('#issue_custom_field_values'+impacto_id).addClass('launcher');
				$('#issue_custom_field_values'+probabilidad_id).addClass('launcher');
			break;
		}
	});
*/

	$('.autofilled_field').live('focus', function(){
		$(this).blur();
	});

	$('.launcher').live('change', function(){
		params = {attr1: $('.attr1').val(), attr2: $('.attr2').val()}
		$.ajax({
			url: url,
			data: params,
			success: function(data){
				if ($('.autofilled_field').is('input')){
					$('.autofilled_field').val(data);
				} else {
					$('.autofilled_field').html(data);
				}
			}
		});
		//$('.autofilled_field').load(url, params);
	});

});