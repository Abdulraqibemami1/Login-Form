
const nam = document.getElementById('name');
nam.addEventListener('blur', validateName);

const zipCode = document.getElementById('zipcode');
zipCode.addEventListener('blur', validZipCode);

const email = document.getElementById('email');
email.addEventListener('blur', validEmail);

const phone = document.getElementById('phone');
phone.addEventListener('blur', validPhone);


document.getElementById('sign-up').addEventListener('click', loadDate);
function loadDate() {
  emptyInput();
  removeAlert();

}
document.body.addEventListener('click', removeElement);


function removeAlert() {
  setTimeout(function () {
    document.getElementById('alert').remove(document.getElementById('alert'));
  }, 3000)
}

function removeElement(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    createAlert('alert', 'SuccessFully Removed ! ');
    removeAlert();
  }
}

function validateName() {
  let re = /^[A-Za-z0-9]{3,15}$/;
  if (!re.test(nam.value)) {
    document.getElementById('name').classList.add('is-invalid');
  } else {
    nam.classList.remove('is-invalid');
  }

}

function validZipCode() {
  console.log('welcom');
  let re = /^[0-9]{5}([ -][0-9]{4})?$/;
  if (!re.test(zipCode.value)) {
    document.getElementById('zipcode').classList.add('is-invalid');
  } else {
    zipCode.classList.remove('is-invalid');
  }


}

function validEmail() {
  let re = /^([a-zA-Z]{1,2})([a-zA-Z0-9]{4,20})@([a-zA-Z]{5,15})\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    document.getElementById('email').classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

}

function validPhone() {
  let re = /^(\(?[0-9]{2}\)?)([ .-]?[0-9]{4})([ .-]?[0-9]{4})$/;
  if (!re.test(phone.value)) {
    document.getElementById('phone').classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function createAlert(className, text) {
  const div = document.createElement('div');
  const row = document.querySelector('.col-sm-6');
  div.className = className;
  div.id = 'alert';
  div.appendChild(document.createTextNode(text));
  row.insertBefore(div, row.childNodes[0]);


}
function addToList() {
  const table = document.querySelector('.table');
  const row = document.createElement('tr');
  row.classList = 'table table-info';
  row.innerHTML = `<td>${nam.value}</td>
  <td>${zipCode.value}</td>
  <td>${email.value}</td>
  <td>${phone.value}</td>
  <td class = 'delete'  style = 'color : red; font-size: 30px; cursor: pointer;'>&times;</td>`;
  table.appendChild(row);
}

function emptyInput() {

  if (nam.value == '' || zipCode.value == '' || email.value == '' || phone.value == '') {
createAlert('alert','Please Fill All Fields');

  } else {
    addToList();
    createAlert('success', 'Successfully Added !');
    document.getElementById('name').value = '';
    document.getElementById('zipcode').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }

}












