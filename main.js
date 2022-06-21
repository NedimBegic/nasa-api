document.querySelector('button').addEventListener('click', getFetch)

fetch('https://api.nasa.gov/planetary/apod?api_key=lQsnXRzT1XtVPCo60GMroq4ilhsXwBzIo5dJAXeK')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#picture').src = data.hdurl;
        document.querySelector('#description').innerText = data.explanation;


      })
      .catch(err => {
          console.log(`error ${err}`)
      });


function getFetch(){
  const choice = document.querySelector('input').value;
  console.log(choice)
  const url = 'https://api.nasa.gov/planetary/apod?api_key=lQsnXRzT1XtVPCo60GMroq4ilhsXwBzIo5dJAXeK&date='+choice;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#picture').src = data.hdurl;
        document.querySelector('#description').innerText = data.explanation;
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}