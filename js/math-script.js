$(document).ready(function(){
function draw() {
    try {
      functionPlot({
        target: '#plot',
        yDomain: [-10, 10],
        xDomain: [-10, 10],
        data: [{
          fn: math.eval(document.getElementById('eq').value)
        }]
      });
    }
    catch (err) {
      console.log(err);
      alert(err);
    }
  }

  document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    draw();
  };

  draw();
  
  });