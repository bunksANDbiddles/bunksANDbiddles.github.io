$(function () {



    $('#dialogAcademicForm-edit').dialog({
        autoOpen: false,
        modal: true,
        height: 650,
        width: 900,
        buttons: {
            'Edit Score': function () {
                $.ajax({
                    type: "POST",
                    url: $("#edit-marks-form").attr('action'),
                    data: $("#edit-marks-form").serialize(),
                    dataType: "text/plain",
                    success: function (response) {
                        $('#dialogAcademicForm-edit').dialog('close');
                        $("#grid").load('/Default/?page=' + page + ' #grid', function () {
                            var id = $('#edit-paceResultID').val();
                            $('#' + id).parent('td').parent('tr')
                                    .effect("highlight", {}, 2000);
                        });
                    },
                    error: function (response) {
                        alert(response);
                        $('#dialogAcademicForm-edit').dialog('close');
                    }
                });
            },
            Cancel: function () {
                $('#dialogAcademicForm-edit').dialog('close');
            }
        }// end buttons
    });


    //still need to retain sort and sortdir
    var page = 1;
    $('tfoot a').live('click', function () {
        page = $(this).text();
    });


    $('.edit-marks').live('click', function () {
        $.getJSON('/Methods/GetMarks/' + $(this).attr('id'), function (data) {
            var paceResult = data;
            $('#edit-paceNo').val(paceResult.paceNo);
            $('#edit-subjectName').val(paceResult.subjectName);
            $('#edit-teacherName').val(paceResult.teacherName);
            $('#edit-admissionNo').val(paceResult.admissionNo);
            $('#edit-score').val(paceResult.score);
            $('#edit-SupervisorID').val(paceResult.SupervisorID);
            $('#edit-studentID').val(paceResult.studentID);
            $('#edit-paceResultID').val(paceResult.paceResultID);
        });
        $('#dialogAcademicForm-edit').dialog('open');
    });
});