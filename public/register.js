
registeruser = (event) =>  {
    var name = $('#name').val();
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url : "http://localhost:5000/register" ,
        method : "POST", 
        data : {
            name : name,
            username : username,
            password : password
        },
        success : (result) =>{
            if(result.status == 'ok'){
                alert("Succesfully Registered");
                window.location.replace('/login');
            }
            else{
                alert("Error");
            }
        }

    })
}