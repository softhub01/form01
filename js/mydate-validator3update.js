/*!
 Javascript for datepicker input restriction -
 1) Task "Deadline Date" is not allowed to greater than "Project Due Date";
 2) Task "Completed Date" cannot be greater than today date.
 */


$(document).ready(function () {
	
	$( "#date1" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date3" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date5" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date7" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date9" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date11" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date13" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date15" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date17" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date19" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date21" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date23" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date25" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date27" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date29" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date31" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date33" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date35" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date37" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date39" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date41" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date43" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date45" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date47" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date49" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});	
	$( "#date51" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date53" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date55" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date57" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date59" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});	
	$( "#date61" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date63" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date65" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date67" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date69" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});	
	$( "#date71" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date73" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});	
	$( "#date75" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date77" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date79" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});
	$( "#date81" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true});

	
	// Script to disable datepicker
	//$("#dateDue").prop('disabled', true);
	
	// Script which reserve if Project Due Date is allowed to change in future
	
	$( "#dateDue" ).datepicker({
		format: 'yyyy-mm-dd',
		autoclose: true,
		todayHighlight: true
		}).on('changeDate', function(event){
			var newMaxDeadline = new Date(event.date);
		
			// Test script
			// maxDeadline.setDate(maxDeadline.getDate() );
			//$( "#date1" ).datepicker("setStartDate", event.date);

			$( "#date1" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date3" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date5" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date7" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date9" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date11" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date13" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date15" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date17" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date19" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date21" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date23" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date25" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date27" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date29" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date31" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date33" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date35" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date37" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date39" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date41" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date43" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date45" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date47" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date49" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date51" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date53" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date55" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date57" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date59" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date61" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date63" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date65" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date67" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date69" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date71" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date73" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date75" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date77" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date79" ).datepicker("setEndDate", newMaxDeadline);
			$( "#date81" ).datepicker("setEndDate", newMaxDeadline);

			
		});
			
			
		$( "#date2" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date4" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date6" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date8" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true,  endDate: 'today'});		
		$( "#date10" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date12" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date14" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date16" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date18" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date20" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date22" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date24" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date26" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date28" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date30" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date32" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date34" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date36" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date38" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});	
		$( "#date40" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date42" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date44" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date46" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date48" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date50" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date52" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date54" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date56" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date58" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date60" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date62" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date64" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date66" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date68" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});
		$( "#date70" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date72" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date74" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date76" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date78" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});		
		$( "#date80" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});			
		$( "#date82" ).datepicker({format: 'yyyy-mm-dd', autoclose: true, todayHighlight: true, endDate: 'today'});

		
});