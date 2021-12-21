//jshint esversion:6

let operation = document.querySelectorAll('.n');
let values = document.querySelectorAll('.v');
let equalto = document.querySelector('.equal');

operation.forEach(function (oper) {
  oper.addEventListener('click', function(event) {
    switch(event.target.innerHTML){
      case 'C':
        let input = document.querySelector('.Input-value');
        input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length-1);
        if(input.innerHTML == ''){
          if(document.querySelector('.output-result').innerHTML == '0' || document.querySelector('.output-result').innerHTML == ''){
            document.querySelector('.output-result').innerHTML = '';
            input.innerHTML = '0';
          }
          else{
            input.innerHTML = document.querySelector('.output-result').innerHTML;
            document.querySelector('.output-result').innerHTML = '';
          }
        }
        break;
      case 'AC':
        document.querySelector('.Input-value').innerHTML = '0';
        document.querySelector('.output-result').innerHTML = '';
    }
  });
});

values.forEach(function(value) {
  let k = document.querySelector('.Input-value');
  value.addEventListener('click', function(event) {
    if(k.innerHTML == '0' || k.innerHTML == '00'){
      if(event.target.innerHTML == '0' || event.target.innerHTML == '00')
        k.innerHTML = '0';
      else
        k.innerHTML = event.target.innerHTML;
    }

    else
      document.querySelector('.Input-value').innerHTML += event.target.innerHTML;
  });
});

equalto.addEventListener('click', function(event) {
  let result = document.querySelector('.output-result');
  if(result.innerHTML == '0' || result.innerHTML == ''){
    if(document.querySelector('.Input-value').innerHTML[0] == '%' || document.querySelector('.Input-value').innerHTML[0] == '/'  || document.querySelector('.Input-value').innerHTML[0] == '*'){
      alert("Not a Proper Value");
    }
    else
      result.innerHTML = math.evaluate(document.querySelector('.Input-value').innerHTML);
  }
  else
    result.innerHTML = math.evaluate(result.innerHTML + document.querySelector('.Input-value').innerHTML);
  document.querySelector('.Input-value').innerHTML = '0';
});
