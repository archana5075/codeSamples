
$(document).ready(function(){

$('#buttonId').click(function(){
var username=$('#userid').val();
var password=$('#passid').val();

if(username=="")
{
$('#dis').slideDown().html("<span id='error'>Please type Apple ID</span>");
return false;
}

if(IsEmail(username)==false){
	$('#dis').slideDown().html("<span id='error'>Example:John@example.com </span>");
    return false;
}

if(password=="")
{
$('#disPwd').slideDown().html('<span id="error">Please type Password</span>');
return false;
}

});
});

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
       return false;
    }else{
       return true;
    }
  }