
(function () {
    "use strict";
    var header;
    var footer;
    var pageContent;
    var animate;
    var outputText;

    var page = WinJS.UI.Pages.define("../StudentDetails.cshtml", {
        ready: function (element, options) {


            var header = document.querySelector("header");
             var footer = document.querySelector("footer");
              var pageContent = document.querySelector(".pageContent");
               var animate = document.querySelector("animate");
                var outputText = document.querySelector("outputText");

                animate.addEventListener("click", transitionBetweenPages, false)

            // extra curiculum activities
            var extraCurricularTab = document.getElementById("extraCurricularTab");
            var headerSectionOutput1 = document.getElementById("headerSectionOutput1");
            var headerSectionOutput2 = document.getElementById("headerSectionOutput2");
            var headerSectionOutput = document.getElementById("headerSectionOutput");

       

            var runAnimation = document.getElementById("runAnimation");
            var contentArea = document.getElementById("contentArea");
            var content = document.querySelector(".box");

            //// English code segment
            //var englishTab = document.getElementById("englishTab");
            //var englishTabOutput1 = document.getElementById("englishTabOutput1");
            //var englishTabOutput2 = document.getElementById("englishTabOutput2");
            //var englishTabOutput = document.getElementById("englishTabOutput");

            //// Literature code segment
            //var literatureTab = document.getElementById("literatureTab");
            //var literatureTabOutput1 = document.getElementById("literatureTabOutput1");
            //var literatureTabOutput2 = document.getElementById("literatureTabOutput2");
            //var literatureTabOutput = document.getElementById("literatureTabOutput");

            //// Science code segment
            //var scienceTab = document.getElementById("scienceTab");
            //var scienceTabOutput1 = document.getElementById("scienceTabOutput1");
            //var scienceTabOutput2 = document.getElementById("scienceTabOutput2");
            //var scienceTabOutput = document.getElementById("scienceTabOutput");


            //// Social Studies code segment
            //var socialStudiesTab = document.getElementById("socialStudiesTab");
            //var socialStudiesTabOutput1 = document.getElementById("socialStudiesTabOutput1");
            //var socialStudiesTabOutput2 = document.getElementById("socialStudiesTabOutput2");
            //var socialStudiesTabOutput = document.getElementById("socialStudiesTabOutput");



            //// Word Building code segment
            //var wordBuildingTab = document.getElementById("wordBuildingTab");
            //var wordBuildingTabOutput1 = document.getElementById("wordBuildingTabOutput1");
            //var wordBuildingTabOutput2 = document.getElementById("wordBuildingTabOutput2");
            //var wordBuildingTabOutput = document.getElementById("wordBuildingTabOutput");

            // Art code segment
            var artTab = document.getElementById("artTab");
            var artTabOutput1 = document.getElementById("artTabOutput1");
            var artTabOutput2 = document.getElementById("artTabOutput2");
            var artTabOutput = document.getElementById("artTabOutput");

            //// Computer code segment
            //var computerTab = document.getElementById("computerTab");
            //var computerTabOutput1 = document.getElementById("computerTabOutput1");
            //var computerTabOutput2 = document.getElementById("computerTabOutput2");
            //var computerTabOutput = document.getElementById("computerTabOutput");

            if (WinJS.Navigation.state === "sample page") {
                outputText.innerText = "Transitioned back from sample page.";

                // Use the recommended offset by leaving the offset argument empty to get the best performance
                WinJS.UI.Animation.enterPage([header, pageContent, footer ], null);
            }


        },
        unload: function (element, options) {

        }

    });










    //function transitionBetweenMathematicsContent() {
    //    var incomingMathContent;
    //    var outgoingMathContent;

    //    // Assign incoming and outgoing
    //    if (mathTabOutput2.style.display === "none") {
    //        incomingMathContent = mathTabOutput2;
    //        outgoingMathContent = mathTabOutput1;
    //    } else {
    //        incomingMathContent = mathTabOutput1;
    //        outgoingMathContent = mathTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(mathTabOutput, null).done(function () {
    //        outgoingMathContent.style.display = "none";
    //        incomingMathContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(mathTabOutput, null);
    //    });
    //}


    //mathTab.addEventListener("click", transitionBetweenMathematicsContent, false);
    //mathTabOutput1.style.display = "block";
    //mathTabOutput2.style.display = "none";



    //function transitionBetweenEnglishContent() {
    //    var incomingEnglishContent;
    //    var outgoingEnglishContent;

    //    // Assign incoming and outgoing
    //    if (englishTabOutput2.style.display === "none") {
    //        incomingEnglishContent = englishTabOutput2;
    //        outgoingEnglishContent = englishTabOutput1;
    //    } else {
    //        incomingEnglishContent = englishTabOutput1;
    //        outgoingEnglishContent = englishTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(englishTabOutput, null).done(function () {
    //        outgoingEnglishContent.style.display = "none";
    //        incomingEnglishContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(englishTabOutput, null);
    //    });
    //}


    //englishTab.addEventListener("click", transitionBetweenEnglishContent, false);
    //englishTabOutput1.style.display = "block";
    //englishTabOutput2.style.display = "none";

    //function transitionBetweenLiteratureContent() {
    //    var incomingLiteratureContent;
    //    var outgoingLiteratureContent;

    //    // Assign incoming and outgoing
    //    if (literatureTabOutput2.style.display === "none") {
    //        incomingLiteratureContent = literatureTabOutput2;
    //        outgoingLiteratureContent = literatureTabOutput1;
    //    } else {
    //        incomingLiteratureContent = literatureTabOutput1;
    //        outgoingLiteratureContent = literatureTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(literatureTabOutput, null).done(function () {
    //        outgoingLiteratureContent.style.display = "none";
    //        incomingLiteratureContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(literatureTabOutput, null);
    //    });
    //}


    //literatureTab.addEventListener("click", transitionBetweenLiteratureContent, false);
    //literatureTabOutput1.style.display = "block";
    //literatureTabOutput2.style.display = "none";

    //function transitionBetweenScienceContent() {
    //    var incomingScienceContent;
    //    var outgoingScienceContent;

    //    // Assign incoming and outgoing
    //    if (scienceTabOutput2.style.display === "none") {
    //        incomingScienceContent = scienceTabOutput2;
    //        outgoingScienceContent = scienceTabOutput1;
    //    } else {
    //        incomingScienceContent = scienceTabOutput1;
    //        outgoingScienceContent = scienceTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(scienceTabOutput, null).done(function () {
    //        outgoingScienceContent.style.display = "none";
    //        incomingScienceContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(scienceTabOutput, null);
    //    });
    //}


    //scienceTab.addEventListener("click", transitionBetweenScienceContent, false);
    //scienceTabOutput1.style.display = "block";
    //scienceTabOutput2.style.display = "none";


    //function transitionBetweenSocialStudiesContent() {
    //    var incomingSocialStudiesContent;
    //    var outgoingSocialStudiesContent;

    //    // Assign incoming and outgoing
    //    if (socialStudiesTabOutput2.style.display === "none") {
    //        incomingSocialStudiesContent = socialStudiesTabOutput2;
    //        outgoingSocialStudiesContent = socialStudiesTabOutput1;
    //    } else {
    //        incomingSocialStudiesContent = socialStudiesTabOutput1;
    //        outgoingSocialStudiesContent = socialStudiesTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(socialStudiesTabOutput, null).done(function () {
    //        outgoingSocialStudiesContent.style.display = "none";
    //        incomingSocialStudiesContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(socialStudiesTabOutput, null);
    //    });
    //}


    //socialStudiesTab.addEventListener("click", transitionBetweenSocialStudiesContent, false);
    //socialStudiesTabOutput1.style.display = "block";
    //socialStudiesTabOutput2.style.display = "none";


    //function transitionBetweenWordBuildingContent() {
    //    var incomingWordBuildingContent;
    //    var outgoingWordBuildingContent;

    //    // Assign incoming and outgoing
    //    if (wordBuildingTabOutput2.style.display === "none") {
    //        incomingWordBuildingContent = wordBuildingTabOutput2;
    //        outgoingWordBuildingContent = wordBuildingTabOutput1;
    //    } else {
    //        incomingWordBuildingContent = wordBuildingTabOutput1;
    //        outgoingWordBuildingContent = wordBuildingTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(wordBuildingTabOutput, null).done(function () {
    //        outgoingWordBuildingContent.style.display = "none";
    //        incomingWordBuildingContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(wordBuildingTabOutput, null);
    //    });
    //}


    //wordBuildingTab.addEventListener("click", transitionBetweenWordBuildingContent, false);
    //wordBuildingTabOutput1.style.display = "block";
    //wordBuildingTabOutput2.style.display = "none";

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


    function transitionBetweenArtContent() {
        var incomingArtContent;
        var outgoingArtContent;

        // Assign incoming and outgoing
        if (artTabOutput2.style.display === "none") {
            incomingArtContent = artTabOutput2;
            outgoingArtContent = artTabOutput1;
        } else {
            incomingArtContent = artTabOutput1;
            outgoingArtContent = artTabOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(artTabOutput, null).done(function () {
            outgoingArtContent.style.display = "none";
            incomingArtContent.style.display = "block";
            return WinJS.UI.Animation.enterContent(artTabOutput, null);
        });
    }


    artTab.addEventListener("click", transitionBetweenArtContent, false);
    artTabOutput1.style.display = "block";
    artTabOutput2.style.display = "none";


    //function transitionBetweenComputerContent() {
    //    var incomingComputerContent;
    //    var outgoingComputerContent;

    //    // Assign incoming and outgoing
    //    if (computerTabOutput2.style.display === "none") {
    //        incomingComputerContent = computerTabOutput2;
    //        outgoingComputerContent = computerTabOutput1;
    //    } else {
    //        incomingComputerContent = computerTabOutput1;
    //        outgoingComputerContent = computerTabOutput2;
    //    }

    //    // Run the exitContent animation and then the enterContent animation
    //    // Use the recommended offset by leaving the offset argument empty to get the best performance
    //    WinJS.UI.Animation.exitContent(computerTabOutput, null).done(function () {
    //        outgoingComputerContent.style.display = "none";
    //        incomingComputerContent.style.display = "block";
    //        return WinJS.UI.Animation.enterContent(computerTabOutput, null);
    //    });
    //}


  
    //computerTabOutput1.style.display = "block";
    //computerTabOutput2.style.display = "none";



    function transitionBetweenPages() {
        // Run the exit page animation on the current page, and then navigate to the new page
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitPage([header, pageContent, footer], null).done(
            function () {
                WinJS.Navigation.navigate("/html/SamplePage.cshtml");
            });
    }


})();

