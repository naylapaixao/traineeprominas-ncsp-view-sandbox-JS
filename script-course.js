$('#root').ready(function(){
    text = "<select id='teacher' class='selectpicker' multiple='multiple' data-live-search='true'>"
    var request = new XMLHttpRequest();
    request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {

            data.forEach(teacher => {
                text+= "<option value='"+teacher.id+"'>"+teacher.name+"</option>";
            });
            text+="</select>";

            document.getElementById("selection").innerHTML += text;
        }

    }
    request.send();
});

function postCourse(){
    var url = 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course';

    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    data.city = document.getElementById("city").value;
    data.teachers = $('#teacher').val();
    var json = JSON.stringify(data);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
    xhr.onload = function () {
        alert(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(courses);
        } else {
            console.error(courses);
        }
    }
}

function getCourse(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course";
    var xhr  = new XMLHttpRequest()
    id = document.getElementById("id").value;
    xhr.open('GET', url+'/'+id, true)
    xhr.onload = function () {
        var course = JSON.parse(this.response);
        if (xhr.readyState == 4 && xhr.status == "200") {

            document.getElementById('push').setAttribute('value', course.id);


            document.getElementById("name").value = course.name
            document.getElementById("period").value = course.period
            const name = document.createElement('th');
            name.textContent = course.name;
            document.getElementById("city").value = course.city;
            teacherInfo = course.teacher.map(value => teacherInfo = value.id)
            var select = document.getElementById( 'teacher' );

            for ( var i = 0, l = select.options.length, o; i < l; i++ )
            {
                o = select.options[i];
                if ( teacherInfo.indexOf( parseInt(o.value) ) != -1 ){
                    o.selected = true;
                }
            }


        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = 'Ocorreu um erro no sistema';
            alert(errorMessage);
        }
    }
    xhr.send(null);
}

function putCourse(){
    var url = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course";
    var id = document.getElementById("push").value
    var data = {};
    data.name = document.getElementById("name").value;
    data.period  = document.getElementById("period").value;
    data.city = document.getElementById("city").value;
    data.teachers = $('#teacher').val();
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url+'/'+id, true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onload = function () {
        alert(xhr.responseText);
        var course = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(course);
            alert(course);
        } else {
            console.error(course);
            alert(course);
        }
    }
    xhr.send(json);
}

function deleteCourse(){
    var url  = "https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course";
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