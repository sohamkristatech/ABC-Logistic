////$("#btnSubmit").click(function () {
////    //if ($("#frmUser").valid() && !isEmailDup && !isUserDup) {
////    //    if (document.getElementById("Password").value != document.getElementById("ConfirmPassword").value) {
////    //        return false;
////    //    }
////    //}
////})

function Search() {
    $('#grid').data('kendoGrid').dataSource.page(1);
    $('#grid').data('kendoGrid').dataSource.read();
    $('#grid').data('kendoGrid').refresh();
}

function FilterData() {
    return {
        FirstName: $("#txtFNSearch").val(),
        LastName: $("#txtLNSearch").val()
    };
}
$("#StandardId").on("change", function () {
    var standardId = $(this).val();
    debugger 
    $.post(SiteUrl + "Student/DivisionDropDownBinding/", { standardId: standardId }, function (data) {
        if (data != "") {
            $("#DivisionId").empty();
            if (data.Success && data.EduList != undefined && data.EduList != null) {
                $("#DivisionId").append(`<option value='' selected> Select Division </option>`);
                $.each(data.EduList, function (index, list) {
                    $("#DivisionId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                });
            }
        }
    });
});