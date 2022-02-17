
$(document).ready(function () {
    $("#TemplateName").focus();
});

$(function () {
    $("#TemplateName").change(function () {
        if ($("#TemplateName").val().trim().length > 0) {
            var data = { TemplateName: $("#TemplateName").val().trim(), TemplateID: $('#TemplateID').val() };

            var SiteBaseUrl = SiteUrl + "Template/ValidateDuplicateTemplateCombination";
            $.post(SiteBaseUrl, data, function (data) {
                if (data.status == "0") {
                    $("#duplicateRecord").show();
                    $("#btnSubmit").prop("disabled", true);
                }
                else {
                    $("#duplicateRecord").hide();
                    $("#btnSubmit").prop("disabled", false);
                }
            }, "json");
            return false;
        }
    });
});