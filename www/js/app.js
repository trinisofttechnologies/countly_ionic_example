// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
      alert("Sending Countly Events");
      app.test();
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

  });
})


app = {};
document.addEventListener("deviceready",function(){
    Countly.init("http://128.199.55.79","46e1fd647e01f89e77e53007ab0e9aa59aa9d11f"); //50bffd5c8a7332b55f8aca45a1af0cd6e6f31b13  //http://104.131.45.10
                        //replace your server ip/url // replace it with your "App Key"
    // app.onRegistrationId();
    // app.test();
    // alert("deviceready");
},false);
app.test = function(){
    app.onRegistrationId();
    app.sendSampleEvent();
}
app.event = function(){
    setInterval(function(){
        app.sendSampleEvent();
    },1000);
}
app.start = function(){
    Countly.start();
}
app.stop = function(){
    Countly.stop();
}
app.sendSampleEvent = function(){
    app.basicEvent();
    app.eventWithSum();
    app.eventWithSegment();
    app.eventWithSum_Segment();
}
app.basicEvent = function(){
    // example for basic event
    var events = {"eventName":"basic_event","eventCount":1};
    Countly.sendEvent(events);
}
app.eventWithSum = function(){
    // example for event with sum
    var events = {"eventName":"event_sum","eventCount":1,"eventSum":"0.99"};
    Countly.sendEvent(events);
}
app.eventWithSegment = function(){
    // example for event with segment
    var events = {"eventName":"event_segment","eventCount":1};
    events.segments = {"Country" : "Turkey", "Age" : "28"};
    Countly.sendEvent(events);
}
app.eventWithSum_Segment = function(){
    // example for event with segment and sum
    var events = {"eventName":"event_segment_sum","eventCount":1,"eventSum":"0.99"};
    events.segments = {"Country" : "Turkey", "Age" : "28"};
    Countly.sendEvent(events);
}
app.setUserData = function(){
    // example for setUserData
    var options = {};
    options.name = "Trinisoft Technologies";
    options.username = "trinisofttechnologies";
    options.email = "trinisofttechnologies@gmail.com";
    options.org = "Trinisoft Technologies Pvt. Ltd.";
    options.phone = "+91 812 840 2946";
    options.picture = "http://www.trinisofttechnologies.com/images/logo.png";
    options.picturePath = "";
    options.gender = "Male";
    options.byear = 1989;
    Countly.setUserData(options);
}
app.setloggingenabled = function(){
    // example for setLoggingEnabled
    Countly.setLoggingEnabled();
}
app.onRegistrationId = function(){
    // Countly.messagingMode.TEST
    // Countly.messagingMode.PRODUCTION
    // Countly.mode = Countly.messagingMode.TEST;
    // Countly.Push.onRegisterPushNotification();
    Countly.initMessaging({
        "messageMode": Countly.messagingMode.TEST,
        "projectId": "881000050249"
    });
    // Tesint purpose only
    Countly.onRegistrationId({
        "registrationId":"abcdefg",
        "mode":Countly.messagingMode.TEST,
        "projectId": "881000050249"
    })
}