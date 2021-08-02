deleteUser = (event) => {

    var username =$('#username').val(); 

    $.ajax({
        url : "http://localhost:5000/delete",
        method : "POST",
        data : {
            username : username
        },
        success : function (result) {
            if(result.status === 'ok'){
                alert("Successfully Deleted");
                window.location.replace('/home')
            }
            else{
                alert(result.status);
            }
        }
    })
}