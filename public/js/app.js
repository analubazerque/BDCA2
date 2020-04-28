// $(document).ready(()=>{
//   console.log("here")
//   $( "#Recreational" ).click(function() {
//     alert( "Handler for .click() called." );
//   });



//   });

const random = document.getElementById('random');
random.addEventListener('click', () => {
  alert("Handler for .click() called.");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('http://www.boredapi.com/api/activity/', options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
});

const type = document.getElementById('bytype');
type.addEventListener('click', () => {
  alert("Handler for .click() called.");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('http://www.boredapi.com/api/activity/', options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
});

const price = document.getElementById('byprice');
price.addEventListener('click', () => {
  alert("Handler for .click() called.");

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }

  fetch('http://www.boredapi.com/api/activity/', options)
    .then(res => res.json())
    .then(res => {
      console.log(res)
    })
    .catch(err => console.log(err));
});