$(document).ready(function(){
  var timer;
    
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('#ytplayer', {
    height: '390',
    width: '640',
    videoId: link,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// function onPlayerReady(event) {
//         event.target.playVideo();
//       }
    
    timer = $('.timer').FlipClock({
          clockFace: 'HourlyCounter',
          countdown: true,
          autoStart: true
    //       stop: function(){
    // $("timerButton").appendTo(video);
    //   },
  });

    // $("#ytplayer").appendTo().fitVids({ customSelector: "iframe[src^='https://goo.gl/FfPdOH']"});
   // loadVideoById("0-k1CkNGb4U", 5, "large")
    
  var exercises = [ ['Standard-Push-Up',"https://www.youtube.com/embed/0-k1CkNGb4U"], ['Modified-V-up', "https://www.youtube.com/embed/W--L1SljsDY"], ['Elbow-Plank', "https://www.youtube.com/embed/eOxIIujCefk"], ['Standing-Toe-Touch', "https://www.youtube.com/embed/SxThenXOdHI"] ];
  
  var link = exercises[0][1]; 

  var counter = 0;
  
  $("button").click(function(){
     timer.setTime(10);
     timer.start();
     $('#video').attr("src", link);
      counter++;
      console.log(counter);
  });

  
  timer.stop(function(exercise, alertMessage){

  });

    // $("#exerciseVideo").appendTo(video)



// $('#ytplayer').YTplayer({});

// // With configurations
// $('#ytplayer').YTplayer({
//     // Basic setting
//     width: 1000,                // video width
//     height: 560,                // video height
//     videoId: '0-k1CkNGb4U',    // youtube video id

//     // Events
//     onReady: function(){},      // on video ready
//     onStart: function(){},      // on video start
//     onPause: function(){},      // on video pause
//     onEnd: function(){},        // on video end
//     onBuffer: function(){},     // on video buffer
//     onStateChange: function(){}, // will be triggered by all the 5 events above

//     // Player variables
//     playerVars: {
//         autohide: 2,            // Values: 2 (default), 1, and 0. This parameter indicates whether the video controls will automatically hide after a video begins playing
//         autoplay: 0,            // Values: 0 or 1. Default is 0. Sets whether or not the initial video will autoplay when the player loads.
//         cc_load_policy: 1,      // Values: 1. Default is based on user preference. Setting to 1 will cause closed captions to be shown by default, even if the user has turned captions off.
//         color: 'red',           // Valid parameter values are red and white, and, by default, the player will use the color red in the video progress bar.
//         controls: 0,            // Values: 0 (do not display), 1, or 2. Default is 1. This parameter indicates whether the video player controls will display
//         disablekb: 0,           // Values: 0 or 1. Default is 0. Setting to 1 will disable the player keyboard controls
//         enablejsapi: 0,         // Values: 0 or 1. Default is 0. Setting this to 1 will enable the Javascript API
//         end: number,            // Values: A positive integer. This parameter specifies the time, measured in seconds from the start of the video, when the player should stop playing the video
//         fs: 1,                  // Values: 0 or 1. The default value is 1, which causes the fullscreen button to display. Setting this parameter to 0 prevents the fullscreen button from displaying
//         hl: 'en',               // Sets the player's interface language
//         iv_load_policy: 3,      // Values: 1 or 3. Default is 1. Setting to 1 will cause video annotations to be shown by default, whereas setting to 3 will cause video annotations to not be shown by default
//         modestbranding: 1,      // This parameter lets you use a YouTube player that does not show a YouTube logo. Set the parameter value to 1 to prevent the YouTube logo from displaying in the control bar
//         origin: '',             // This parameter provides an extra security measure for the IFrame API and is only supported for IFrame embeds. If you are using the IFrame API, which means you are setting the enablejsapi parameter value to 1, you should always specify your domain as the origin parameter value
//         playsinline: 0,         // This parameter controls whether videos play inline or fullscreen in an HTML5 player on iOS
//         rel: 1,                 // Values: 0 or 1. Default is 1. This parameter indicates whether the player should show related videos when playback of the initial video ends
//         showinfo: 1,            // Values: 0 or 1. The parameter's default value is 1. If you set the parameter value to 0, then the player will not display information like the video title and uploader before the video starts playing
//         start: number,          // Values: A positive integer. This parameter causes the player to begin playing the video at the given number of seconds from the start of the video
//         theme: 'dark'           // This parameter indicates whether the embedded player will display player controls (like a play button or volume control) within a dark or light control bar. Valid parameter values are dark and light
//     }
//     // full reference: https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
// });
    
});
  







