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