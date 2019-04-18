function show(){
    var charac=document.getElementById('name').value
    if(charac==''){
        charac="Enter Detail"
        document.getElementById('label').innerHTML = charac
    }
    else{
        document.getElementById('name').value
    }

    var mail=document.getElementById('email').value
    if(mail==''){
        mail="Enter email-id"
        document.getElementById('label1').innerHTML=mail
    }
    else{
        document.getElementById('email').value
    }

    var numb=document.getElementById('date').value
    if(numb==''){
        numb="Enter date"
        document.getElementById('label2').innerHTML=numb
    }
    else{
        document.getElementById('date').value
    }

    var mobile=document.getElementById('mob').value
    if( mobile==''){
        mobile="Enter Mobile"
        document.getElementById('label3').innerHTML=mobile
    }
    else{
        document.getElementById('mob').value
    }

}

