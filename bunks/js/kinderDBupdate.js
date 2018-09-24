$(function () {
    $('#dialog-ReportForm-add').dialog({
        autoOpen: false,
        modal: true,
        height: 650,
        width: 900,
        buttons: {
            'Add Report': function () {
                $.ajax({
                    type: "POST",
                    url: $("#add-PracticalReport-form").attr('action'),
                    data: $("#add-PracticalReport-form").serialize(),
                    dataType: "text/plain",

                    success: function (response) {
                       
                        $('#dialog-ReportForm-add').dialog('close');
                       
                    },
                    error: function (response) {

                        $('#dialog-ReportForm-add').dialog('close');
                    }
                });
            },
            Cancel: function () {
                $('#dialog-ReportForm-add').dialog('close');
            }
        }
    });



    $('#add-Report')
               .button().click(function () {

                   $('#dialog-ReportForm-add').dialog('open');
               });

    function response() {
         
    }
});


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



    $('#add-ExtraCurricular')
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