
// Default tab
$(".tab").css("display", "none");
$("#tab-1").css("display", "block");

function run(hideTab, showTab){
  if(hideTab < showTab){ // If not press previous button
    // Validation if press next button

var error_email = '';
var error_dd = '';
var error_password = '';
var filter = /^[\u0621-\u064A]+$/;
var ali = /^[A-Z ]+$/;


if($.trim($('#email').val()).length == 0)
{
error_email = 'Email is required';
$('#error_email').text(error_email);
$('#email').addClass('has-error');
}
else
{
if (!filter.test($('#email').val()))
{
error_email = 'Invalid Email';
$('#error_email').text(error_email);
$('#email').addClass('has-error');
}
else
{
error_email = '';
$('#error_email').text(error_email);
$('#email').removeClass('has-error');
}
}

//بليلبي

if($.trim($('#dd').val()).length == 0)
{
error_dd = 'ادخل الاسم ممن فضلك';
$('#error_dd').text(error_dd);
$('#dd').addClass('has-error');
}
else
{
if (!ali.test($('#dd').val()))
{
error_dd = 'ادخل الاسم با العربي لو سمحت';
$('#error_dd').text(error_dd);
$('#dd').addClass('has-error');
}
else
{
error_dd = '';
$('#error_dd').text(error_dd);
$('#email').removeClass('has-error');
}
}
//يبيسسي

if($.trim($('#password').val()).length == 0)
{
error_password = 'Password is required';
$('#error_password').text(error_password);
$('#password').addClass('has-error');
}
else
{
error_password = '';
$('#error_password').text(error_password);
$('#password').removeClass('has-error');
}

if(error_email != '' || error_dd != ''|| error_password != '')
{
return false;
}
    var currentTab = 0;
    x = $('#tab-'+hideTab);
    y = $(x).find("input")
    for (i = 0; i < y.length; i++){
      if (y[i].value == ""){
        return false;
      }
    }
  }

  // Progress bar
  for (i = 1; i < showTab; i++){
    $("#step-"+i).css("opacity", "1");
  }

  // Switch tab
  $("#tab-"+hideTab).css("display", "none");
  $("#tab-"+showTab).css("display", "block");
  $("input").css("background", "#fff");
}
