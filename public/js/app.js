
// get the html element 
const random = document.getElementById('random');
random.addEventListener('click', () => { // when button is clicked, it triggers the request
  
  // prepare the request
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
    //use fetch to get connection with the api's main entry point
  fetch('http://www.boredapi.com/api/activity/', options)
    .then(res => res.json())
    .then(res => {
      var p = document.getElementById("myRandomData");
      appendData(res, p); // appends the activity return into the component

    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
});

// get the element from html by its id
const type = document.getElementById('bytype');
type.addEventListener('click', () => { // when button is clicked, it triggers the request

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
    // get the type of activity from the dropdown
  const option = document.getElementById('section').value;
    // add the option selected to the url 
  const url = 'http://www.boredapi.com/api/activity?type=' + option;
    // sends request to the type endpoint
  fetch(url, options)
    .then(res => res.json())
    .then(res => {
      //gets the element which will contain que object returned
      var p = document.getElementById("myTypeData");
      appendData(res, p); // append it to the component

    })
    .catch(err => console.log(err));
});

// get the element clicked from the html
const price = document.getElementById('bypricebutton');
price.addEventListener('click', () => { 

//prepare the request
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }
    // fetch specific free cost activities api
  fetch('http://www.boredapi.com/api/activity?price=0.0', options)
    .then(res => res.json())
    .then(res => {
      // gets the element that will display the response
      var p = document.getElementById("byprice");
      appendData(res, p); // apend the data to the element

    })
    .catch(err => console.log(err));
});

// function to append the data got from the api and display it to the screen
function appendData(data, p) {

  p.innerHTML = "<b>" + 'Activity: ' + "</b>" + data.activity + "<br>" +
    "<b>" + 'Type: ' + "</b>" + data.type; + "<br>" +
      "<b>" + 'Participants: ' + "</b>" + data.participants;

}