
(function () {
    "use strict";
    

    var page = WinJS.UI.Pages.define("../Montessori.cshtml", {
        ready: function (element, options) {

             var runAnimation = document.getElementById("runAnimation");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
var output = document.getElementById("output");

            // practical Life activities
            var practicalLife = document.getElementById("practicalLife");
            var reportOutput1 = document.getElementById("reportOutput1");
            var reportOutput2 = document.getElementById("reportOutput2");
            var reportOutput = document.getElementById("reportOutput");

            // sensorial activities
             var sensorial = document.getElementById("sensorial");
            var sensorialOutput1 = document.getElementById("sensorialOutput1");
            var sensorialOutput2 = document.getElementById("sensorialOutput2");
            var sensorialOutput = document.getElementById("sensorialOutput");

             // language activities
             var language = document.getElementById("language");
            var languageOutput1 = document.getElementById("languageOutput1");
            var languageOutput2 = document.getElementById("languageOutput2");
            var languageOutput = document.getElementById("languageOutput");

              // mathematics activities
             var mathematics = document.getElementById("mathematics");
            var mathematicsOutput1 = document.getElementById("mathematicsOutput1");
            var mathematicsOutput2 = document.getElementById("mathematicsOutput2");
            var mathematicsOutput = document.getElementById("mathematicsOutput");

                   // cultural activities
             var cultural = document.getElementById("cultural");
            var culturalOutput1 = document.getElementById("culturalOutput1");
            var culturalOutput2 = document.getElementById("culturalOutput2");
            var culturalOutput = document.getElementById("culturalOutput");


   

        },
        unload: function (element, options) {

        }

          });


         function transitionToPracticalLife() {
        var incomingExtra;
        var outgoingExtra;

        // Assign incoming and outgoing
        if (reportOutput2.style.display === "none") {
            
            incomingExtra = reportOutput2;
            outgoingExtra = reportOutput1;
        } else {
       
            incomingExtra = reportOutput1;
            outgoingExtra = reportOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(reportOutput, null).done(function () {
            outgoingExtra.style.display = "none";
            incomingExtra.style.display = "block";

            return WinJS.UI.Animation.enterContent(reportOutput, null);
        });
    }

    practicalLife.addEventListener("click", transitionToPracticalLife, false);
    reportOutput1.style.display = "block";
    reportOutput2.style.display = "none";


     function transitionToSensorial() {
        var incomingSensorial;
        var outgoingSensorial;

        // Assign incoming and outgoing
        if (sensorialOutput2.style.display === "none") {
            
            incomingSensorial = sensorialOutput2;
            outgoingSensorial = sensorialOutput1;
        } else {
       
            incomingSensorial = sensorialOutput1;
            outgoingSensorial = sensorialOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(sensorialOutput, null).done(function () {
            outgoingSensorial.style.display = "none";
            incomingSensorial.style.display = "block";

            return WinJS.UI.Animation.enterContent(sensorialOutput, null);
        });
    }

    sensorial.addEventListener("click", transitionToSensorial, false);
    sensorialOutput1.style.display = "block";
    sensorialOutput2.style.display = "none";


          function transitionToLanguage() {
        var incomingLanguage;
        var outgoingLanguage;

        // Assign incoming and outgoing
        if (languageOutput2.style.display === "none") {
            
            incomingLanguage = languageOutput2;
            outgoingLanguage = languageOutput1;
        } else {
       
            incomingLanguage = languageOutput1;
            outgoingLanguage = languageOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(languageOutput, null).done(function () {
            outgoingLanguage.style.display = "none";
            incomingLanguage.style.display = "block";

            return WinJS.UI.Animation.enterContent(languageOutput, null);
        });
    }

    language.addEventListener("click", transitionToLanguage, false);
    languageOutput1.style.display = "block";
    languageOutput2.style.display = "none";


  function transitionToMathematics() {
        var incomingMathematics;
        var outgoingMathematics;

        // Assign incoming and outgoing
        if (mathematicsOutput2.style.display === "none") {
            
            incomingMathematics = mathematicsOutput2;
            outgoingMathematics = mathematicsOutput1;
        } else {
       
            incomingMathematics = mathematicsOutput1;
            outgoingMathematics = mathematicsOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(mathematicsOutput, null).done(function () {
            outgoingMathematics.style.display = "none";
            incomingMathematics.style.display = "block";

            return WinJS.UI.Animation.enterContent(mathematicsOutput, null);
        });
    }

    mathematics.addEventListener("click", transitionToMathematics, false);
    mathematicsOutput1.style.display = "block";
    mathematicsOutput2.style.display = "none";



         function transitionToCultural() {
        var incomingCultural;
        var outgoingCultural;

        // Assign incoming and outgoing
        if (culturalOutput2.style.display === "none") {
            
            incomingCultural = culturalOutput2;
            outgoingCultural = culturalOutput1;
        } else {
       
            incomingCultural = culturalOutput1;
            outgoingCultural = culturalOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(culturalOutput, null).done(function () {
            outgoingCultural.style.display = "none";
            incomingCultural.style.display = "block";

            return WinJS.UI.Animation.enterContent(culturalOutput, null);
        });
    }

    cultural.addEventListener("click", transitionToCultural, false);
    culturalOutput1.style.display = "block";
    culturalOutput2.style.display = "none";


         










   




  
   


})();

