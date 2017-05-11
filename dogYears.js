$(document).ready(function() {

  // var prompt = require('prompt-sync')();

  var clickedImg = '';
  $('img').click(function() {
    clickedImg = $(this).attr('id');
    $('img').hide();
    $('span').hide();
    $('#size').hide();
    $('h1').css('margin-bottom', '20px');
    
    console.log(clickedImg);
    if (clickedImg === 'giant') {
        $('.notGiant').hide();
        $('.dropdown').fadeIn(1000);
        console.log('GIANTS!');
    } else {
        $('.dropdown').fadeIn(1000);
    }
  });

  $('#ageSelector').change(function() {
      var dogAge = $('#ageSelector').val();
      if (clickedImg === 'small') {
        $('#ageSelector').hide();
        $('h2').html("Your companion is " + smallBreeds[dogAge] + " doggie years old!");
        $('.doggieAge').fadeIn(1000);
        $('#start').fadeIn(1000);
      } else if (clickedImg === 'medium') {
        $('#ageSelector').hide();
        $('h2').html("Your companion is " + mediumBreeds[dogAge] + " doggie years old!");
        $('.doggieAge').fadeIn(1000);
        $('#start').fadeIn(1000);
      } else if (clickedImg === 'large') {
        $('#ageSelector').hide();
        $('h2').html("Your companion is " + largeBreeds[dogAge] + " doggie years old!");
        $('.doggieAge').fadeIn(1000);
        $('#start').fadeIn(1000);
      } else if (clickedImg === 'giant') {
        $('#ageSelector').hide();
        $('h2').html("Your companion is " + giantBreeds[dogAge] + " doggie years old!");
        $('.doggieAge').fadeIn(1000);
        $('#start').fadeIn(1000);
      }
  });

  // var myAge = Number(prompt('What is your age? '));
  // var firstYears = 2 * 10.5;
  // var laterYears = (myAge - 2) * 4;
  // var myAgeInDogYears = firstYears + laterYears;

  var smallBreeds = {
    "1": 15,
    "2": 23,
    "3": 28,
    "4": 32,
    "5": 36,
    "6": 40,
    "7": 44,
    "8": 48,
    "9": 52,
    "10": 56,
    "11": 60,
    "12": 64,
    "13": 68,
    "14": 72,
    "15": 76,
    "16": 80,
    "17": 84,
    "18": 88,
    "19": 92,
    "20": 96
  };

  var mediumBreeds = {
    "1": 15,
    "2": 24,
    "3": 29,
    "4": 34,
    "5": 37,
    "6": 42,
    "7": 47,
    "8": 51,
    "9": 56,
    "10": 60,
    "11": 65,
    "12": 69,
    "13": 74,
    "14": 78,
    "15": 83,
    "16": 87,
    "17": 92,
    "18": 96,
    "19": 101,
    "20": 106
  };

  var largeBreeds = {
    "1": 14,
    "2": 22,
    "3": 29,
    "4": 34,
    "5": 40,
    "6": 45,
    "7": 50,
    "8": 55,
    "9": 61,
    "10": 66,
    "11": 72,
    "12": 77,
    "13": 82,
    "14": 88,
    "15": 93,
    "16": 99,
    "17": 104,
    "18": 109,
    "19": 115,
    "20": 120
  };

  var giantBreeds = {
    "1": 14,
    "2": 20,
    "3": 28,
    "4": 35,
    "5": 42,
    "6": 49,
    "7": 56,
    "8": 64,
    "9": 71,
    "10": 78,
    "11": 86,
    "12": 93,
    "13": 101,
    "14": 108,
    "15": 115,
    "16": 123
  };

  var sizes = [smallBreeds, mediumBreeds, largeBreeds, giantBreeds];


  // console.log("Your age in dog years is " + myAgeInDogYears + ".");

});
