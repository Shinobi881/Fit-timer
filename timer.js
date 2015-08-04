$(document).ready(function(){ 

  // Timer created from the FlipClock library
  var timer = $('.timer').FlipClock({
          clockFace: 'HourlyCounter',
          countdown: true,
          autoStart: true
   
  });
  
  // Array of evercises  
  var exercises = [ ['Standard-Push-Up',"https://www.youtube.com/embed/0-k1CkNGb4U?rel=0&amp;autoplay=1"], 
                    ['Modified-V-up', "https://www.youtube.com/embed/W--L1SljsDY?rel=0&amp;autoplay=1"], 
                    ['Elbow-Plank', "https://www.youtube.com/embed/eOxIIujCefk?rel=0&amp;autoplay=1"], 
                    ['Standing-Toe-Touch', "https://www.youtube.com/embed/SxThenXOdHI?rel=0&amp;autoplay=1"] 
                  ];
  
  // A counter to determine the exercise cycles and push them into an array
  var counter = 0;
  
  // Counter reset function
  var counterReset = function(){
    if (counter === 4) {
      counter = 0;
    };
  }

  // Flag to make sure the event only triggers once per cycle
  var eventTrigger = false;
  
  
  // Sequence of event to occur when the timer ends and the conditions
  var timerEvent = function(){
    
    var link = exercises[counter][1]; // Reference the video link from the exercises array and set to 'link'
    var alertMessage = exercises[counter][0]; // Reference the name of the exercise and set it to the 'alertmessage'
    
    // Check to see if the timer has almost ended
    if(timer.getTime() > 0 && timer.getTime() < 2){
      if(eventTrigger === false){ // Check to see if the events have trigerred this cycle
        eventTrigger = true; // If not set the event trigger to true
        alert(alertMessage); // Alert the user of that the timer has ended and the exercise to be done
        $('#video').attr("src", link); // Set the video link source and attach it to the HTML iframe
      }  
    }

  }
      
  // Button to reset and trigger timer functions
  $("button").click(function(){
      $('#video').attr("src", ""); // Reset the video on the page
      timer.setTime(10); // Initialize the timer
      timer.start(); // Start the timer
      eventTrigger = false; // Reset the event trigger
      setInterval(timerEvent, 2660); // Trigger the timerEvent check every few seconds
      counter++; // Increment the counter
      counterReset(); // Reset the counter when necessary      
  });
});
  

    
        
        
        

  







