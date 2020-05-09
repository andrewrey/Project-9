// ================== //
//  Form Validation   //
// ================== //

const submitForm = document.querySelector('.submit');


submitForm.addEventListener('click', (e)=>{

  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
  let message = document.querySelector('#message');
  name.classList.contains('error')? name.classList.remove('error'): name.classList = '';
  email.classList.contains('error')? email.classList.remove('error'): email.classList = '';
  message.classList.contains('error')? message.classList.remove('error'): message.classList = '';
  let formInputs = [name, email, message];
  formInputs.forEach(formInput => {
    if(formInput.value === ''){
      e.preventDefault();
      formInput.classList.add('error');
    }
  });
  if(formInputs.some(formInput => formInput.classList.contains('error'))){
    alert("Please fill in the missing information!");
  }
  if(!email.value.includes('@') && email.value !== ''){
    e.preventDefault();
    email.classList.add('error');
    alert('Please use a proper email address formatting.')
  }

});