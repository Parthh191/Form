const form=document.getElementById('contact-form')
const success=document.getElementById('form-success')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('check').checked;
  
    let getValue = true;
  
    if (firstname === '') {
      getValue = false;
      document.querySelector(".Firstname .alert").style.display = 'block';
      document.querySelector("#firstname").style.border = '2px solid red';
    } else {
      document.querySelector(".Firstname .alert").style.display = 'none';
      document.querySelector("#firstname").style.border = '2px solid #ccc';
    }
  
    if (lastname === '') {
      getValue = false;
      document.querySelector(".Lastname .alert").style.display = 'block';
      document.querySelector("#lastname").style.border = '2px solid red';
    } else {
      document.querySelector(".Lastname .alert").style.display = 'none';
      document.querySelector("#lastname").style.border = '2px solid #ccc';
    }
  
    if (!emailValidator(email)) {
      getValue = false;
      document.querySelector(".email .alert").style.display = 'block';
      document.querySelector("#email").style.border = '2px solid red';
    } else {
      document.querySelector(".email .alert").style.display = 'none';
      document.querySelector("#email").style.border = '2px solid #ccc';
    }
  
    if (!queryType) {
      getValue = false;
      document.querySelector(".query .alert").style.display = 'block';
      
    } else {
      document.querySelector(".query .alert").style.display = 'none';

    }
  
    if (message === '') {
      getValue = false;
      document.querySelector(".message .alert").style.display = 'block';
      document.querySelector("#message").style.border = '2px solid red';
    } else {
      document.querySelector(".message .alert").style.display = 'none';
      document.querySelector("#message").style.border = '2px solid #ccc';
    }
  
    if (!consent) {
      getValue = false;
      document.querySelector(".check .alert").style.display = 'block';
    } else {
      document.querySelector(".check .alert").style.display = 'none';
    }
  
    if (getValue) {
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'grid';
        form.reset()
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 3000);
      }
  });
  function emailValidator(email){
    const syntexOfEmail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return syntexOfEmail.test(email)
}
