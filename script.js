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
    function Question(question, options, answer) {
        this.question = question;
        this.options = options;
        this.answer = answer;
    }

    let quiz = [
        new Question(
            "What is the purpose of the `<html>` tag in HTML?",
            ["To define a paragraph", "To define a hyperlink", "To define the document structure", "To define a list"],
            "To define the document structure"
        ),
        new Question(
            "What is the CSS selector to target all elements with the class 'header'?",
            [".header", "#header", "[header]", "header"],
            ".header"
        ),
        new Question(
            "What is the JavaScript syntax to alert 'Hello World'?",
            ["`alert('Hello World');`", "`console.log('Hello World');`", "`document.write('Hello World');`", "`window.alert('Hello World');`"],
            "`alert('Hello World');`"
        ),
        new Question(
            "What is the HTML tag for a hyperlink?",
            ["`<a>`", "`<link>`", "`<button>`", "`<img>`"],
            "`<a>`"
        ),
        new Question(
            "What is the CSS property to change the text color?",
            ["`background-color`", "`color`", "`font-size`", "`text-align`"],
            "`color`"
        ),
        new Question(
            "What is the JavaScript method to get an element by its ID?",
            ["`getElementbyId()`", "`getElementById()`", "`getElementsByName()`", "`getElementsByTagName()`"],
            "`getElementById()`"
        ),
        new Question(
            "What is the HTML attribute to specify the image source?",
            ["`src`", "`alt`", "`title`", "`href`"],
            "`src`"
        ),
        new Question(
            "What is the CSS unit for pixel measurements?",
            ["`%`", "`px`", "`em`", "`pt`"],
            "`px`"
        ),
        new Question(
            "What is the JavaScript keyword for a variable declaration?",
            ["`let`", "`const`", "`var`", "`function`"],
            "`let`"
        ),
        new Question(
            "What is the HTML tag for a list item?",
            ["`<li>`", "`<ul>`", "`<ol>`", "`<dl>`"],
            "`<li>`"
        )
    ];

    mainScreen.innerHTML = `
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-4 letter-spacing">
    <h1 class="h1">Welcome<span class ="user-name"> ${firstName.toUpperCase()} ${lastName.toUpperCase()}</span> to Quiz App</h1>
</div>
    `
    box.innerHTML = `
    <div class="col  d-flex flex-column">
    <div class="quiz-box pt-4 ps-5 ms-5 mb-5">
        <p class="fs-4">Q ) HTML stands for  ?</p>
        <div class="option">
            <input type="radio" id="option1" name="html" value="HyperText Markup Language">
            <label for="option1">HyperText Markup Language</label><br>
            <input type="radio" id="option2" name="html" value="HyperText Markdown Language">
            <label for="option2">HyperText Markdown Language</label><br>
            <input type="radio" id="option3" name="html" value="Hyperlink and Text Markup Language">
            <label for="option3">Hyperlink and Text Markup Language</label><br>
            <input type="radio" id="option4" name="html" value="Home Tool Markup Language">
            <label for="option4">Home Tool Markup Language</label><br>
        </div>
    </div>
</div>

    `
});
