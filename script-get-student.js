const app = document.getElementById('root');

const container = document.createElement('table');
container.setAttribute('class', 'table');

const table = document.createElement('table');
container.setAttribute('class', 'table');

//app.appendChild(logo);
app.appendChild(container);
app.appendChild(table);

var request = new XMLHttpRequest();
request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/student', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        app.appendChild(container);
        app.appendChild(table);
        data.forEach(student => {
            const card = document.createElement('thead');

            const id = document.createElement('th');
            id.textContent = student.id;
            id.setAttribute('scope', 'col');

            const name = document.createElement('th');
            name.textContent = student.name;
            name.setAttribute('scope', 'col');

            const age = document.createElement('th');
            age.textContent = student.age;
            age.setAttribute('scope', 'col');

            const lastName = document.createElement('th');
            lastName.textContent = student.lastName;
            lastName.setAttribute('scope', 'col');

            const course = document.createElement('th');
            course.textContent = student.course.name;
            course.setAttribute('scope', 'col');



            container.appendChild(card);
            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(lastName);
            card.appendChild(age);
            card.appendChild(course);


        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Não foi possivel realizar a ação';
        app.appendChild(errorMessage);
    }
}

request.send();
