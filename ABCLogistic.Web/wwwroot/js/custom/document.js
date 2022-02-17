$("#btnSubmit").click(function () {
    $("#frmDocument").valid();
    var link = $("#DocumentLink").val();
    var file = $("#documentFileName").val();
    if (link.length == 0 && file.length == 0) {
        DisplayErrorMsg(["Please fill up either Link or File"], "#display-messages");
        return false;
    }
});

$(function () {
    $('#StrHomeWorkDate').datetimepicker({
        format: 'DD/MM/YYYY',
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-check',
            clear: 'fa fa-trash',
            close: 'fa fa-times'
        },
    });

    $('#StrHomeWorkDate').data("DateTimePicker").datepicker({
        "setDate": new Date(),
        "autoclose": true
    });
});

$("#ClassId").on("change", function () {
    var standardId = $(this).val();
    $.post(SiteUrl + "StudentExam/DivisionDropDownBinding/", { standardId: standardId }, function (data) {
        if (data != "") {
            $("#DivisionId").empty();
            if (data.Success && data.EduList != undefined && data.EduList != null) {
                $("#DivisionId").append(`<option value=''> Select division </option>`);
                $.each(data.EduList, function (index, list) {
                    $("#DivisionId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                });
            }
        }
    });
});

$(document).on("change", "#documentFileName", function () {
    var fileUpload = $("#documentFileName").get(0);
    var files = fileUpload.files;

    var ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();
    if (!SearchExt(ext.toLowerCase(), AllowExtensions)) {
        DisplayErrorMsg([uploadValidFileMsg], "#display-messages");
        var $li = $("<li class='error'/>").html(uploadValidFileMsg);
        $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");
        $(".validation-summary-errors ul").append($li);
        $('html, body').animate({ scrollTop: 0 }, 500);
        $('#documentFileName').val('');
        e.preventDefault();
    }
    else {
        if ($(".validation-summary-errors ul li:visible").length < 1) {
            $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        }
        var fileData = new FormData();
        for (var i = 0; i < files.length; i++) {
            var filesizemb = ((files[i].size) / 1024) / 1024;
            if (filesizemb > maxFileSizeMB) {
                DisplayErrorMsg([maxFileSizeMsg], "#display-messages");
                var $li = $("<li class='error'/>").html(maxFileSizeMsg);
                $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");
                $(".validation-summary-errors ul").append($li);
                $('#documentFileName').val('');
                $('html, body').animate({ scrollTop: 0 }, 500);
                e.preventDefault();
                return false;
            }
            else {
                fileData.append(files[i].name, files[i]);
                $(".validation-summary-errors ul li.error").remove();
                if ($(".validation-summary-errors ul li:visible").length < 1) {
                    $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                }
            }
        }
        if ($("#partial_msg .alret-close").length > 0) {
            closemsg($("#partial_msg .alret-close"), true);
        }
        RemoveMsg("#display-messages");
    }
});

function RemoveMsg(divId) {
    $(divId).find(".alret-close").trigger("click");
}