import 'bootstrap';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import {haikuChecker, syllableCounter} from './haikuCheck.js';

$(document).ready(function(){
  $('#haiku-form').submit(function(event){
    event.preventDefault();
    const inputtedLine1 = $('#line1').val();
    const inputtedLine2 = $('#line2').val();
    const inputtedLine3 = $('#line3').val();
    const result = haikuChecker(inputtedLine1, inputtedLine2, inputtedLine3);
    if (result) {
      $('#results-div').show();
      $('#results-div').html(`<h4>You have a Haiku!</h4><br><p>${inputtedLine1}</p><p>${inputtedLine2}</p><p>${inputtedLine3}</p>`);
    } else {
      const Line1Count = syllableCounter(inputtedLine1);
      const Line2Count = syllableCounter(inputtedLine2);
      const Line3Count = syllableCounter(inputtedLine3);
      $('#results-div').show();
      $('#results-div').html(`<h4>Wah wah! You do NOT have a Haiku!</h4><p>Line 1 is ${Line1Count} syllables, and should be 5.</p><p>Line 2 is ${Line2Count} syllables, and should be 7.</p><p>Line 3 is ${Line3Count} syllables, and should be 5.</p>`);
    }
  });
});