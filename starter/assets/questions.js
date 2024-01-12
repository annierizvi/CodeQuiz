const questions = [
  // HTML Questions
  {
    question: 'What does HTML stand for?',
    answers: [
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
    answers: ['<ui>', '<i>', '<ul>', '<list>'],
    answer: '<ul>',
  },
  {
    question: 'Which HTML element is used to define a paragraph?',
    answers: ['<pg>', '<paragraph>', '<p>', '<text>'],
    correct: 'paragraph',
  },
  {
    question: 'What is the purpose of the <div> tag in HTML?',
    answers: [
      'For creating titles',
      'For creating a division or a section',
      'For adding a line break',
      'For emphasizing text',
    ],
    correct: 'For creating a devision or a section',
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
  }
];
