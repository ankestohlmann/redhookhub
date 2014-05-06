var Forms = {
	
	Ajaxs : {
		
		One : function(data){
			
			$.ajax({
                    url : "URL",
                    type: 'POST',
                    contentType: 'application/json',
                    dataType: 'json',
                    data : JSON.stringify(stack),
                    async : false,
                    success : function(response){
                        result = response;
                    },
                    error : function(e){
                        console.log("error: " + e.status);
                        console.log(JSON.stringify(stack));
                        result = e;
                    },
                });
			
			alert("sent");
		},// end of One
		
		Two : function(data){
			$.ajax({
                    url : "URL",
                    type: 'POST',
                    contentType: 'application/json',
                    dataType: 'json',
                    data : JSON.stringify(stack),
                    async : false,
                    success : function(response){
                        result = response;
                    },
                    error : function(e){
                        console.log("error: " + e.status);
                        console.log(JSON.stringify(stack));
                        result = e;
                    },
                });
			alert("sent");
		},// end of Two
		
	},// end of Ajaxs
	
	CurrentForm : -1,
	
	Show : function(item){
		
		var template = _.template($(item).text());
		var compile = template()
		$("#mouth").append(compile)
		
	},// end of Show
	
	Send : function(){
		
		alert("hi?");
			
		var value = Forms.CurrentForm;
		var item;
		
		console.log(value);
			
		if(value === "1"){
			// Job template object
		var item = {
			title :	$('form input[name= "title"]').val(),
			company : $('form input[name= "company"]').val(),
			description : $('form input[name= "description"]').val(),
			category : $('form input[name= "category"]').val(),
			start_date : $('form input[name= "start_date"]').val(),
		
		}
		
		}else if(value === "2"){
			// Events template object
			var item = {
				title :	$('form input[name= "title"]').val(),
				audience : $('form input[name= "audience"]').val(),
				description : $('form input[name= "description"]').val(),
				category : $('form select')[0].value,
				start_date : $('form input[name= "start_date"]').val(),
				location : $('form input[name= "location"]').val(),
			}
		}else if(value === "3"){
			// Emergency object
			var item = {
				title :	$('form input[name= "title"]').val(),
				number : $('form input[name= "number"]').val(),
				description : $('form input[name= "description"]').val(),
				location : $('form input[name= "location"]').val(),
			}
		
			Forms.Ajaxs.Two(item);
			//location.reload();
			return "Done"
		
		}else if(value === "4"){
			// Information object
		var item = {
			title :	$('form input[name= "title"]').val(),
			category : $('form input[name= "category"]').val(),
			description : $('form input[name= "description"]').val(),
		}
		
		}
			console.log(item);
			
			location.reload();
		
	},// end of Show
	
	Cancel : function(){
		
		$("#mouth form").remove()
		
	},// end of Cancel
	
	Selector: function(sel){
		
		Forms.Cancel()
		
        var value = sel.options[sel.selectedIndex].value;
        
        Forms.CurrentForm = value;

		if(value === "-1"){
			
			Forms.Cancel()
		}else{
			
			if(value === "1"){
				Forms.Show("#job_form")
			}else if(value === "2"){
				Forms.Show("#events_form")
			}else if(value === "3"){
				Forms.Show("#emergency_form")
			}else if(value == "4"){
				Forms.Show("#info_form")
			}
			
			//$("form button")[0].click(Forms.Send());
			
		}
		
	},// end of Selector
};