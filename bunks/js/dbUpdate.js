   // academic pace result per child per supervisor js code to update pace results
$(function () {
    $('#dialogAcademicForm').dialog({
        autoOpen: false,
        modal: true,
        height: 650,
        width: 900,
        buttons: {
            'Add Marks': function () {
                $.ajax({
                    type: "POST",
                    url: $("#add-marks-form").attr('action'),
                    data: $("#add-marks-form").serialize(),
                    dataType: "text/plain",
                    style: "win-button",
                    success: function (response) {
                      
                        $('#dialogAcademicForm').dialog('close');

                    },
                    error: function (response) {

                        $('#dialogAcademicForm').dialog('close');
                    }
                });
            },

            Cancel: function () {
                $('#dialogAcademicForm').dialog('close');
            }
        }
    });



    $('#add-mark.win-button')
               .button().click(function () {
                   $('#dialogAcademicForm').dialog('open');
               });
});


// on window resize run function
$(window).resize(function () {
    fluidDialog();
});

// catch dialog if opened within a viewport smaller than the dialog width
$(document).on("dialogopen", ".ui-dialog", function (event, ui) {
    fluidDialog();
});

function fluidDialog() {
    var $visible = $(".ui-dialog:visible");
    // each open dialog
    $visible.each(function () {
        var $this = $(this);
        var dialog = $this.find(".ui-dialog-content").data("ui-dialog");
        // if fluid option == true
        if (dialog.options.fluid) {
            var wWidth = $(window).width();
            // check window width against dialog width
            if (wWidth < (parseInt(dialog.options.maxWidth) + 50))  {
                // keep dialog from filling entire screen
                $this.css("max-width", "90%");
            } else {
                // fix maxWidth bug
                $this.css("max-width", dialog.options.maxWidth + "px");
            }
            //reposition dialog
            dialog.option("position", dialog.options.position);
        }
    

  });

}

       // extra curricular report js code to update report
$(function () {
    $('#dialogExtraCurricularReportForm').dialog({
        autoOpen: false,
        modal: true,
        height: 650,
        width: 900,
        buttons: {
            'Add Report': function () {
                $.ajax({
                    type: "POST",
                    url: $("#add-extraCurricularReport-form").attr('action'),
                    data: $("#add-extraCurricularReport-form").serialize(),
                    dataType: "text/plain",

                    success: function (response) {
                       
                        $('#dialogExtraCurricularReportForm').dialog('close');
                       
                    },
                    error: function (response) {

                        $('#dialogExtraCurricularReportForm').dialog('close');
                    }
                });
            },
            Cancel: function () {
                $('#dialogExtraCurricularReportForm').dialog('close');
            }
        }
    });



    $('#add-Report')
               .button().click(function () {

                   $('#dialogExtraCurricularReportForm').dialog('open');
               });

    function response() {
         alert("marks have been posted, thank you");
    }
});




   // generAL COMMENT report js code to update report
$(function () {
    $('#dialogCommentReportForm').dialog({
        autoOpen: false,
        modal: true,
        height: 650,
        width: 900,
        buttons: {
            'Add Comment': function () {
                $.ajax({
                    type: "POST",
                    url: $("#add-commentReport-form").attr('action'),
                    data: $("#add-commentReport-form").serialize(),
                    dataType: "text/plain",

                    success: function (response) {
                       
                        $('#dialogCommentReportForm').dialog('close');
                       
                    },
                    error: function (response) {

                        $('#dialogCommentReportForm').dialog('close');
                    }
                });
            },
            Cancel: function () {
                $('#dialogCommentReportForm').dialog('close');
            }
        }
    });



    $('#add-Comment')
               .button().click(function () {

                   $('#dialogCommentReportForm').dialog('open');
               });

    function response() {
         alert("marks have been posted, thank you");
    }
});


$(function () {
    $('#dialogAbsentDays').dialog({
        autoOpen: false,
        modal: true,
        height: 400,
        width: 360,
        buttons: {
            'Add Absent Days': function () {
                $.ajax({
                    type: "POST",
                    url: $("#add-absentDays-form").attr('action'),
                    data: $("#add-absentDays-form").serialize(),
                    dataType: "text/plain",
                    style: "win-button",
                    success: function (response) {
                      
                        $('#dialogAbsentDays').dialog('close');

                    },
                    error: function (response) {

                        $('#dialogAbsentDays').dialog('close');
                    }
                });
            },

            Cancel: function () {
                $('#dialogAbsentDays').dialog('close');
            }
        }
    });



    $('#add-DaysAbsent.win-button')
               .button().click(function () {
                   $('#dialogAbsentDays').dialog('open');
               });
});