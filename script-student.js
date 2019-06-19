$('#selection').ready(
    function(){
        text = "<select id='course' class='selectpicker' data-live-search='true'>"
        var request = new XMLHttpRequest();
        request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course', true);
        request.onload = function () {
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {

                data.forEach(course => {
                    text+= "<option value='"+course.id+"'>"+course.name+"</option>";
                });
                text+="</select>";

                document.getElementById("selection").innerHTML += text;
            }

        }
        request.send();
    }
);

function postStudent(){
    var url = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/student";

    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName  = document.getElementById("lastName").value;
    data.age  = document.getElementById("age").value;
    data.course  = document.getElementById("course").value;

    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(students);
        } else {
            console.error(students);
        }
    }
}

function putStudent(){
    var url = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/student";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.lastName  = document.getElementById("lastName").value;
    data.age  = document.getElementById("age").value;
    data.course  = document.getElementById("course").value;

    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var student = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(student);
            alert(student);
        } else {
            console.error(student);
            alert(student);
        }
    }
    xhr.send(json);
}

function getStudent(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/student";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var student = JSON.parse(this.response);
        if (xhr.readyState == 4 && xhr.status == "200") {


            document.getElementById('push').setAttribute('value', student.id);
            document.getElementById("name").value = student.name;
            document.getElementById("lastName").value = student.lastName;
            document.getElementById("age").value = student.age;
            document.getElementById("course").value = student.course.id;

        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Ocorreu um erro no sistema';
            alert(errorMessage);
        }
    }
    xhr.send();
}

function deleteStudent(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/student";
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


$('select').selectpicker();


