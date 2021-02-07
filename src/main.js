import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Human } from './age.js';

//Since there currently is not a front end this main.js is not fully built out to display every output in its current form. When I have a front end I will add more jQuery calls to show the various ages.

$(document).ready(function() {
  $('#human-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const birthGender = $('#birthGender').val();

    const human = new Human(age, birthGender);
    human.earthExpectancy();
    human.lifeLeft();
    $('#results').slideDown();
    $("#earth-age").text(human.age);
    $("#mercury-age").text(human.mercuryAge);
    $("#venus-age").text(human.venusAge);
    $("#mars-age").text(human.marsAge);
    $("#jupiter-age").text(human.jupiterAge);
  });
});