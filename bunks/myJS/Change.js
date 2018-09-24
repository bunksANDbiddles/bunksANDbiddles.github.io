      function transitionToHistory() {
        var incomingHistory;
        var outgoingHistory;

        // Assign incoming and outgoing
        if (historyOutput2.style.display === "none") {
            
            incomingHistory = historyOutput2;
            outgoingHistory = historyOutput1;
        } else {
       
            incomingHistory = historyOutput1;
            outgoingHistory = historyOutput2;
        }

        // Run the exitContent animation and then the enterContent animation
        // Use the recommended offset by leaving the offset argument empty to get the best performance
        WinJS.UI.Animation.exitContent(historyOutput, null).done(function () {
            outgoingHistory.style.display = "none";
            incomingHistory.style.display = "block";

            return WinJS.UI.Animation.enterContent(historyOutput, null);
        });
    }
    
    history.addEventListener("click", transitionToHistory, false);
    historyOutput1.style.display = "block";
    historyOutput2.style.display = "none";