$("#StandardId").on("change",
    function () {
        var standardId = $(this).val();
        $.post(SiteUrl + "StudentExam/DivisionDropDownBinding/",
            { standardId: standardId },
            function (data) {
                if (data != "") {
                    $("#DivisionId").empty();
                    if (data.Success && data.EduList != undefined && data.EduList != null) {
                        $("#DivisionId").append(`<option value='' > Select division </option>`);
                        $.each(data.EduList,
                            function (index, list) {
                                $("#DivisionId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                            });
                    }
                }
            });
    });

$("#DivisionId").on("change",
    function () {
        $('#grid').data('kendoGrid').dataSource.page(1);
    });

function FilterData() {
    return {
        sectionId: $("#DivisionId").val(),
        timeTableTypeId: $('#TimeTableTypeId').val()
    };
}

function dataBound() {
    this.expandRow(this.tbody.find("tr.k-master-row").first());
}