
loginuser = (event) => {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url : " http://localhost:5000/login",
        method : "POST",
        data : {
            username : username,
            password : password
        },
        success : result => {
            if(result.status === 'ok'){
                localStorage.setItem("token", result.data);
                alert("Succesfully Login");
                window.location.replace('/home');
            }
            else{
                alert(result.msg);
            }
        }
    })
}