$(function () {
    $('#StrLeaveFromDate').datetimepicker({
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

    $('#StrLeaveToDate').datetimepicker({
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

    $('#StrLeaveFromDate').data("DateTimePicker").minDate(new Date());
    $('#StrLeaveToDate').data("DateTimePicker").minDate(new Date());

    $("#StrLeaveFromDate").on("dp.change", function (e) {
        $('#StrLeaveToDate').data("DateTimePicker").minDate(e.date);
    });
    $("#StrLeaveToDate").on("dp.change", function (e) {
        $('#StrLeaveFromDate').data("DateTimePicker").maxDate(e.date);
    });
});