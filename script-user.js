
// Create a request variable and assign a new XMLHttpRequest object to it.
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const table = document.createElement('table');
container.setAttribute('class', 'table');

//app.appendChild(logo);
app.appendChild(container);
app.appendChild(table);

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user', true)

request.onload = function () {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(user => {
            const card = document.createElement('thead');

            const id = document.createElement('th');
            id.textContent = user.id;
            id.setAttribute('scope', 'col');

            const name = document.createElement('th');
            name.textContent = user.name;
            name.setAttribute('scope', 'col');

            const lastName = document.createElement('th');
            lastName.textContent = user.lastName;
            lastName.setAttribute('scope', 'col');

            const profile = document.createElement('th');
            profile.textContent = user.profile;
            profile.setAttribute('scope', 'col');

            container.appendChild(card);
            card.appendChild(id);
            card.appendChild(name);
            card.appendChild(lastName);
            card.appendChild(profile);

        })
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }

}
// Send request
request.send()

// function postUser(){
//     var url = 'https://traineeprominas-lrm-sandbox.herokuapp.com/api/v1/user';
//
//     var data = {};
//     data.name = document.getElementById("name").value;
//     data.lastName  = document.getElementById("lastName").value;
//     if(document.getElementById("profile1").checked){
//         data.profile = document.getElementById("profile1").value;
//     }else{
//         data.profile = document.getElementById("profile2").value;
//     }
//     var json = JSON.stringify(data);
//
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//     xhr.send(json);
//     xhr.onload = function () {
//         alert(xhr.responseText);
//         if (xhr.readyState === 4 && xhr.status === "200") {
//             console.table(users);
//         } else {
//             console.error(users);
//         }
//     }
// }





