
$(function () {
    $('#submit').click(function () {
        
        let usernamevalue =  $('#username').val()
        console.log(usernamevalue)
        if(!usernamevalue){
        $('#username').css({
            borderColor:'red',
            borderWidth:'3px'
        })
    }


        let emailvalue =  $('#Email').val()
        console.log(emailvalue)
        if(!emailvalue){
        $('#Email').css({
            borderColor:'red',
            borderWidth:'3px'
        })
    }


        let passwordvalue =  $('#password').val()
        console.log(passwordvalue)
        if(!passwordvalue){
        $('#password').css({
            borderColor:'red',
            borderWidth:'3px'
        })
    }


    let confirmpasswordvalue =  $('#confirmpassword').val()
    console.log(confirmpasswordvalue)
    if(!confirmpasswordvalue){
    $('#confirmpassword').css({
        borderColor:'red',
        borderWidth:'3px'
    })
}

    })

    $('.nav-link').click(function () {
        alert('it goes')
    })
        
    }
)