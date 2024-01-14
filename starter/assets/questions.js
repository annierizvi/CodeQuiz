const questions = [
  // HTML Questions
  {
    question: 'What does HTML stand for?',
    choices: [
      'Hyper Trainer Marking Language',
      'Hyper Text Markup Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    question:
      'Which of the following HTML elements is used for creating an unordered list?',
    choices: ['<ui>', '<i>', '<ul>', '<list>'],
    answer: '<ul>',
  },
  {
    question: 'Which HTML element is used to define a paragraph?',
    choices: ['<pg>', '<paragraph>', '<p>', '<text>'],
    answer: 'paragraph',
  },
  {
    question: 'What is the purpose of the <div> tag in HTML?',
    choices: [
      'For creating titles',
      'For creating a division or a section',
      'For adding a line break',
      'For emphasizing text',
    ],
    answer: 'For creating a devision or a section',
  },
  // CSS Questions
  {
    question: 'What does CSS stand for?',
    choices: [
      'Creative Style Sheets',
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Colorful Style Sheets',
    ],
    answer: 'Cascading Style Sheets',
  },
  {
    question:
      'Which property is used to change the background color of an element?',
    choices: ['bgcolor', 'color', 'background-color', 'background'],
    answer: 'background-color',
  },
  {
    question: "How do you select an element with the id 'header' in CSS?",
    choices: ['*header', '#header', '.header', 'header'],
    answer: '#header',
  },
  {
    question:
      'Which of the following is the correct syntax for making all the <p> elements bold?',
    choices: [
      'p {font-weight:bold;}',
      '<p> {text-size:bold;}',
      'p {text-style:bold;}',
      '<p> style="font-size:bold;"',
    ],
    answer: 'p {font-weight:bold;}',
  },
  {
    question: 'What is the defult value of the position property',
    choices: ['fixed', 'absolute', 'relative', 'static'],
    answer: 'static',
  },
  // JavaScript Questions
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    choices: ['<js>', '<script>', '<javascript>', '<scripting>'],
    answer: '<script>',
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    choices: [
      'alert("Hello World");',
      'msgBox("Hello World");',
      'msg("Hello World");',
      'alertBox("Hello World");',
    ],
    answer: 'alert("Hello World");',
  },
  {
    question: 'How do you create a function in JavaScript?',
    choices: [
      'function = myFunction()',
      'function myFunction()',
      'function:myFunction()',
    ],
    answer: 'function myFunction()',
  },
  {
    question: 'How do you call a function named "myFunction"?',
    choices: [
      'call myFunction()',
      'call function myFunction()',
      'myFunction()',
      'function myFunction()',
    ],
    answer: 'myFunction()',
  },
  {
    question: 'How to write an IF statement in JavaScript?',
    choices: ['if i = 5 then', 'if (i == 5)', 'if i == 5 then', 'if i = 5'],
    answer: 'if (i == 5)',
  },
];
