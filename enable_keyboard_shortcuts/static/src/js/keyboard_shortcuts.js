$.ctrl = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[]; // IE barks when args is null 
        console.log(e.keyCode)
        if((e.keyCode == key.charCodeAt(0) || e.keyCode == key) && e.ctrlKey) {
            callback.apply(this, args);
            return false;
        }
    });        
};
$.shortcut = function(key, callback, args) {
    $(document).keydown(function(e) {
        if(!args) args=[]; // IE barks when args is null
        console.log(e.keyCode)
        if((e.keyCode == key.charCodeAt(0) || e.keyCode == key)) {
            callback.apply(this, args);
            return false;
        }
    });
};
//done
//New object by Ctrl + enter
$.ctrl('13', function() {
	$('.o_form_button_create').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	$('.o_list_button_add').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	$('.o-kanban-button-new').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});
//done
//Edit the current object F2
$.shortcut('113', function() {
	$('.o_form_button_edit').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});
//done
//Save the current object
$.ctrl('S', function() {
	var ok= true;
	$('.o_form_button_save').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
			ok = false
		}
	});
	if(ok){
		$('.o_form_button_save').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	}

});

//done
//Save current pop-up and open new one
$.ctrl('32', function() {
	$('button.btn-primary:contains("Save & New")').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
			ok = false
		}
	});
});
//done
//Save current pop-up and close
$.ctrl('C', function() {
	$('button.btn-primary:contains("Save  & Close")').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
			ok = false
		}
	});
});
//done
//Cancel the current object edition
$.ctrl('Z', function() {
	$('.o_form_button_cancel').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
});


