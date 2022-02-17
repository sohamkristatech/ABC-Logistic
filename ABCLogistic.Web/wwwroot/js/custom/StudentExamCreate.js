$("#StandardId").on("change", function () {
    var standardId = $(this).val();
    $.post(SiteUrl + "StudentExam/DivisionDropDownBinding/", { standardId: standardId }, function (data) {
        if (data != "") {
            $("#DivisionId").empty();
            if (data.Success && data.EduList != undefined && data.EduList != null) {
                $.each(data.EduList, function (index, list) {
                    $("#DivisionId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                });
            }
            Initilize_Multiselect();
        }
    });
});

$(function () {
    $('#DivisionId').multiselect({
        selectAll: true,
        columns: 1,
        search: true,
        values: 2,
        includeSelectAllOption: true,
        maxHeight: 250,
        texts: {
            placeholder: "Select division",
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
        }
    });
});

$(document).ready(function () {
    $("#datetimepicker1").datetimepicker();
});

function Initilize_Multiselect() {
    $('select[multiple]').multiselect('reload');
}