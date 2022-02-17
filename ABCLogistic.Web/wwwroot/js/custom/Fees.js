$("#StandardId").on("change",
    function () {
        $('#grid').data('kendoGrid').dataSource.page(1);
    });

function FilterData() {
    return {
        standardId: $("#StandardId").val()
    };
}