// For an introduction to the Grid template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=232446
(function () {
    "use strict";


    var app = WinJS.Application;
    var nav = WinJS.Navigation;
    var sched = WinJS.Utilities.Scheduler;
    var ui = WinJS.UI;

   

    app.onready = function () {

        nav.history = app.sessionState.history || {};
        nav.history.current.initialPlaceholder = true;
        var host = document.getElementById("app");
        function navBarInvoked(ev) {
    var navbarCommand = ev.detail.navbarCommand;
    log(navbarCommand.label + " NavBarCommand invoked<br/>");
}

function log(msg) {
    var statusEl = document.getElementById("status");
    statusEl.innerHTML += msg;
    statusEl.scrollTop = statusEl.scrollHeight;
}

function toggleNavBarVisibility(ev) {
    document.getElementById('createNavBar').winControl.open();
}

WinJS.Namespace.define("Sample", {
    navBarInvoked: WinJS.UI.eventHandler(navBarInvoked)
});
   
        var p = WinJS.UI.processAll().then(function () {

           WinJS.UI.Animation.enterPage(host.children)

            document.body.onkeyup = function (e) {
              
                WinJS.Application.queueEvent({ type: 'keyUpTriggered', keyCode: e.keyCode,
                    handled: false

                });
                document.getElementById('toggleNavBar').addEventListener('click', toggleNavBarVisibility);
            };
            return nav.navigate(nav.location || Application.navigator.home, nav.state);
        }).then
        (function () 
        {
              var splitView = document.querySelector(".splitView").winControl;
            new WinJS.UI._WinKeyboard(splitView.paneElement = window.innerWidth <= 768); 



        });
    };

      app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
        // You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
        // If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
    };

    app.start();
})();
