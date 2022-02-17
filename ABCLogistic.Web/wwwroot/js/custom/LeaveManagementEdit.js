$(function () {
    const dtCurrent = new Date();
    $("#LeaveFromDate").datetimepicker({
        format: "DD/MM/YYYY",
        maxDate: dtCurrent,
        useCurrent: true
    });
    $("#LeaveToDate").datetimepicker({
        maxDate: dtCurrent,
        format: "DD/MM/YYYY",
        useCurrent: true //Important! See issue #1075
    });

    $("#LeaveFromDate").on("dp.change",
        function (e) {
            $("#LeaveToDate").data("DateTimePicker").minDate(e.date);
        });
    $("#LeaveToDate").on("dp.change",
        function (e) {
            $("#LeaveFromDate").data("DateTimePicker").maxDate(e.date);
        });
});