

        const app = document.getElementById('root');


        const container = document.createElement('div');
        container.setAttribute('class', 'container');

        const table = document.createElement('table');
        container.setAttribute('class', 'table');

        //app.appendChild(logo);
        app.appendChild(container);
        app.appendChild(table);

        var request = new XMLHttpRequest();
        request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/teacher', true);
        request.onload = function () {

            // Begin accessing JSON data here
            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                app.appendChild(container);
                app.appendChild(table);
                data.forEach(teacher => {
                    const card = document.createElement('thead');

                    const id = document.createElement('th');
                    id.textContent = teacher.id;
                    id.setAttribute('scope', 'col');

                    const name = document.createElement('th');
                    name.textContent = teacher.name;
                    name.setAttribute('scope', 'col');

                    const lastName = document.createElement('th');
                    lastName.textContent = teacher.lastName;
                    lastName.setAttribute('scope', 'col');

                    const phd = document.createElement('th');
                    phd.textContent = teacher.phd;
                    phd.setAttribute('scope', 'col');

                    container.appendChild(card);
                    card.appendChild(id);
                    card.appendChild(name);
                    card.appendChild(lastName);
                    card.appendChild(phd);

                });
            } else {
                const errorMessage = document.createElement('marquee');
                errorMessage.textContent = 'Não foi possivel realizar a ação';
                app.appendChild(errorMessage);
            }
        }

        request.send();


