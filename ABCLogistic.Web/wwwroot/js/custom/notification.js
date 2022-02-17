$(document).ready(function () {
    var lastSubjectSelected = '';
    var currentSelection = '';

    $('.select-frontuser').multiselect({
        selectAll: true,
        columns: 1,
        search: true,
        values: 2,
        includeSelectAllOption: true,
        maxHeight: 250,
        texts: {
            placeholder: $(".select-frontuser").attr("data-placeholder"),
        },
        onOptionClick: function (element, option) {
            var maxSelect = 100;
            if ($(element).val().length > maxSelect) {
                if ($(option).is(':checked')) {
                    var thisVals = $(element).val();

                    thisVals.splice(
                        thisVals.indexOf($(option).val()), 1
                    );

                    $(element).val(thisVals);

                    $(option).prop('checked', false).closest('li')
                        .toggleClass('selected');
                }
            }
            else if ($(element).val().length == maxSelect) {
                $(element).next('.ms-options-wrap')
                    .find('li:not(.selected)').addClass('disabled')
                    .find('input[type="checkbox"]')
                    .attr('disabled', 'disabled');
            }
            else {
                $(element).next('.ms-options-wrap')
                    .find('li.disabled').removeClass('disabled')
                    .find('input[type="checkbox"]')
                    .removeAttr('disabled');
            }

            currentSelection = $(".select-frontuser").val().join(",");
        },
        searchOptions: {
            delay: 0,
            onSearch: function (element, option) {
                setTimeout(function () {
                    var opt_count = $(element).parent().find(".ms-options-wrap").find(".ms-options ul li:not(.ms-hidden)").length;;
                    if (opt_count == 0) {
                        if ($(element).parent().find(".ms-options-wrap").find(".ms-options ul #not_found_li").length < 1) {
                            var not_found_element = $("<li id='not_found_li'><label>Not found</label></li>")
                            $(element).parent().find(".ms-options-wrap").find(".ms-options ul").append(not_found_element);
                        }
                        else {
                            $(element).parent().find(".ms-options-wrap").find(".ms-options ul #not_found_li").removeClass("ms-hidden");
                        }
                    }
                    else {
                        $(element).parent().find(".ms-options-wrap").find(".ms-options ul #not_found_li").remove();
                    }
                }, 10);
            }
        }
    });
});

$("#TemplateId").on("change", function () {
    var templateId = $(this).val();
    if (templateId > 0) {
        $.post(SiteUrl + "Notification/GetNotificationTemplateByTemplateId", { templateId: templateId }, function (data) {
            if (data.Success) {
                $("#NotificationTitle").val(data.TemplateData.NotificationTitle).attr('readonly', true);
                $("#NotificationMessage").val(data.TemplateData.NotificationMessage).attr('readonly', true);
            }
        });
    }
    else {
        $("#NotificationTitle").val("").attr('readonly', false);
        $("#NotificationMessage").val("").attr('readonly', false);
    }
});

$("#btnSubmit").click(function () {
    $("#frmNotification").valid();
    var ddlFrontuser = $("#SelectedFrontUser").val();
    if (ddlFrontuser.length == 0) {
        $('html, body').animate({ scrollTop: 0 }, 500);
        DisplayErrorMsg(["Please select front user and template"], "#display-message");
        return false;
    }
});