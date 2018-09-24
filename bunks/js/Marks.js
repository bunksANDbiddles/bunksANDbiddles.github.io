(function () {
    "use strict";


     var page = WinJS.UI.Pages.define("../Marks.cshtml", {
        ready: function (element, options) {



                // extra curiculum activities
            var extraCurricularTab = document.getElementById("extraCurricularTab");
            var headerSectionOutput1 = document.getElementById("headerSectionOutput1");
            var headerSectionOutput2 = document.getElementById("headerSectionOutput2");
            var headerSectionOutput = document.getElementById("headerSectionOutput");



               },
        unload: function (element, options) {

        }

    });


      function transitionBetweenAcademicAndExtra() {
        var incomingExtra;
        var outgoingExtra;

        // Assign incoming and outgoing
        if (headerSectionOutput2.style.display === "none") {
            extraCurricularTab.innerHTML = " Extra-Curriculum Activities &#xE1F6  ";
            incomingExtra = headerSectionOutput2;
            outgoingExtra = headerSectionOutput1;
        } else {
            extraCurricularTab.innerHTML = " Extra-Curriculum Activities &#xE1F7 ";
            incomingExtra = headerSectionOutput1;
            outgoingExtra = headerSectionOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(headerSectionOutput, null).done(function () {
            outgoingExtra.style.display = "none";
            incomingExtra.style.display = "block";

            return WinJS.UI.Animation.enterContent(headerSectionOutput, null);
        });
    }

    extraCurricularTab.addEventListener("click", transitionBetweenAcademicAndExtra, false);
    headerSectionOutput1.style.display = "block";
    headerSectionOutput2.style.display = "none";

    })();




