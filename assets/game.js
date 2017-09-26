

  // Declaring function to generate random numbers//
    function randomNumberGenerator(min, max){
       return Math.floor(Math.random()*(max-min+1)+ min);
      
    }


// Declare Object with all variables and functions pertaining to the state of the game//
var game = {
      randomNumber : randomNumberGenerator(19, 120),
      wins : 0,
      losses : 0,
      resultNumber : 0, 

      // Update Number guessed 
      updateResult: function(number){
        this.resultNumber += number;
        
        // display numbers guessed to page
        $("#result").html("total: " +this.resultNumber);
        // if target number is  === result number then win goes up by 1 
    
        
        

        // If the number guessed > random number, losses go up by 1.   
          if(this.resultNumber > this.randomNumber ){
            this.losses++;
            $("#losses").html("losses: " + this.losses);
            // Game is reset
            this.resetGame();  

         //If number guessed === random number, winds go up by one 
          
          } else if(this.resultNumber === this.randomNumber) {
            this.wins++;
            $("#wins").html("wins:" + this.wins);
          
            this.resetGame();

            // for all other situations, no change is made.
          } else {
            return;
          }
        },
        resetGame: function(){
          // Generate a new random number between 19 and 120
          game.randomNumber = randomNumberGenerator(19, 120);
          $("#random-number").text(game.randomNumber);
          
          // Reset Result Number to 0 and print it to the html
          this.resultNumber = 0;
          $("#result").html("total: " + game.resultNumber);
          // Set new values for planets
          planetValue.resetRandomValue();
          
        }
    };


    // Create separate object to organize variables and functions
    var planetValue = {
      // Create an empty array to push and sort though random numbers generated
      planets: [],
      // Replace a random number in an array with #1 so user has better chance of winning
      replaceOne : function(max) {
          //Take array of planet values and generate a random index #
          var planetIndex = Math.floor(Math.random()*(max));
          // console.log("random index: " + planetNumIndex);
          // Replace random index #  with 1. Now 1 planet is always 
          this.planets.splice(planetIndex, 1, 1);
      },
      // While the length of planet array is less than four, keep adding random number
      assignValue : function(){
        // run until array has 4 values
        while(this.planets.length < 4){
          var num = randomNumberGenerator(2,12)
          // Check to make sure numbers aren't being repeated in array
          if(!this.planets.includes(num)){
            planetValue.planets.push(num);
          } 
        }

        this.replaceOne(this.planets.length);
      },
      // assign each button a value from gems array
      renderValue : function(){
        // each  gem item === a button there are 4 buttons and 4 array items.
          // all buttons have btn call and a unique class of btn1-4
          $('.btn1').val(this.planets[0]);
          $('.btn2').val(this.planets[1]);
          $('.btn3').val(this.planets[2]);
          $('.btn4').val(this.planets[3]);
      },
      //Function to reset data
      resetRandomValue : function() {
        this.planets = [];
        // console.log(this.gems);
        this.assignNumber();
        // console.log(this.gems);
        this.renderValue();
      },
    };


    // Game loads when you open browser
    $(document).ready(function(){
      randomNumberGenerator(19, 120);
  
      $("#random-number").text(game.randomNumber);
      $("#wins").html("wins: " + game.wins);
      $("#losses").html("losses: " + game.losses);
      $("#result").html("total: " + game.resultNumber);
      planetValue.assignValue(); 
      planetValue.renderValue(); 

      //When buttons are clicked, convert number to string and display on html
      $(".btn").on("click", function(){ 
        var clickValue = parseInt($(this).val());
        game.updateResult(clickValue);
      });
      console.log("button value: " + planetValue.planets);
    });
    