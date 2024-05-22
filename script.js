let submit = document.getElementById('submitButton');
submit.addEventListener('click', (event) => {
    event.preventDefault()
    let firstName = document.getElementById('name').value;
    let lastName = document.getElementById('Lastname').value;
    let email = document.getElementById('email').value;
    console.log(email);
    let registerForm = document.getElementById('registerForm');
    registerForm.style.display = 'none';
    let mainScreen = document.getElementById('mainHome');
    let box = document.getElementById('boxes');

    mainScreen.innerHTML = `
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-4 letter-spacing">
    <h1 class="h1">Welcome ${firstName.toUpperCase()} ${lastName.toUpperCase()} to Quiz App</h1>
</div>
    `
    box.innerHTML = `
    <div class="col  d-flex flex-column">
    <div class="quiz-box ms-5 mb-5">

    </div>
    <div class="quiz-box ms-5 mb-5">

    </div>
    <div class="quiz-box ms-5 mb-5">

    </div>
</div>

    `
});
