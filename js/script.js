function submitForm() {
 let form = document.forms['contact-form'];
  let userName = form['user-name'].value;
  let userEmail = form['user-email'].value;
  let userMajor = form['user-major'].value;
  console.log(form);
  console.log(userName);
  console.log(userEmail); 
  console.log(userMajor);
  if (userName == '') alert('Nama Wajib Diisi');
  if (userEmail == '') alert('Email Wajib Diisi');
  if (userMajor == '') alert('Major Wajib Diisi');
  alert("Form telah dikirim");
}

document.getElementById('send-button').addEventListener('click', () => submitForm());



var listPict = document.getElementsByClassName('slider')[0].children;
var old = listPict.length - 1;
var current = 0;
function loop() {
    listPict[current].setAttribute('class', 'show');
    listPict[old].setAttribute('class', 'hide');
    old = current;
    current++;
    if (current === listPict.length)
        current = 0;
    setTimeout(loop, 3000);
}

loop();