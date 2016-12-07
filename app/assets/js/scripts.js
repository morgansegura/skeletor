/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    var quiz = [
        {
            'question': 'Explain "use strict";',
            'answer': 'Wacka'
        },
        {
            'question': 'What are the different types in in javascript?',
            'answer': ''
        },
        {
            'question': 'What does the function typeof() do?',
            'answer': ''
        },
        {
            'question': 'What does it mean that javascript is a dynamically typed language?',
            'answer': ''
        },
        {
            'question': 'What is the difference between "udnefined" and "null"?',
            'answer': ''
        }
    ];

    var question = document.getElementsByClassName('question-headline');
    var answer = document.getElementsByClassName('answer-block');

    for( var i = 1; i < quiz.length; i++) {
        question[i].innerHTML = quiz[i].question;
        answer.innerHTML = '<li>'+quiz[i].question+'</li>';
    }

  });

})(jQuery, window, document);
