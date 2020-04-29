const random = document.getElementById('random');
random.addEventListener('click', () => {
  //alert("Handler for .click() called.");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('http://www.boredapi.com/api/activity/', options)
    .then(res => res.json())
    .then(res => {
      var p = document.getElementById("myRandomData");
      appendData(res, p);

    })

    .catch(function (err) {
      console.log('error: ' + err);
    });
});

const type = document.getElementById('bytype');
type.addEventListener('click', () => {

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  const option = document.getElementById('section').value;

  const url = 'http://www.boredapi.com/api/activity?type=' + option;

  fetch(url, options)
    .then(res => res.json())
    .then(res => {
      var p = document.getElementById("myTypeData");
      appendData(res, p);

    })
    .catch(err => console.log(err));
});

const price = document.getElementById('bypricebutton');
price.addEventListener('click', () => {

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('http://www.boredapi.com/api/activity?price=0.0', options)
    .then(res => res.json())
    .then(res => {
      var p = document.getElementById("byprice");
      appendData(res, p);

    })
    .catch(err => console.log(err));
});

function appendData(data, p) {

  p.innerHTML = "<b>" + 'Activity: ' + "</b>" + data.activity + "<br>" +
    "<b>" + 'Type: ' + "</b>" + data.type; + "<br>" +
      "<b>" + 'Participants: ' + "</b>" + data.participants;

}