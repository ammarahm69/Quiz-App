let submit = document.getElementById('submitButton');
submit.addEventListener('click', (event) => {
  event.preventDefault();

  let firstName = document.getElementById('name').value;
  let lastName = document.getElementById('Lastname').value;
  let email = document.getElementById('email').value;

  let registerForm = document.getElementById('registerForm');
  registerForm.style.display = 'none';

  let mainScreen = document.getElementById('mainHome');
  let box = document.getElementById('boxes');
  let resultbtn = document.getElementById('result');
  let resultScreen = document.getElementById('res')
  resultbtn.style.display = 'block';

  mainScreen.innerHTML = `
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-4 letter-spacing">
      <h1 class="h1">Welcome<span class="user-name"> ${firstName.toUpperCase()} ${lastName.toUpperCase()}</span> to Quiz App</h1>
    </div>
  `;

  function Question(question, options, answer) {
    this.question = question;
    this.options = options;
    this.answer = answer;
  }

  let quiz = [
    new Question(
      "HTML stands for ?",
      ["Hyper Text Markdown Language", "Hyper Text Markup Language", "Hyper Text Machine Language", "Hyperlink Text Markup Language"],
      "Hyper Text Markup Language"
    ),
    new Question(
      "What is the CSS selector to target all elements with the class 'header'?",
      [".header", "#header", "[header]", "header"],
      ".header"
    ),
    new Question(
      "What is the JavaScript syntax to alert 'Hello World'?",
      ["alert('Hello World');", "console.log('Hello World');", "document.write('Hello World');", "window.alert('Hello World');"],
      "alert('Hello World');"
    ),
    new Question(
      "What is the HTML tag for a hyperlink?",
      ["<code>a</code>", "<code>link</code>", "<code>button</code>", "<code>img</code>"],
      "<code>a</code>"
    ),
    new Question(
      "What is the CSS property to change the text color?",
      ["background-color", "color", "font-size", "text-align"],
      "color"
    ),
    new Question(
      "What is the JavaScript method to get an element by its ID?",
      ["getElementbyId()", "getElementById()", "getElementsByName()", "getElementsByTagName()"],
      "getElementById()"
    ),
    new Question(
      "What is the HTML attribute to specify the image source?",
      ["src", "alt", "title", "href"],
      "src"
    ),
    new Question(
      "What is the CSS unit for pixel measurements?",
      ["<code>%</code>", "<code>px</code>", "<code>em</code>", "<code>pt</code>"],
      "<code>px</code>"
    ),
    new Question(
      "What is the JavaScript keyword for a variable declaration?",
      ["<code>let</code>", "<code>const</code>", "<code>var</code>", "<code>function</code>"],
      "<code>var</code>"
    ),
    new Question(
      "CSS stands for ?",
      ["Cascading Style Sheets", "Cascading Scripting Sheets", "Creative Styling Solutions", "Colorful Styling System"],
      "Cascading Style Sheets"
    )
  ];
  console.log(quiz.length);

  for (const key in quiz) {
    const questionHTML = `
      <div class="col d-flex flex-column">
        <div class="quiz-box pt-4 ps-5 ms-5 mb-5">
          <p class="fs-4">Q${parseInt(key) + 1}) ${quiz[key].question}</p>
          <div class="option">
            ${quiz[key].options.map((option, index) => {
      return `
                <input type="radio" id="q${key}_option${index + 1}" name="question${key}" value="${option}">
                <label for="q${key}_option${index + 1}">${option}</label><br>
              `;
    }).join('')}
          </div>
        </div>
      </div>
    `;
    box.innerHTML += questionHTML;
  }

  resultbtn.addEventListener('click', () => {
    let score = 0;
    for (const key in quiz) {
      let selectedOption = document.querySelector(`input[name="question${key}"]:checked`);
      if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = quiz[key].answer;
        if (userAnswer === correctAnswer) {
          score++;
        }
      }
    }
    console.log(`Your score is ${score} / ${quiz.length}`);
    let marks = () => {
      mainScreen.style.display = 'none';
      box.style.display = 'none';
      resultbtn.style.display = 'none'
      resultScreen.innerHTML = `
      <h1 class="text-center mt-5">Your score is : ${score} / ${quiz.length}</h1>
      `
    }
    marks()

  });
});
