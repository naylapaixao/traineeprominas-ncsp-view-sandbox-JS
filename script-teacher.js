function postTeacher(){
    var url = 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher';

    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName  = document.getElementById("lastName").value;
    if(document.getElementById("phd").checked){
        data.phd = true;
    }else{
        data.phd = false;
    }
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.log('oiiii');
            console.table(users);
        } else {
            console.error(users);
        }
    }
}

function putTeacher(){
    var url = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName  = document.getElementById("lastName").value;
    if(document.getElementById("phd").checked){
        data.phd = true;
    }else{
        data.phd = false;
    }
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var teacher = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(teacher);
            alert(teacher);
        } else {
            console.error(teacher);
            alert(teacher);
        }
    }
    xhr.send(json);
}

function getTeacher(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        if (xhr.readyState == 4 && xhr.status == "200") {
            teacher = data;
            document.getElementById('push').setAttribute('value', teacher.id);


            document.getElementById("name").value = teacher.name
            document.getElementById("lastName").value = teacher.lastName
            const name = document.createElement('th');
            name.textContent = teacher.name;

            if(teacher.phd == true){
                document.getElementById("phd").checked = true;
            }
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Ocorreu um erro no sistema';
            app.appendChild(errorMessage);
        }
    }
    xhr.send(null);
}

function deleteTeacher(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher";
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