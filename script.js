const myButton = document.getElementById('send');

myButton.addEventListener('click', function(e) {
  e.preventDefault(); // запобігає переходу на іншу сторінку
  // додатковий код можна написати тут
});


function buildChart() {
  let b = document.getElementById('fourthButton');
  b.style.display = 'block'  

  let ctx = document.getElementById('myChart');
  ctx.style.display = 'block';
  let capt = document.getElementById('caption').innerHTML;
  if(capt === "Новачок") {
    let myChart = new Chart(ctx.getContext('2d'), {
              type: 'bar',
              data: {
                  labels: ['1 питання', '2 питання', '3 питання', '4 питання'],
                  datasets: [{
                      label: 'Бали',
                      data: [
                        parseInt(document.querySelector('input[name="q1"]:checked').value),
                        parseInt(document.querySelector('input[name="q2"]:checked').value),
                        parseInt(document.querySelector('input[name="q3"]:checked').value),
                        parseInt(document.querySelector('input[name="q4"]:checked').value)
                      ],
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
          });
  } else {
  let myChart = new Chart(ctx.getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['1 питання', '2 питання', '3 питання'],
          datasets: [{
              label: 'Бали',
              data: [
                parseInt(document.querySelector('input[name="q1"]:checked').value),
                parseInt(document.querySelector('input[name="q2"]:checked').value),
                parseInt(document.querySelector('input[name="q3"]:checked').value)
              ],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}
}

function calculateScore() {
    let q1 = parseInt(document.querySelector('input[name="q1"]:checked').value)
    let q2 = parseInt(document.querySelector('input[name="q2"]:checked').value)
    let q3 = parseInt(document.querySelector('input[name="q3"]:checked').value)

    let capt = document.getElementById('caption').innerHTML;
    switch (capt) {
        case "Новачок": 
            let q4 = parseInt(document.querySelector('input[name="q4"]:checked').value)
            let noviceScore = parseInt(q1 + q2 + q3 + q4);
            localStorage.setItem("myKey_1", JSON.stringify(noviceScore));
            break;
        case "Твердий початківець": 
            let begginerScore = parseInt(q1 + q2 + q3);
            localStorage.setItem("myKey_2", JSON.stringify(begginerScore));
            break; 
        case "Компетентний": 
            let competentScore = parseInt(q1 + q2 + q3);
            localStorage.setItem("myKey_3", JSON.stringify(competentScore));
            break;
        case "Досвідчений": 
            let proficientScore = parseInt(q1 + q2 + q3);
            localStorage.setItem("myKey_4", JSON.stringify(proficientScore));
            break;
        case "Експерт": 
            let expertScore = parseInt(q1 + q2 + q3);
            localStorage.setItem("myKey_5", JSON.stringify(expertScore));
            break;
    }
}