/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

//$(function() {
 
    //Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    // old parse key: Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
 
	Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");	
	
	//Create new object and tell them where to save data
	var Form01 = Parse.Object.extend('Form01');
	form01 = new Form01();
    var data= {};

	// Code to prompt message during validate file no
	function producePrompt(message, promptLocation, color){
		document.getElementById(promptLocation).innerHTML = message;
		document.getElementById(promptLocation).style.color = message;
	}
	
	// Validate code for file no input field
	function validateFileNo() {
		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		query.equalTo("fileNo", fileNo);
		
		query.count({
			success: function(results){
				//alert("There are :"+results+" of "+fileNo+" stored previously.\nPlease try another file no!");
				if(results == 0){
					producePrompt("OK!", "commentfileNo", "green");
					return true;
				} else{
					producePrompt("This file No. already exists!", "commentfileNo", "red");
					return false;
				}
				
			},error: function(error){
				console.log(error.message);
			}
		});

	}	
	
	
	
	function checkfileno() {

		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		var data ={};
		
		query.equalTo("fileNo", fileNo);
		query.include("user");
		
		
		
		query.count({
			success: function(results){
				if(results == 0) {

					alert("There is "+results+" record.");
					
					// Save Form Type
					data.formtype = document.getElementById("formtype").value;
				
			
					data.fileNo = $("#fileNo").val();
					
					// Section 1
					data.pname = $("#pname").val();
					data.ptel = $("#ptel").val();
					data.vname = $("#vname").val();
					data.vtel = $("#vtel").val();
					data.vsname = $("#vsname").val();
					data.vstel = $("#vstel").val();
					data.pbname = $("#pbname").val();
					data.pbtel = $("#pbtel").val();
					data.bbname = $("#bbname").val();
					data.bbtel = $("#bbtel").val();
					data.vbname = $("#vbname").val();
					data.vbtel = $("#vbtel").val();
					data.dname = $("#dname").val();
					data.dtel = $("#dtel").val();
				
					
					//Section2 and onwards
					data.date1 = $("#date1").val();
					data.date2 = $("#date2").val();
					data.date3 = $("#date3").val();
					data.date4 = $("#date4").val();
					data.date5 = $("#date5").val();
					data.date6 = $("#date6").val();
					data.date7 = $("#date7").val();
					data.date8 = $("#date8").val();
					data.date9 = $("#date9").val();
					data.date10 = $("#date10").val();
					data.date11 = $("#date11").val();
					data.date12 = $("#date12").val();
					data.date13 = $("#date13").val();
					data.date14 = $("#date14").val();
					data.date15 = $("#date15").val();
					data.date16 = $("#date16").val();
					data.date17 = $("#date17").val();
					data.date18 = $("#date18").val();
					data.date19 = $("#date19").val();
					data.date20 = $("#date20").val();
					data.date21 = $("#date21").val();
					data.date22 = $("#date22").val();
					data.date23 = $("#date23").val();
					data.date24 = $("#date24").val();
					data.date25 = $("#date25").val();
					data.date26 = $("#date26").val();
					
					
					
					
					data.user = Parse.User.current();

					data.status1 = document.getElementById("status1").checked;
					data.status2 = document.getElementById("status2").checked;
					data.status3 = document.getElementById("status3").checked;
					data.status4 = document.getElementById("status4").checked;
					data.status5 = document.getElementById("status5").checked;
					data.status6 = document.getElementById("status6").checked;
					data.status7 = document.getElementById("status7").checked;
					data.status8 = document.getElementById("status8").checked;
					data.status9 = document.getElementById("status9").checked;
					data.status10 = document.getElementById("status10").checked;
					data.status11 = document.getElementById("status11").checked;
					data.status12 = document.getElementById("status12").checked;
					data.status13 = document.getElementById("status13").checked;



					
					//match the key values from the form and then save it
					form01.save(data,{
				
						// if successful
						success: function(form01){
							alert("Thanks, your file: "+data.fileNo+" has been saved successfully!");
							window.location = "mainpage.html";
						},
						error: function(form01, error){
							alert('Failed to Save!');
							console.log(error);
						}
					})
					
					
				} else {
					alert("There are :"+results+" of "+fileNo+" stored previously.\nPlease try another file no!");
					return false;
				}
				
			},error: function(error){
				console.log(error.message);
				
			}
		});

	}
	
	
	// Check whether file no has existed before saved!!!
	$("#task-form").submit(function(event){
			// Prevent Default Submit Event
        	event.preventDefault();
	
			//changeValueCheckbox(status1);
			checkfileno();
	})
    	
//});
