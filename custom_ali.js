/*
 |--------------------------------------------------------------------------
 | login_view js
 |--------------------------------------------------------------------------
 |
 */

$(document).ready(function(){
     $( ":input" ).on( "copy cut paste drop", function() {
         alert("Copy and Paste Function is not Allowed!");
                return false;
        });
    
        $('html,body').animate({scrollTop:0},100);
		$("#login_btn").click(function(){
                   if( $("#username").val()==""){
                       $("#error_username").show();
                   }
                   else if($("#password").val()=="")
                   {
                       $("#error_password").show();
                   }
                   else{
			   $.ajax({
				url: 'Login/verify_login',
				method: 'POST',
				data: {'user': $("#username").val(),'pass': $("#password").val()},
				async: false,
				success: function (data) {
                                   if(data == 'no match')
                                    {
                                        $("#m_head").html("Warning!!!");
                                        $("#m_body").html('Incorrect Username or Password');
                                        $("#myModal").modal("show");
                                       $("#btn_suc").hide();
                                    }
                                    else {
                                        window.location.replace(data);
                                    }
                                }
				});
                        }
		});
                
                $("#register_btn").click(function(){
                    if( $("#username").val()=="" || $("#password").val()=="" || $("#confirm_password").val()=="" || $("#fullname").val()=="" || $("#address").val()=="" || $("#email").val()==""){
                      
                   }
                   else{
                       if($("#password").val() != $("#confirm_password").val())
                       {
                           $("#error_confirm_password").show();
                           return false;
                       }
                       else{
                    $.ajax({
				url: 'Registration/register_user',
				method: 'POST',
				data: {'user': $("#username").val(),'pass': $("#password").val(),'my_name': $("#fullname").val(),'address': $("#address").val(),'email': $("#email").val(),'gender':  $('input:radio[name=gender]:checked').val()},
				async: false,
				success: function (data) {
                                    if(data == 'Done'){
                                        
                                  }else{
                                      alert("Username already exists try another!!");
                                      return false;
                                  }
				}
				});
                            }
                        }
                });
                $("#sign_out").click(function(){
                    //alert('ali');
                    $.ajax({
				url: 'admin/logout',
				method: 'POST',
				data: {},
				async: false,
				success: function (data) {
                                   
                                    window.location.replace("Login");
				}
				});
                });
             /*  $("#save_form").click(function(){
                  var file_data = $('#img_upload').prop('files')[0];   
                    var form_data = new FormData();                  
                    form_data.append('file', file_data);           
                    $.ajax({
                                url: 'admissionform/store_pic', // point to server-side PHP script 
                                dataType: 'text',  // what to expect back from the PHP script, if anything
                                cache: false,
                                contentType: false,
                                processData: false,
                                data: form_data,                         
                                type: 'post',
                                success: function(php_script_response){
                                   // alert(php_script_response); // display response from the PHP script, if any
                                }
                     });
                   var result = {
                                  'name': $("#fullname").val(),
                                  'dob': $("#dob").val(),
                                  'gender': $("#gender").val(),
                                  'cnic': $("#cnic").val(),
                                  'fname': $("#fname").val(),
                                  'fcnic': $("#fcnic").val(),
                                  'gname': $("#gname").val(),
                                  'gcnic': $("#gcnic").val(),
                                  'phoneno': $("#phone_no").val(),
                                  'mobileno': $("#mobile_no").val(),
                                  'email': $("#email").val(),
                                  'address': $("#address").val(),
                                  'myear': $("#year_matric").val(),
                                  'mroll': $("#rollno_matric").val(),
                                  'mgrade':$('#grade_matric').val(),
                                  'mtotal': $("#total_matric").val(),
                                  'mmarks': $("#marks_matric").val(),
                                  'mmajor': $("#major_matric").val(),
                                  'mboard': $("#board_matric").val(),
                                  'iyear1': $("#year_inter1").val(),
                                  'iroll1': $("#rollno_inter1").val(),
                                  'itotal1': $("#total_inter1").val(),
                                  'imarks1': $("#marks_inter1").val(),
                                  'igrade1':$('#grade_inter1').val(),
                                  'imajor1': $("#major_inter1").val(),
                                  'iboard1': $("#board_inter1").val(),
                                  'iyear2': $("#year_inter2").val(),
                                  'iroll2': $("#rollno_inter2").val(),
                                  'itotal2': $("#total_inter2").val(),
                                  'imarks2': $("#marks_inter2").val(),
                                  'igrade2':$('#grade_inter2').val(),
                                  'imajor2': $("#major_inter2").val(),
                                  'iboard2': $("#board_inter2").val(),
                    };
                   // console.log(result);
//                   / return false;
			   $.ajax({
				url: 'admissionform/store_data',
				method: 'POST',
				data: result,
				async: false,
				success: function (data) {
                                    if(data == 'done')
                                    {
                                                //  alert("ali");
                                        window.open("printchallan");
                                      window.close(this);
                                    }
                                    
                                }
				});
		});*/
    $("#btn_challan").click(function(){
                  var file_data = $('#challan_upload').prop('files')[0];   
                    var form_data = new FormData();                  
                    form_data.append('file', file_data);           
                    $.ajax({
                              url: 'printchallan/store_challan', // point to server-side PHP script 
                                dataType: 'text',  // what to expect back from the PHP script, if anything
                                cache: false,
                                contentType: false,
                                processData: false,
                                data: form_data,                         
                                type: 'post',
                                success: function(php_script_response){
                                  $('#btn_challan').hide();
                                  $('#challan_upload').hide();
                                  $('#challan').text('your challan has been submitted!!!!');
                                }
                     });
                 });
                $("#save_for").click(function(){
                 //alert('ali');
                   var result = {
                                  //'reserve':$('input:radio[name=reserve_seat]:checked').val(),
                                  'name': $("#fullname").val(),
                                  'dob': $("#dob3").val()+'-'+$("#dob2").val()+'-'+$("#dob1").val(),
                                  'gender': $('input:radio[name=gender]:checked').val(),
                                  'relation': $('input:radio[name=relation]:checked').val(),
                                  'cnic': $("#cnic1").val() + $("#cnic2").val() + $("#cnic3").val(),
                                  'fname': $("#fname").val(),
                                  'fcnic': $("#fcnic1").val() + $("#fcnic2").val() + $("#fcnic3").val(),
                                  'gname': $("#gname").val(),
                                  'gcnic': $("#gcnic1").val() + $("#gcnic2").val() + $("#gcnic3").val(),
                                  'fincome':$("#fincome").val(),
                                  'phoneno': $("#phone_no").val(),
                                  'mobileno': $("#mobile_no").val(),
                                  'email': $("#email").val(),
                                  'district': $("#district").val(),
                                  'address': $("#address").val()
                    };
                // alert(result['dob']);
                    
                  
			   $.ajax({
				url: 'admissionfor/store_data',
				method: 'POST',
				data: result,
				async: false,
				success: function (data) {
                                    //alert(data);
                                    if(data == 'done')
                                    {
                                        window.location.replace("admissionacadamic");
                                    }
                                }
				});
		});
                
                  /* $(window).scroll(function () {  
                  if ($(window).scrollTop() > 1) {
                    $('#Nav').addClass('navbar-fixed');
                  }
                  if ($(window).scrollTop() < 1) {
                    $('#Nav').addClass('navbar-fixed');
                  }
                  });*/
                  $("#save_acadamic_data").click(function(){
                    var result = {
                                  'myear': $("#year_matric").val(),
                                  'mroll': $("#rollno_matric").val(),
                                  'mgrade':$('#grade_matric').val(),
                                  'mtotal': $("#total_matric").val(),
                                  'mmarks': $("#marks_matric").val(),
                                  'mmajor': $("#major_matric").val(),
                                  'mboard': $("#board_matric").val(),
                                  'iyear1': $("#year_inter1").val(),
                                  'iroll1': $("#rollno_inter1").val(),
                                  'itotal1': $("#total_inter1").val(),
                                  'imarks1': $("#marks_inter1").val(),
                                  'igrade1':$('#grade_inter1').val(),
                                  'imajor1': $("#major_inter1").val(),
                                  'iboard1': $("#board_inter1").val(),
                                  'iyear2': $("#year_inter2").val(),
                                  'iroll2': $("#rollno_inter2").val(),
                                  'itotal2': $("#total_inter2").val(),
                                  'imarks2': $("#marks_inter2").val(),
                                  'igrade2':$('#grade_inter2').val(),
                                  'imajor2': $("#major_inter2").val(),
                                  'iboard2': $("#board_inter2").val()
                    };
                    $.ajax({
				url: 'admissionacadamic/store_acadamic_data',
				method: 'POST',
				data: result,
				async: false,
				success: function (data) {
                                    if(data == 'done')
                                    {
                                           window.open("printchallan");
                                      window.close(this);
                                    }
                                }
                            });
                  });
               $.ajax({
                    url: 'home/notice_board',
                    method: 'POST',
                    data: {},
                    async: true,
                    success: function (data) {
                    data = data.split('@@@@');
                    if(data[0]!= '')
                    $("#news").html(data[0]);
                    else
                     $("#news").html("No News to show here........");
                    if(data[1]!= '')
                    $("#events").html(data[1]);
                    else
                     $("#events").html("No Events to show here........");
                    if(data[2]!= "")
                    $("#notice-board").html(data[2]);
                    else
                     $("#notice-board").html("No Notice to show here........");
                    }
            });
           
            setInterval(updateScroll,1000);
             function updateScroll(){
                 $.ajax({
                    url: 'home/notice_board',
                    method: 'POST',
                    data: {},
                    async: true,
                    success: function (data) {
                    data = data.split('@@@@');
                    if(data[0]!= '')
                    $("#news").html(data[0]);
                    else
                     $("#news").html("No News to show here........");
                    if(data[1]!= '')
                    $("#events").html(data[1]);
                    else
                     $("#events").html("No Events to show here........");
                    if(data[2]!= "")
                    $("#notice-board").html(data[2]);
                    else
                     $("#notice-board").html("No Notice to show here........");
                    }
            });
            }    
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        $("#login_btn").click();
        $("#register_btn").click();
        $("#error_username").hide();
        $("#error_password").hide();
        $("#error_confirm_password").hide();
        $("#error_fullname").hide();
        $("#error_address").hide();
        $("#error_email").hide();
    }
});
$(".file_menu").hover(
        function() {
            $(this).children("ul").slideDown('fast');
        },
        function() {
            $(this).children("ul").slideUp('fast');
        }
    );
    $("#issue_slip").click(function(){
         $.ajax({
                url: 'printchallan/issue_slip',
                method: 'POST',
                data: {},
                async: false,
                success: function (data) {
                    if(data == 'not_issued'){
                        $("#m_head").html("Alert!!!");
                        $("#m_body").html('Your Challan is not verified yet.. Submit Challan and wait for three working days');
                        $("#myModal").modal("show");
                        $("#btn_suc").hide();
                    }
                    else if(data == 'done')
                    {
                        window.open("testslip");
                    }
                }
            });
    });
      $("#goto_login").click(function(){
        window.location.replace("Login");
    });
});

/*
 |--------------------------------------------------------------------------
 | admission_form_view js
 |--------------------------------------------------------------------------
 |
 */
function Save_result()
{
    alert('li');
}
function edit_personal(id)
{  
    $.ajax({
            url: 'printchallan/edit_personal',
            method: 'POST',
            data: {'id':id},
            async: false,
            success: function (data) {
                $("#m_head").html("Edit Personal Information!!!");
                $("#m_body").html(data);
                $("#myModal").modal("show");
                return false;
            }
            });
}
function edit_academic(id)
{
     $.ajax({
            url: 'printchallan/edit_academic',
            method: 'POST',
            data: {'id':id},
            async: false,
            success: function (data) {
                $("#m_head").html("Edit Academic Information!!!");
                $("#m_body").html(data);
                $("#myModal").modal("show");
            }
            });
}
function save_academic_edit(){
    var result = {
                'myear': $("#year_matric").val(),
                'mroll': $("#rollno_matric").val(),
                'mgrade':$('#grade_matric').val(),
                'mtotal': $("#total_matric").val(),
                'mmarks': $("#marks_matric").val(),
                'mmajor': $("#major_matric").val(),
                'mboard': $("#board_matric").val(),
                'iyear1': $("#year_inter1").val(),
                'iroll1': $("#rollno_inter1").val(),
                'itotal1': $("#total_inter1").val(),
                'imarks1': $("#marks_inter1").val(),
                'igrade1':$('#grade_inter1').val(),
                'imajor1': $("#major_inter1").val(),
                'iboard1': $("#board_inter1").val(),
                'iyear2': $("#year_inter2").val(),
                'iroll2': $("#rollno_inter2").val(),
                'itotal2': $("#total_inter2").val(),
                'imarks2': $("#marks_inter2").val(),
                'igrade2':$('#grade_inter2').val(),
                'imajor2': $("#major_inter2").val(),
                'iboard2': $("#board_inter2").val()
                    };
            $.ajax({
            url: 'printchallan/save_edit_ainfo',
            method: 'POST',
            data: result,
            async: false,
            success: function (data) {
                
                location.reload();
            }
            });
}
function save_edit_pinfo()
{
    var result = {
                'name': $("#fullname").val(),
                'dob': $("#dob").val(),
                'gender': $("#gender").val(),
                'cnic': $("#cnic1").val(),
                'fname': $("#fname").val(),
                'fcnic': $("#fcnic1").val(),
                'district': $("#district").val(),
                'phoneno': $("#phone_no").val(),
                'mobileno': $("#mobile_no").val(),
                'email': $("#email").val(),
                'address': $("#address").val()
                };
           $.ajax({
            url: 'printchallan/save_edit_pinfo',
            method: 'POST',
            data: result,
            async: false,
            success: function (data) {
                
                location.reload();
            }
            });
                
}

function send_mail()
{
    var result = {
                'name': $("#name_form").val(),
                'email': $("#email_form").val(),
                'subject':$('#subject_form').val(),
                'message': $("#message_form").val()
                };
             $("#wrong_name").hide();
             $("#wrong_mail").hide();
             $("#wrong_subject").hide();
             $("#wrong_message").hide();
    if(result['name'] != '' && result['email'] != '' && result['subject'] != '' && result['message'] != '')
    {
             $("#wrong_name").hide();
             $("#wrong_mail").hide();
             $("#wrong_subject").hide();
             $("#wrong_message").hide();
       
        $.ajax({
            url: 'adminmail/send_mail',
            method: 'POST',
            data: result,
            async: false,
            success: function (data) {
                    $("#m_head").html("Success!!!");
                    $("#m_body").html('Your response has been submitted. We will respond you soon... Thank you');
                    $("#myModal").modal("show");
                    $("#btn_suc").hide();
                    return false;
                   
            }
        });
     }else{
         if(result['name'] == '')
             $("#wrong_name").show();
         else if(result['email'] == '')
             $("#wrong_mail").show();
         else if(result['subject'] == '')
             $("#wrong_subject").show();
         else if(result['message'] == '')
             $("#wrong_message").show();
         return false;
     }
}

function Names(field) {
    var key = window.event.charCode;
    key = String.fromCharCode(key);
    if ((!key.match(/[a-z]/i) && key!=' ' && !key.match(/[A-Z]/i))){
		var index="#"+field;
	    $(index).show();
		event.returnValue = false;
    }
	else
	{
		var index="#"+field;
	  $(index).hide();	
	}
	
}
function Anything(field)
{
   var index="#"+field;
    $(index).hide(); 
}
function AlphaNumeric(field) {
    var key = window.event.charCode;
    key = String.fromCharCode(key);
    if ((!key.match(/[a-z]/i) && key!='_' && !key.match(/[0-9]/i))){
		var index="#"+field;
	    $(index).show();
		event.returnValue = false;
    }
	else
	{
		var index="#"+field;
	   $(index).hide();	
	}
	
}

function Numeric(field) {
    var key = window.event.charCode;
    key = String.fromCharCode(key);
    if (!key.match(/[0-9]/i)){
		var index="#"+field;
	    $(index).show();
		event.returnValue = false;
    }
	else
	{
		var index="#"+field;
	    $(index).hide();	
	}
	
}
function Names(field) {
    var key = window.event.charCode;
    key = String.fromCharCode(key);
    if ((!key.match(/[a-z]/i) && key!=' ' && !key.match(/[A-Z]/i))){
		var index="#"+field;
	    $(index).show();
		event.returnValue = false;
    }
	else
	{
		var index="#"+field;
	  $(index).hide();	
	}
	
}

function Alpha(field) {
    var key = window.event.charCode;
    key = String.fromCharCode(key);
    if ((!key.match(/[a-z]/i) && !key.match(/[A-Z]/i))){
      var index="#"+field;
	  $(index).show();
	  event.returnValue = false;
    }
	else
	{
		var index="#"+field;
	  $(index).hide();	
	}
	
}
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#profile_pic').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
 var file_data = $('#img_upload').prop('files')[0];   
                    var form_data = new FormData();                  
                    form_data.append('file', file_data);           
                    $.ajax({
                              url: 'admissionfor/store_pic', // point to server-side PHP script 
                                dataType: 'text',  // what to expect back from the PHP script, if anything
                                cache: false,
                                contentType: false,
                                processData: false,
                                data: form_data,                         
                                type: 'post',
                                success: function(php_script_response){
                                   // alert(php_script_response); // display response from the PHP script, if any
                                }
                     });

}

$("#img_upload").change(function(){
        readURL(this);
    });
$("#bstime").change(function(){
     window.location.replace("bstimetable");
});
$("#mstime").change(function(){
     window.location.replace("mstimetable");
});
function  change_combination(loc){
    //$("#"+loc+"2").val = $("#"+loc+"1").val();
    $("#"+loc+"2").val($("#"+loc+"1").val()).prop('selected', true);
}