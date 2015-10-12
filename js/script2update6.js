/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
 $(function() {
 
    Parse.$ = jQuery;
 
	  Parse.initialize("6SDrpp6FgvPQpKQCmj4CQ719sxVyW2leWtGuVDh9", "IY1N0Bo0OxufSKFxtdt7XOrTTdhq2T1z1NSc0utz");
	  
	  //Create new parse object for where you want to save the data in the form
	  var Form01 = Parse.Object.extend("Form01");
		form01 = new Form01();
	
		
	  // Check who is currently login
	  function checkLogin() {
		if(Parse.User.current()) {
			//console.log("Logged in! "+Parse.User.current().get("username"));
			$("#current-user").html("Welcome! User: "+Parse.User.current().get("username"));
		} else {
			// if nobody is login, show blank
			$("#current-user").html("");
		}
	  }
	  
	  checkLogin();
	  
	  // As this is not a form, so we can't use submit and we can just use click 
	  $("#logout").click(function(event){
		Parse.User.logOut();
		checkLogin();
		window.location = "login.html";
	  });
	  
	  // As this is inside a form, so we can use submit over here
	  $("#login").submit(function(event){
		event.preventDefault();
		
		var name = $("#login-name").val();
		var pass = $("#login-password").val();
		

		Parse.User.logIn(name,pass,{
			success: function(){
				
				// Verified email status before user can continue to login
				// If email has been verified, proceed to welcome page
				var emailverified = Parse.User.current().get('emailVerified');
					
				//alert('your email verified status is'+ ' ' + emailverified);
				if(emailverified == true) { 
					// Continue to launch welcome page is email has been verified!
					//checkLogin();
					alert("Login Successfully!");
					window.location = "mainpage.html";
					}  
					
					// If user does not verified the email, will prompt message to tell user!!!!
					else {
						alert('You have not verified your email, please check your email now, thanks!');
					}
				
			},error: function(user, error){
				console.log("Log in Error:"+error.message);
				alert("Invalid Username or Password");
			}
		});
	  });
	  
	  //=================================//
	  // Testing Section  on 29thSep2015  //
	  // Result: Tested.				     //
	  //================================//
	  
  
	  // Show editable form detail from link
	  
	  function searchID(){
		var id = window.location.search.split("task=")[1];
		return id;
	  }
	  searchID();

	  
	  function showDetail(){
		

	  	var id = searchID();
				
		var query = new Parse.Query(Form01);
		query.equalTo("objectId", id);
		query.include("user");
		query.find({
			success: function(results){
				//console.log(results[0].get("title"));

				var user = results[0].get("user");
				var username = user.get("username");
				var id = results[0].id;				
				
				var fileNo =results[0].get("fileNo");
				
				// Get Data from Parse for Section 1
				var pname = results[0].get("pname");
				var ptel = results[0].get("ptel");
				var vname = results[0].get("vname");
				var vtel = results[0].get("vtel");				
				var vsname = results[0].get("vsname");
				var vstel = results[0].get("vstel");
				var pbname = results[0].get("pbname");
				var pbtel = results[0].get("pbtel");
				var bbname = results[0].get("bbname");
				var bbtel = results[0].get("bbtel");
				var vbname = results[0].get("vbname");
				var vbtel = results[0].get("vbtel");				
				var dname = results[0].get("dname");
				var dtel = results[0].get("dtel");				
	
				
				// Get Data from Parse for Section2 and onwards				
				var date1 = results[0].get("date1");
				var date2 = results[0].get("date2");				
				var date3 = results[0].get("date3");
				var date4 = results[0].get("date4");
				var date5 = results[0].get("date5");
				var date6 = results[0].get("date6");
				var date7 = results[0].get("date7");
				var date8 = results[0].get("date8");
				var date9 = results[0].get("date9");
				var date10 = results[0].get("date10");
				var date11 = results[0].get("date11");
				var date12 = results[0].get("date12");				
				var date13 = results[0].get("date13");
				var date14 = results[0].get("date14");
				var date15 = results[0].get("date15");
				var date16 = results[0].get("date16");
				var date17 = results[0].get("date17");				
				var date18 = results[0].get("date18");
				var date19 = results[0].get("date19");				
				var date20 = results[0].get("date20");
				var date21 = results[0].get("date21");
				var date22 = results[0].get("date22");				
				var date23 = results[0].get("date23");
				var date24 = results[0].get("date24");				
				var date25 = results[0].get("date25");
				var date26 = results[0].get("date26");
				var date27 = results[0].get("date27");				
				var date28 = results[0].get("date28");
				var date29 = results[0].get("date29");				
				var date30 = results[0].get("date30");
				var date31 = results[0].get("date31");
				var date32 = results[0].get("date32");				
				var date33 = results[0].get("date33");
				var date34 = results[0].get("date34");				
				var date35 = results[0].get("date35");
				var date36 = results[0].get("date36");
				var date37 = results[0].get("date37");				
				var date38 = results[0].get("date38");
				var date39 = results[0].get("date39");				
				var date40 = results[0].get("date40");
				var date41 = results[0].get("date41");
				var date42 = results[0].get("date42");				
			
			
				var status1 = results[0].get("status1");
				var status2 = results[0].get("status2");
				var status3 = results[0].get("status3");
				var status4 = results[0].get("status4");				
				var status5 = results[0].get("status5");
				var status6 = results[0].get("status6");
				var status7 = results[0].get("status7");
				var status8 = results[0].get("status8");				
				var status9 = results[0].get("status9");
				var status10 = results[0].get("status10");
				var status11 = results[0].get("status11");
				var status12 = results[0].get("status12");				
				var status13 = results[0].get("status13");
				var status14 = results[0].get("status14");
				var status15 = results[0].get("status15");
				var status16 = results[0].get("status16");				
				var status17 = results[0].get("status17");
				var status18 = results[0].get("status18");
				var status19 = results[0].get("status19");				
				var status20 = results[0].get("status20");
				var status21 = results[0].get("status21");
				


				//Show data on input fields		
				document.getElementById("fileNo").value = fileNo;

			    document.getElementById("pname").value = pname;
			    document.getElementById("ptel").value = ptel;
			    document.getElementById("vname").value = vname;
			    document.getElementById("vtel").value = vtel;
			    document.getElementById("vsname").value = vsname;
			    document.getElementById("vstel").value = vstel;
			    document.getElementById("pbname").value = pbname;
			    document.getElementById("pbtel").value = pbtel;
			    document.getElementById("bbname").value = bbname;
			    document.getElementById("bbtel").value = bbtel;
			    document.getElementById("vbname").value = vbname;
			    document.getElementById("vbtel").value = vbtel;
			    document.getElementById("dname").value = dname;
			    document.getElementById("dtel").value = dtel;				
				
			    document.getElementById("date1").value = date1;
			    document.getElementById("date2").value = date2;
			    document.getElementById("date3").value = date3;
			    document.getElementById("date4").value = date4;
			    document.getElementById("date5").value = date5;
			    document.getElementById("date6").value = date6;
			    document.getElementById("date7").value = date7;
			    document.getElementById("date8").value = date8;
			    document.getElementById("date9").value = date9;
			    document.getElementById("date10").value = date10;
			    document.getElementById("date11").value = date11;
			    document.getElementById("date12").value = date12;
			    document.getElementById("date13").value = date13;
			    document.getElementById("date14").value = date14;
			    document.getElementById("date15").value = date15;
			    document.getElementById("date16").value = date16;
			    document.getElementById("date17").value = date17;
			    document.getElementById("date18").value = date18;
			    document.getElementById("date19").value = date19;
			    document.getElementById("date20").value = date20;
			    document.getElementById("date21").value = date21;
			    document.getElementById("date22").value = date22;
			    document.getElementById("date23").value = date23;
			    document.getElementById("date24").value = date24;
			    document.getElementById("date25").value = date25;
			    document.getElementById("date26").value = date26;
			    document.getElementById("date27").value = date27;
			    document.getElementById("date28").value = date28;
			    document.getElementById("date29").value = date29;
			    document.getElementById("date30").value = date30;
			    document.getElementById("date31").value = date31;
			    document.getElementById("date32").value = date32;
			    document.getElementById("date33").value = date33;
			    document.getElementById("date34").value = date34;
			    document.getElementById("date35").value = date35;
			    document.getElementById("date36").value = date36;
			    document.getElementById("date37").value = date37;
			    document.getElementById("date38").value = date38;
			    document.getElementById("date39").value = date39;
			    document.getElementById("date40").value = date40;
			    document.getElementById("date41").value = date41;
			    document.getElementById("date42").value = date42;



			    document.getElementById("status1").checked = status1;
			    document.getElementById("status2").checked = status2;
			    document.getElementById("status3").checked = status3;
			    document.getElementById("status4").checked = status4;
			    document.getElementById("status5").checked = status5;
			    document.getElementById("status6").checked = status6;
			    document.getElementById("status7").checked = status7;
			    document.getElementById("status8").checked = status8;
			    document.getElementById("status9").checked = status9;
			    document.getElementById("status10").checked = status10;
			    document.getElementById("status11").checked = status11;
			    document.getElementById("status12").checked = status12;
			    document.getElementById("status13").checked = status13;
			    document.getElementById("status14").checked = status14;
			    document.getElementById("status15").checked = status15;
			    document.getElementById("status16").checked = status16;
			    document.getElementById("status17").checked = status17;
			    document.getElementById("status18").checked = status18;
			    document.getElementById("status19").checked = status19;
			    document.getElementById("status20").checked = status20;
			    document.getElementById("status21").checked = status21;

				
			},error: function(error){
				//console.log(error.message);
			}

		});
	
	  };	  
			  
	 showDetail();
	 
	// Update existing task
	function updateTask() {
		// - Important - //
	    // The fileno and formtype will not be updated as these data is always unchanged.
		//var user = Parse.User.current();
		//var username = user.get("username");
		
		var data ={};
		var id = searchID();
	

		var query = new Parse.Query(Form01);
		var fileNo = $("#fileNo").val();
		
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
		data.date27 = $("#date27").val();
		data.date28 = $("#date28").val();
		data.date29 = $("#date29").val();
		data.date30 = $("#date30").val();
		data.date31 = $("#date31").val();
		data.date32 = $("#date32").val();
		data.date33 = $("#date33").val();
		data.date34 = $("#date34").val();
		data.date35 = $("#date35").val();
		data.date36 = $("#date36").val();
		data.date37 = $("#date37").val();
		data.date38 = $("#date38").val();
		data.date39 = $("#date39").val();
		data.date40 = $("#date40").val();
		data.date41 = $("#date41").val();
		data.date42 = $("#date42").val();



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
		data.status14 = document.getElementById("status14").checked;
		data.status15 = document.getElementById("status15").checked;
		data.status16 = document.getElementById("status16").checked;
		data.status17 = document.getElementById("status17").checked;
		data.status18 = document.getElementById("status18").checked;
		data.status19 = document.getElementById("status19").checked;
		data.status20 = document.getElementById("status20").checked;
		data.status21 = document.getElementById("status21").checked;


		query.equalTo("objectId", id);
            query.first({
                //match the key values from the form and then save it
				success: function (Form01) {
                         Form01.save(data, {
                         success: function (form01) {
 				
							//form01.set("date1",date1);			
							//form01.set("date2",date2);
							//form01.set("status1",status1);

                            // form01.save();
                            alert("Thanks, your file: "+fileNo+" has been updated successfully!");
							window.location = "task-list.html";								
                         },
						 	error: function(form01, error){
							alert('Failed to Update!');
							console.log(error);
						}
						 
                        }); //form01.save()

                        }
                       });


		//});

	};
	
	
	// Check whether file no has existed before saved!!!
	$("#task-form").submit(function(event){
			// Prevent Default Submit Event
        	event.preventDefault();
	
			//Update New Data;
			updateTask();
	});
	 
	 
	 
	 
	 
});


	