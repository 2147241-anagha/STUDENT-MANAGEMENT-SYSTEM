function addCookie()
{   

    var login = document.getElementById("username").value
    var pass = document.getElementById("password").value
    if((login.trim() != "")  && (pass.trim() != ""))
    {
        document.cookie = "user=" + login + ";expires=Sun, 13 Feb 2022 00:00:00 UTC;"
        document.cookie = "pass=" + pass + ";expires=Sun, 13 Feb 2022 00:00:00 UTC;"
        
        alert("Cookie Added")
        window.location.reload()
        store();
       
    }
    else
    {
        alert("Form Incomplete")
    }
}

function store(){ //stores items in the localStorage
    var phone = document.getElementById('phone number').value;
    var email = document.getElementById('email').value;
    //var user = document.getElementById('user').value;
    var key = "student"
  
    const localStore = {
        phone: phone,
        email: email,
    }
  
    window.localStorage.setItem(key,JSON.stringify(localStore));  
    alert("local storage updated")    
    
  
  }