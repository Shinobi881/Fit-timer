$(document).ready(function(){ 


  var timer = $('.timer').FlipClock({
          clockFace: 'HourlyCounter',
          countdown: true,
          autoStart: true
   
  });
    
  var exercises = [ ['Standard-Push-Up',"https://www.youtube.com/embed/0-k1CkNGb4U?rel=0&amp;autoplay=1"], 
                    ['Modified-V-up', "https://www.youtube.com/embed/W--L1SljsDY?rel=0&amp;autoplay=1"], 
                    ['Elbow-Plank', "https://www.youtube.com/embed/eOxIIujCefk?rel=0&amp;autoplay=1"], 
                    ['Standing-Toe-Touch', "https://www.youtube.com/embed/SxThenXOdHI?rel=0&amp;autoplay=1"] 
                  ];
  var counter = 0;
  
  var counterReset = function(){
    if (counter === 4) {
      counter = 0;
    };
  }
  

  // Create a limit for the counter to reset 



  var eventTrigger = false;
  
  
  var timerEvent = function(){
  var link = exercises[counter][1]; 
  var alertMessage = exercises[counter][0];
    if(timer.getTime() > 0 && timer.getTime() < 2){
      if(eventTrigger === false){
        eventTrigger = true;
        alert(alertMessage);
        $('#video').attr("src", link);
      }  
    }

  }

  $("button").click(function(){
      $('#video').attr("src", "");
      timer.setTime(10);
      timer.start();
      eventTrigger = false;
      setInterval(timerEvent, 2660);
      console.log(counter)
      counter++;
      counterReset();      
      
  
  });

  timer.stop(function(){
      console.log(alertMessage);
    
  })
    

    
    
  // });
  // Taking into account for a stopped video when the page is loaded
    // Check the stop function against a flag or counter
  // timer.stop(function(){
      
  //    confirm(alertMessage);

  //      // $('#video').attr("src", link);
      
    
  // });


    
});
  







