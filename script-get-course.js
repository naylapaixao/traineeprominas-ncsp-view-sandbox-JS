const app = document.getElementById('root');


const container = document.createElement('table');
container.setAttribute('class', 'container');

const table = document.createElement('table');
container.setAttribute('class', 'table');

//app.appendChild(logo);
app.appendChild(container);
app.appendChild(table);

var request = new XMLHttpRequest();
request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/course', true);
request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        app.appendChild(container);
        app.appendChild(table);
        data.forEach(course => {
            const card = document.createElement('thead');

            const id = document.createElement('th');
            id.textContent = course.id;
            id.setAttribute('scope', 'col');

            const name = document.createElement('th');
            name.textContent = course.name;
            name.setAttribute('scope', 'col');

            const period = document.createElement('th');
            period.textContent = course.period;
            period.setAttribute('scope', 'col');

            const city = document.createElement('th');
            city.textContent = course.city;
            city.setAttribute('scope', 'col');



            let i = 0;
            teacherInfo = [];
            course.teachers.forEach(teachers => {

                teacherInfo[i] = document.createElement('th');
                teacherInfo[i].textContent = teachers.name;
                teacherInfo[i].setAttribute('scope', 'col');
                i++;
            });


            container.appendChild(card);
            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(period);
            card.appendChild(city);
            teacherInfo.forEach(element => {
                card.appendChild(element);
            });

        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = 'Não foi possivel realizar a ação';
        app.appendChild(errorMessage);
    }
}

request.send();


