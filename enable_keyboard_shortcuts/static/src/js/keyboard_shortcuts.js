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
		$('button.btn-primary:contains("حفظ و جديد")').each(function() {
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
		$('button.btn-primary:contains("حفظ و إغلاق")').each(function() {
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


//done
//Delete the current object
$.ctrl('190', function() {
	$("a:contains('Delete')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("a:contains('حذف')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});

$.ctrl('46', function() {
	$("a:contains('Delete')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
	$("a:contains('حذف')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});
//done
//add item ctrl +
$.ctrl('107', function() {
	$("td.o_form_field_x2many_list_row_add a").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});

});
//done
//remove item ctrl -
$.ctrl('109', function() {
	$("td.o_form_field_x2many_list_row_add").parent().prev().children('.o_list_record_delete').children('.fa-trash-o').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});

//done
//Duplicate the current object
$.ctrl('D', function() {
	$('a[data-section="other"]:contains("Duplicate")').each(function() {
		if($(this).parents('.oe_sidebar_print').length == 0){
			$(this).click();
		}
	});
	$('a[data-section="other"]:contains("استنساخ")').each(function() {
		if($(this).parents('.oe_sidebar_print').length == 0){
			$(this).click();
		}
	});
});

//done
//Previous object
$.shortcut('37', function() {
	$('.o_pager_previous').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});

//done
//Next object
$.shortcut('39', function() {
	$('.o_pager_next').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).click();
		}
	});
});
//update
$.shortcut('112', function() {
	$('.oe_subtotal_footer_separator button.oe_button.oe_form_button.oe_edit_only.oe_link').each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).trigger('click');
		}
	});
	$("span:contains('(update)')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).parent().trigger('click');
		}

	});
	$("span:contains('(تحديث)')").each(function() {
		if($(this).parents('div:hidden').length == 0){
			$(this).parent().trigger('click');
		}

	});
});

