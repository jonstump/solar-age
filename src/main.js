import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Human } from './age.js';

$(document).ready(function() {
  $('#human-form').submit(function(event) {
    event.preventDefault();
    const age = $('#age').val();
    const birthGender = $('#birthGender').val();

    const human = new Human(age, birthGender);
    const earthAvgLife = human.earthExpectancy();
    const insterstellarAge = human.insterstellarAge();
    const lifeLeft = human.lifeLeft();
    $('#response').append("<p>" + response + "</p>");
  });
});