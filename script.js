function postUser(){
    var url = 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user';

    var data = {};
    data.name = document.getElementById("name").value;
    console.log(name);
    data.lastName  = document.getElementById("lastName").value;
    console.log(lastName);
    if(document.getElementById("profile1").checked){
        data.profile = document.getElementById("profile1").value;
    }else{
        data.profile = document.getElementById("profile2").value;
    }
    var json = JSON.stringify(data);
    console.log(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.status == "200") {
            console.log('oiiii');
            console.table(users);
        } else {
            console.error(users);
        }
    }
}

function deleteUser(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user";
    var xhr = new XMLHttpRequest();
    id = document.getElementById("id").value;
    xhr.open("DELETE", url+"/"+id, true);
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
            alert(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
}

// function removeElement(elementId) {
//     // Removes an element from the document
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }

function putUser(){
    var url = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName  = document.getElementById("lastName").value;
    if(document.getElementById("profile1").checked){
        data.profile = document.getElementById("profile1").value;
    }else{
        data.profile = document.getElementById("profile2").value;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    console.log(json);
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users);
            alert(users);
        } else {
            console.error(users);
            alert(users);
        }
    }
xhr.send(json);
}

function getUser(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
	    if (xhr.readyState == 4 && xhr.status == "200") {
		    user = data;
            document.getElementById('push').setAttribute('value', user.id);


            document.getElementById("name").value = user.name
            document.getElementById("lastName").value = user.lastName
            const name = document.createElement('th');
            name.textContent = user.name;
            
            if(user.profile == "admin"){
                document.getElementById("profile1").checked = true;
                document.getElementById("profile2").checked = false;
            }else{
                document.getElementById("profile1").checked = false;
                data.profile = document.getElementById("profile2").checked = true;
            }
            } else {
              const errorMessage = document.createElement('marquee');
              errorMessage.textContent = 'Ocorreu um erro no sistema';
              app.appendChild(errorMessage);
            }
    }
    xhr.send(null);
}