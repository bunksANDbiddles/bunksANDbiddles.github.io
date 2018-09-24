//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";

    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    
    var splitView;


    WinJS.Namespace.define("ateSpeech", {
        paneHiddenInitially: false
    });

     app.onready = function () {
     nav.history = app.sessionState.history || {};
     nav.history.current.initialPlaceholder = true;          
    

     WinJS.UI.processAll().done(function () {
    var splitView = document.querySelector(".splitView").winControl;
    new WinJS.UI._WinKeyboard(splitView.paneElement); // Temporary workaround: Draw keyboard focus visuals on NavBarCommands
});
     var p = ui.processAll().then(function () {
         document.body.onkeyup = function (e) {
             WinJS.Application.queueEvent({ type: 'keyUpTriggered', keyCode: e.keyCode,
     handled: false });
         };
    return nav.navigate(nav.location || Application.navigator.home, nav.state);
     }).then(function () {
       
     });
};

    function activated(eventObject) {
        var activationKind = eventObject.detail.kind;
        var activatedEventArgs = eventObject.detail.detail;

        SdkSample.paneHiddenInitially = window.innerWidth <= 768;
        var p = WinJS.UI.processAll().
            then(function () {
                splitView = document.querySelector("#root").winControl;
                splitView.onbeforeclose = function () { WinJS.Utilities.addClass(splitView.element, "hiding"); };
                splitView.onafterclose = function () { WinJS.Utilities.removeClass(splitView.element, "hiding"); };
                window.addEventListener("resize", handleResize);
                handleResize();

                var buttons = document.querySelectorAll(".splitViewButton");
                for (var i = 0, len = buttons.length; i < len; i++) {
                    buttons[i].addEventListener("click", handleSplitViewButton);
                }

                // Navigate to either the first scenario or to the last running scenario
                // before suspension or termination.
                var url = SdkSample.scenarios.getAt(0).url;
                var initialState = {};
                var navHistory = app.sessionState.navigationHistory;
                if (navHistory) {
                    nav.history = navHistory;
                    url = navHistory.current.location;
                    initialState = navHistory.current.state || initialState;
                }
                initialState.activationKind = activationKind;
                initialState.activatedEventArgs = activatedEventArgs;
                nav.history.current.initialPlaceholder = true;
                return nav.navigate(url, initialState);
            });

        // Calling done on a promise chain allows unhandled exceptions to propagate.
        p.done();

        // Use setPromise to indicate to the system that the splash screen must not be torn down
        // until after processAll and navigate complete asynchronously.
        eventObject.setPromise(p);
    }

    function navigating(eventObject) {
        var url = eventObject.detail.location;
        var host = document.getElementById("mainHost");
        // Call unload and dispose methods on current scenario, if any exist
        if (host.winControl) {
            host.winControl.unload && host.winControl.unload();
            host.winControl.dispose && host.winControl.dispose();
        }
        WinJS.Utilities.disposeSubTree(host);
        WinJS.Utilities.empty(host);
        WinJS.log && WinJS.log("", "", "status");

        var p = WinJS.UI.Pages.render(url, host, eventObject.detail.state).
            then(function () {

                   WinJS.UI.Animation.enterPage(host.children)
                var navHistory = nav.history;
                app.sessionState.navigationHistory = {
                    backStack: navHistory.backStack.slice(0),
                    forwardStack: navHistory.forwardStack.slice(0),
                    current: navHistory.current
                };
                app.sessionState.lastUrl = url;
            });
        p.done();
        eventObject.detail.setPromise(p);
    }

    function handleSplitViewButton() {
        splitView.paneOpened = !splitView.paneOpened;
    }

    function handleResize() {
        if (window.innerWidth > 768) {
            splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.none;
            splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.inline;
        } else {
            splitView.closedDisplayMode = WinJS.UI.SplitView.ClosedDisplayMode.none;
            splitView.openedDisplayMode = WinJS.UI.SplitView.OpenedDisplayMode.overlay;
            splitView.closePane();
        }
    }

    nav.addEventListener("navigating", navigating);
    app.addEventListener("activated", activated, false);
    app.start();
})();

