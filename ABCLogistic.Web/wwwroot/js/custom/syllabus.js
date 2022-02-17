$("#btnSubmit").click(function () {
    $("#frmSyllabus").valid();
    var link = $("#Link").val();
    var file = $("#syllabusFile").val();
    if (link.length == 0 && file.length == 0) {
        DisplayErrorMsg(["Please fill up either Link or File"], "#display-messages");
        return false;
    }
});

$(document).on("change", "#syllabusFile", function () {
    var fileUpload = $("#syllabusFile").get(0);
    var files = fileUpload.files;

    var ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();
    if (!SearchExt(ext.toLowerCase(), AllowExtensions)) {
        DisplayErrorMsg([uploadValidFileMsg], "#display-messages");
        var $li = $("<li class='error'/>").html(uploadValidFileMsg);
        $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");
        $(".validation-summary-errors ul").append($li);
        $('html, body').animate({ scrollTop: 0 }, 500);
        $('#syllabusFile').val('');
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
                $('#syllabusFile').val('');
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