$('#form').submit(function (event) {
  var name = $('#inputNome').val();
  var email = $('#inputEmail').val();

  event.preventDefault();
  $.ajax({
    url: 'https://outlook.us18.list-manage.com/subscribe/post',
    method: 'POST',
    data: { u: 'ce4f57f3871709a26713b63e9', id: 'c4029c7854', EMAIL: email, NAME: name },
    dataType: 'jsonp'
  });
});

$('#form').submit(function (event) {
  alert("Dados enviados com sucesso"),
    window.location.href = "https://web.facebook.com/";
});


//Começo da programação do contador
function _getDateEnd($element) {
  var date = new Date($element.getAttribute('data-end'));

  return !isNaN(date) ? date : new Date();
}

function _timePad(n) {
  return n < 10 ? '0' + n : n;
}

function _timeLeft(now, end) {
  if (now <= end) {
    var seconds = parseInt((end - now) / 1000, 10),
      minutes = parseInt(seconds / 60, 10),
      hours = parseInt(minutes / 60, 10),
      days = parseInt(hours / 24, 10),
      left = '';

    seconds = seconds - (minutes * 60);
    minutes = minutes - (hours * 60);
    hours = hours - (days * 24);

    left += (days && days > 1) ? days + ' dias, ' : (days === 1 ? '1 dia, ' : '');
    left += (toString(hours).length) ? hours + ' horas, ' : '';
    left += (toString(minutes).length) ? _timePad(minutes) + ' minutos e ' : '';
    left += _timePad(seconds) + ' segundos';

    if (days + hours + minutes + seconds > 0) {
      return left;
    } else {
      return 'Evento começou!!!!';
    }
  } else {
    return 'Evento começou!!!!';
  }
}

function timeCounter($elements) {
  $elements.forEach(function ($each) {
    $each.innerHTML = _timeLeft(new Date(), _getDateEnd($each));
  });
}
  //Fim da programação do contador

  // Começo da programação do popup

function onMouseOut(event) {
  if (event.clientY < 50) {
    document.removeEventListener("mouseout", onMouseOut);

    document.getElementById("popup").style.display = "block";
  }
}

document.addEventListener("mouseout", onMouseOut);

// Fim da programação do popup