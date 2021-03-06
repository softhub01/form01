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
				var dateDue =results[0].get("dateDue");
				
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
				
				// Overall status is refer to status of last task
				var status0 = results[0].get("status21");

				//Show data on input fields		
				document.getElementById("fileNo").value = fileNo;
				document.getElementById("dateDue").value = dateDue;				
				document.getElementById("status0").value = status0;
				
				var maxDeadline = dateDue;					

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



			    document.getElementById("status1").value = status1;
			    document.getElementById("status2").value = status2;
			    document.getElementById("status3").value = status3;
			    document.getElementById("status4").value = status4;
			    document.getElementById("status5").value = status5;
			    document.getElementById("status6").value = status6;
			    document.getElementById("status7").value = status7;
			    document.getElementById("status8").value = status8;
			    document.getElementById("status9").value = status9;
			    document.getElementById("status10").value = status10;
			    document.getElementById("status11").value = status11;
			    document.getElementById("status12").value = status12;
			    document.getElementById("status13").value = status13;
			    document.getElementById("status14").value = status14;
			    document.getElementById("status15").value = status15;
			    document.getElementById("status16").value = status16;
			    document.getElementById("status17").value = status17;
			    document.getElementById("status18").value = status18;
			    document.getElementById("status19").value = status19;
			    document.getElementById("status20").value = status20;
			    document.getElementById("status21").value = status21;

			// Test - setEndDate of datepicker to equal to project Due date
			$( "#date1" ).datepicker("setEndDate", maxDeadline);
			$( "#date3" ).datepicker("setEndDate", maxDeadline);
			$( "#date5" ).datepicker("setEndDate", maxDeadline);
			$( "#date7" ).datepicker("setEndDate", maxDeadline);
			$( "#date9" ).datepicker("setEndDate", maxDeadline);
			$( "#date11" ).datepicker("setEndDate", maxDeadline);
			$( "#date13" ).datepicker("setEndDate", maxDeadline);
			$( "#date15" ).datepicker("setEndDate", maxDeadline);
			$( "#date17" ).datepicker("setEndDate", maxDeadline);
			$( "#date19" ).datepicker("setEndDate", maxDeadline);
			$( "#date21" ).datepicker("setEndDate", maxDeadline);
			$( "#date23" ).datepicker("setEndDate", maxDeadline);
			$( "#date25" ).datepicker("setEndDate", maxDeadline);
			$( "#date27" ).datepicker("setEndDate", maxDeadline);
			$( "#date29" ).datepicker("setEndDate", maxDeadline);
			$( "#date31" ).datepicker("setEndDate", maxDeadline);
			$( "#date33" ).datepicker("setEndDate", maxDeadline);
			$( "#date35" ).datepicker("setEndDate", maxDeadline);
			$( "#date37" ).datepicker("setEndDate", maxDeadline);
			$( "#date39" ).datepicker("setEndDate", maxDeadline);
			$( "#date41" ).datepicker("setEndDate", maxDeadline);				
				
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
		
		data.dateDue = $("#dateDue").val();	
		
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
		
		//Get today's date in string
		var todayDate = new Date();
		var m = todayDate.getMonth();
		var d = todayDate.getDate()+1;
		var y = todayDate.getFullYear();

		var todayDateText = new Date(y,m,d);
		todayDate = todayDateText.toISOString().substr(0,10);		
		
					//Automatic set status 1
					if(data.date1!=="" && data.date2!=="")
					{
						if(data.date1 >= data.date2)
						{	
						data.status1 = "Completed";						
						}
						else
						{
						data.status1 = "Overdue";	
						}	
					}	
					else if((data.date1!=="" && data.date2=="" && todayDate > data.date1) || (data.date1 =="" && data.date2=="" && todayDate > data.dateDue))
					{
						data.status1 = "Overdue";
					}
					else if((data.date1!=="" && data.date2=="" && todayDate == data.dateDue) || (data.date1 =="" && data.date2=="" && todayDate == data.dateDue))
					{
						data.status1 = "Due Today";
					}
					else if(data.date1 =="" && data.date2!=="" && data.dateDue >= data.date2)  
					{
						data.status1 = "Completed";
					}						
					else 
					{
						data.status1 = "In progress";
					}						
					
					//Automatic set status 2
					if(data.date3!=="" && data.date4!=="")
					{
						if(data.date3 >= data.date4)
						{	
						data.status2 = "Completed";						
						}
						else
						{
						data.status2 = "Overdue";	
						}	
					}
					else if((data.date3!=="" && data.date4=="" && todayDate > data.date3) || (data.date3 =="" && data.date4=="" && todayDate > data.dateDue))
					{
						data.status2 = "Overdue";
					}
					else if((data.date3!=="" && data.date4=="" && todayDate == data.dateDue) || (data.date3 =="" && data.date4=="" && todayDate == data.dateDue))
					{
						data.status2 = "Due Today";
					}
					else if(data.date3 =="" && data.date4!=="" && data.dateDue >= data.date4)  
					{
						data.status2 = "Completed";
					}						
					else
					{
						data.status2 = "In progress";
					}						
					
					//Automatic set status 3
					if(data.date5!=="" && data.date6!=="")
					{
						if(data.date5 >= data.date6)
						{	
						data.status3 = "Completed";						
						}
						else
						{
						data.status3 = "Overdue";	
						}	
					}
					else if((data.date5!=="" && data.date6=="" && todayDate > data.date5) || (data.date5 =="" && data.date6=="" && todayDate > data.dateDue))
					{
						data.status3 = "Overdue";
					}
					else if((data.date5!=="" && data.date6=="" && todayDate == data.dateDue) || (data.date5 =="" && data.date6=="" && todayDate == data.dateDue))
					{
						data.status3 = "Due Today";
					}
					else if(data.date5 =="" && data.date6!=="" && data.dateDue >= data.date6)  
					{
						data.status3 = "Completed";
					}						
					else
					{
						data.status3 = "In progress";
					}	
					
					//Automatic set status 4
					if(data.date7!=="" && data.date8!=="")
					{
						if(data.date7 >= data.date8)
						{	
						data.status4 = "Completed";						
						}
						else
						{
						data.status4 = "Overdue";	
						}	
					}
					else if((data.date7!=="" && data.date8=="" && todayDate > data.date7) || (data.date7 =="" && data.date8=="" && todayDate > data.dateDue))
					{
						data.status4 = "Overdue";
					}
					else if((data.date7!=="" && data.date8=="" && todayDate == data.dateDue) || (data.date7 =="" && data.date8=="" && todayDate == data.dateDue))
					{
						data.status4 = "Due Today";
					}
					else if(data.date7 =="" && data.date8!=="" && data.dateDue >= data.date8)  
					{
						data.status4 = "Completed";
					}					
					else
					{
						data.status4 = "In progress";
					}					
					
					//Automatic set status 5
					if(data.date9!=="" && data.date10!=="")
					{
						if(data.date9 >= data.date10)
						{	
						data.status5 = "Completed";						
						}
						else
						{
						data.status5 = "Overdue";	
						}	
					}
					else if((data.date9!=="" && data.date10=="" && todayDate > data.date9) || (data.date9 =="" && data.date10=="" && todayDate > data.dateDue))
					{
						data.status5 = "Overdue";
					}
					else if((data.date9!=="" && data.date10=="" && todayDate == data.dateDue) || (data.date9 =="" && data.date10=="" && todayDate == data.dateDue))
					{
						data.status5 = "Due Today";
					}
					else if(data.date9 =="" && data.date10!=="" && data.dateDue >= data.date10)  
					{
						data.status5 = "Completed";
					}					
					else
					{
						data.status5 = "In progress";
					}						
					
					
					//Automatic set status 6
					if(data.date11!=="" && data.date12!=="")
					{
						if(data.date11 >= data.date12)
						{	
						data.status6 = "Completed";						
						}
						else
						{
						data.status6 = "Overdue";	
						}	
					}
					else if((data.date11!=="" && data.date12=="" && todayDate > data.date11) || (data.date11 =="" && data.date12=="" && todayDate > data.dateDue))
					{
						data.status6 = "Overdue";
					}
					else if((data.date11!=="" && data.date12=="" && todayDate == data.dateDue) || (data.date11 =="" && data.date12=="" && todayDate == data.dateDue))
					{
						data.status6 = "Due Today";
					}
					else if(data.date11 =="" && data.date12!=="" && data.dateDue >= data.date12)  
					{
						data.status6 = "Completed";
					}					
					else
					{
						data.status6 = "In progress";
					}						
					
					
					//Automatic set status 7
					if(data.date13!=="" && data.date14!=="")
					{
						if(data.date13 >= data.date14)
						{	
						data.status7 = "Completed";						
						}
						else
						{
						data.status7 = "Overdue";	
						}	
					}
					else if((data.date13!=="" && data.date14=="" && todayDate > data.date13) || (data.date13 =="" && data.date14=="" && todayDate > data.dateDue))
					{
						data.status7 = "Overdue";
					}
					else if((data.date13!=="" && data.date14=="" && todayDate == data.dateDue) || (data.date13 =="" && data.date14=="" && todayDate == data.dateDue))
					{
						data.status7 = "Due Today";
					}
					else if(data.date13 =="" && data.date14!=="" && data.dateDue >= data.date14)  
					{
						data.status7 = "Completed";
					}					
					else
					{
						data.status7 = "In progress";
					}						
					
					//Automatic set status 8
					if(data.date15!=="" && data.date16!=="")
					{
						if(data.date15 >= data.date16)
						{	
						data.status8 = "Completed";						
						}
						else
						{
						data.status8 = "Overdue";	
						}	
					}
					else if((data.date15!=="" && data.date16=="" && todayDate > data.date15) || (data.date15 =="" && data.date16=="" && todayDate > data.dateDue))
					{
						data.status8 = "Overdue";
					}
					else if((data.date15!=="" && data.date16=="" && todayDate == data.dateDue) || (data.date15 =="" && data.date16=="" && todayDate == data.dateDue))
					{
						data.status8 = "Due Today";
					}
					else if(data.date15 =="" && data.date16!=="" && data.dateDue >= data.date16)  
					{
						data.status8 = "Completed";
					}					
					else
					{
						data.status8 = "In progress";
					}
					
					//Automatic set status 9
					if(data.date17!=="" && data.date18!=="")
					{
						if(data.date17 >= data.date18)
						{	
						data.status9 = "Completed";						
						}
						else
						{
						data.status9 = "Overdue";	
						}	
					}
					else if((data.date17!=="" && data.date18=="" && todayDate > data.date17) || (data.date17 =="" && data.date18=="" && todayDate > data.dateDue))
					{
						data.status9 = "Overdue";
					}
					else if((data.date17!=="" && data.date18=="" && todayDate == data.dateDue) || (data.date17 =="" && data.date18=="" && todayDate == data.dateDue))
					{
						data.status9 = "Due Today";
					}
					else if(data.date17 =="" && data.date18!=="" && data.dateDue >= data.date18)  
					{
						data.status9 = "Completed";
					}						
					else
					{
						data.status9 = "In progress";
					}					
					
					
					//Automatic set status 10
					if(data.date19!=="" && data.date20!=="")
					{
						if(data.date19 >= data.date20)
						{	
						data.status10 = "Completed";						
						}
						else
						{
						data.status10 = "Overdue";	
						}	
					}
					else if((data.date19!=="" && data.date20=="" && todayDate > data.date19) || (data.date19 =="" && data.date20=="" && todayDate > data.dateDue))
					{
						data.status10 = "Overdue";
					}
					else if((data.date19!=="" && data.date20=="" && todayDate == data.dateDue) || (data.date19 =="" && data.date20=="" && todayDate == data.dateDue))
					{
						data.status10 = "Due Today";
					}
					else if(data.date19 =="" && data.date20!=="" && data.dateDue >= data.date20)  
					{
						data.status10 = "Completed";
					}						
					else
					{
						data.status10 = "In progress";
					}
					

					//Automatic set status 11
					if(data.date21!=="" && data.date22!=="")
					{
						if(data.date21 >= data.date22)
						{	
						data.status11 = "Completed";						
						}
						else
						{
						data.status11 = "Overdue";	
						}	
					}
					else if((data.date21!=="" && data.date22=="" && todayDate > data.date21) || (data.date21 =="" && data.date22=="" && todayDate > data.dateDue))
					{
						data.status11 = "Overdue";
					}
					else if((data.date21!=="" && data.date22=="" && todayDate == data.dateDue) || (data.date21 =="" && data.date22=="" && todayDate == data.dateDue))
					{
						data.status11 = "Due Today";
					}
					else if(data.date21 =="" && data.date22!=="" && data.dateDue >= data.date22)  
					{
						data.status11 = "Completed";
					}						
					else
					{
						data.status11 = "In progress";
					}
					
					//Automatic set status 12
					if(data.date23!=="" && data.date24!=="")
					{
						if(data.date23 >= data.date24)
						{	
						data.status12 = "Completed";						
						}
						else
						{
						data.status12 = "Overdue";	
						}	
					}
					else if((data.date23!=="" && data.date24=="" && todayDate > data.date23) || (data.date23 =="" && data.date24=="" && todayDate > data.dateDue))
					{
						data.status12 = "Overdue";
					}
					else if((data.date23!=="" && data.date24=="" && todayDate == data.dateDue) || (data.date23 =="" && data.date24=="" && todayDate == data.dateDue))
					{
						data.status12 = "Due Today";
					}
					else if(data.date23 =="" && data.date24!=="" && data.dateDue >= data.date24)  
					{
						data.status12 = "Completed";
					}						
					else
					{
						data.status12 = "In progress";
					}					


					//Automatic set status 13
					if(data.date25!=="" && data.date26!=="")
					{
						if(data.date25 >= data.date26)
						{	
						data.status13 = "Completed";						
						}
						else
						{
						data.status13 = "Overdue";	
						}	
					}
					else if((data.date25!=="" && data.date26=="" && todayDate > data.date25) || (data.date25 =="" && data.date26=="" && todayDate > data.dateDue))
					{
						data.status13 = "Overdue";
					}
					else if((data.date25!=="" && data.date26=="" && todayDate == data.dateDue) || (data.date25 =="" && data.date26=="" && todayDate == data.dateDue))
					{
						data.status13 = "Due Today";
					}
					else if(data.date25 =="" && data.date26!=="" && data.dateDue >= data.date26)  
					{
						data.status13 = "Completed";
					}						
					else
					{
						data.status13 = "In progress";
					}	

					//Automatic set status 14
					if(data.date27!=="" && data.date28!=="")
					{
						if(data.date27 >= data.date28)
						{	
						data.status14 = "Completed";						
						}
						else
						{
						data.status14 = "Overdue";	
						}	
					}
					else if((data.date27!=="" && data.date28=="" && todayDate > data.date27) || (data.date27 =="" && data.date28=="" && todayDate > data.dateDue))
					{
						data.status14 = "Overdue";
					}
					else if((data.date27!=="" && data.date28=="" && todayDate == data.dateDue) || (data.date27 =="" && data.date28=="" && todayDate == data.dateDue))
					{
						data.status14 = "Due Today";
					}
					else if(data.date27 =="" && data.date28!=="" && data.dateDue >= data.date28)  
					{
						data.status14 = "Completed";
					}					
					else
					{
						data.status14 = "In progress";
					}	
					
					//Automatic set status 15
					if(data.date29!=="" && data.date30!=="")
					{
						if(data.date29 >= data.date30)
						{	
						data.status15 = "Completed";						
						}
						else
						{
						data.status15 = "Overdue";	
						}	
					}
					else if((data.date29!=="" && data.date30=="" && todayDate > data.date29) || (data.date29 =="" && data.date30=="" && todayDate > data.dateDue))
					{
						data.status15 = "Overdue";
					}
					else if((data.date29!=="" && data.date30=="" && todayDate == data.dateDue) || (data.date29 =="" && data.date30=="" && todayDate == data.dateDue))
					{
						data.status15 = "Due Today";
					}
					else if(data.date29 =="" && data.date30!=="" && data.dateDue >= data.date30)  
					{
						data.status15 = "Completed";
					}						
					else
					{
						data.status15 = "In progress";
					}						

					//Automatic set status 16
					if(data.date31!=="" && data.date32!=="")
					{
						if(data.date31 >= data.date32)
						{	
						data.status16 = "Completed";						
						}
						else
						{
						data.status16 = "Overdue";	
						}	
					}
					else if((data.date31!=="" && data.date32=="" && todayDate > data.date31) || (data.date31 =="" && data.date32=="" && todayDate > data.dateDue))
					{
						data.status16 = "Overdue";
					}
					else if((data.date31!=="" && data.date32=="" && todayDate == data.dateDue) || (data.date31 =="" && data.date32=="" && todayDate == data.dateDue))
					{
						data.status16 = "Due Today";
					}
					else if(data.date31 =="" && data.date32!=="" && data.dateDue >= data.date31)  
					{
						data.status16 = "Completed";
					}						
					else
					{
						data.status16 = "In progress";
					}

					//Automatic set status 17
					if(data.date33!=="" && data.date34!=="")
					{
						if(data.date33 >= data.date34)
						{	
						data.status17 = "Completed";						
						}
						else
						{
						data.status17 = "Overdue";	
						}	
					}
					else if((data.date33!=="" && data.date34=="" && todayDate > data.date33) || (data.date33 =="" && data.date34=="" && todayDate > data.dateDue))
					{
						data.status17 = "Overdue";
					}
					else if((data.date33!=="" && data.date34=="" && todayDate == data.dateDue) || (data.date33 =="" && data.date34=="" && todayDate == data.dateDue))
					{
						data.status17 = "Due Today";
					}
					else if(data.date33 =="" && data.date34!=="" && data.dateDue >= data.date33)  
					{
						data.status17 = "Completed";
					}						
					else
					{
						data.status17 = "In progress";
					}

					//Automatic set status 18
					if(data.date35!=="" && data.date36!=="")
					{
						if(data.date35 >= data.date36)
						{	
						data.status18 = "Completed";						
						}
						else
						{
						data.status18 = "Overdue";	
						}	
					}
					else if((data.date35!=="" && data.date36=="" && todayDate > data.date35) || (data.date35 =="" && data.date36=="" && todayDate > data.dateDue))
					{
						data.status18 = "Overdue";
					}
					else if((data.date35!=="" && data.date36=="" && todayDate == data.dateDue) || (data.date35 =="" && data.date36=="" && todayDate == data.dateDue))
					{
						data.status18 = "Due Today";
					}
					else if(data.date35 =="" && data.date36!=="" && data.dateDue >= data.date36)  
					{
						data.status18 = "Completed";
					}						
					else
					{
						data.status18 = "In progress";
					}					
					
					//Automatic set status 19
					if(data.date37!=="" && data.date38!=="")
					{
						if(data.date37 >= data.date38)
						{	
						data.status19 = "Completed";						
						}
						else
						{
						data.status19 = "Overdue";	
						}	
					}
					else if((data.date37!=="" && data.date38=="" && todayDate > data.date37) || (data.date37 =="" && data.date38=="" && todayDate > data.dateDue))
					{
						data.status19 = "Overdue";
					}
					else if((data.date37!=="" && data.date38=="" && todayDate == data.dateDue) || (data.date37 =="" && data.date38=="" && todayDate == data.dateDue))
					{
						data.status19 = "Due Today";
					}
					else if(data.date37 =="" && data.date38!=="" && data.dateDue >= data.date38)  
					{
						data.status19 = "Completed";
					}					
					else
					{
						data.status19 = "In progress";
					}					

					//Automatic set status 20
					if(data.date39!=="" && data.date40!=="")
					{
						if(data.date39 >= data.date40)
						{	
						data.status20 = "Completed";						
						}
						else
						{
						data.status20 = "Overdue";	
						}	
					}
					else if((data.date39!=="" && data.date40=="" && todayDate > data.date39) || (data.date39 =="" && data.date40=="" && todayDate > data.dateDue))
					{
						data.status20 = "Overdue";
					}
					else if((data.date39!=="" && data.date40=="" && todayDate == data.dateDue) || (data.date39 =="" && data.date40=="" && todayDate == data.dateDue))
					{
						data.status20 = "Due Today";
					}
					else if(data.date39 =="" && data.date40!=="" && data.dateDue >= data.date40)  
					{
						data.status20 = "Completed";
					}					
					else
					{
						data.status20 = "In progress";
					}

					//Automatic set status 21
					if(data.date41!=="" && data.date42!=="")
					{
						if(data.date41 >= data.date42)
						{	
						data.status21 = "Completed";						
						}
						else
						{
						data.status21 = "Overdue";	
						}	
					}
					else if((data.date41!=="" && data.date42=="" && todayDate > data.date41) || (data.date41 =="" && data.date42=="" && todayDate > data.dateDue))
					{
						data.status21 = "Overdue";
					}
					else if((data.date41!=="" && data.date42=="" && todayDate == data.dateDue) || (data.date41 =="" && data.date42=="" && todayDate == data.dateDue))
					{
						data.status21 = "Due Today";
					}
					else if(data.date41 =="" && data.date42!=="" && data.dateDue >= data.date42)  
					{
						data.status21 = "Completed";
					}					
					else
					{
						data.status21 = "In progress";
					}							
					
					data.status0 = data.status21;

					
		/* Previous script of reading data from input field	
		data.status1 = document.getElementById("status1").value;
		data.status2 = document.getElementById("status2").value;
		data.status3 = document.getElementById("status3").value;
		data.status4 = document.getElementById("status4").value;
		data.status5 = document.getElementById("status5").value;
		data.status6 = document.getElementById("status6").value;
		data.status7 = document.getElementById("status7").value;
		data.status8 = document.getElementById("status8").value;
		data.status9 = document.getElementById("status9").value;
		data.status10 = document.getElementById("status10").value;
		data.status11 = document.getElementById("status11").value;
		data.status12 = document.getElementById("status12").value;
		data.status13 = document.getElementById("status13").value;
		data.status14 = document.getElementById("status14").value;
		data.status15 = document.getElementById("status15").value;
		data.status16 = document.getElementById("status16").value;
		data.status17 = document.getElementById("status17").value;
		data.status18 = document.getElementById("status18").value;
		data.status19 = document.getElementById("status19").value;
		data.status20 = document.getElementById("status20").value;
		data.status21 = document.getElementById("status21").value;
		*/

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


	