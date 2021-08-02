getUser = () => {
    var token = localStorage.getItem("token");
    var base64Url = token.split('.')[1];
    var decodedValue = JSON.parse(window.atob(base64Url));
    document.getElementById('username').innerHTML = decodedValue.username;
    console.log(decodedValue.username);
}

updateUser = () =>{
    var username = $('#username').val(); 
    var password = $('#password').val();
    var name = $('#name').val();
    $.ajax({
        url : "http://localhost:5000/update",
        method : "POST",
        data : {
            username : username,
            password :password,
            name :name
        },
        success : function (result) {
            if(result.status == 'ok'){
                alert("Successfully Deleted");
                window.location.replace('/home');
            }
            else{
                alert(result.status);
            }
        }

    })

}