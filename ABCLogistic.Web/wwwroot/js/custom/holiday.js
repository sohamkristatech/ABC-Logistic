$(function () {
    $('#StrStartDate').datetimepicker({
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

    $('#StrEndDate').datetimepicker({
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

    $('#StrStartDate').data("DateTimePicker").minDate(new Date());
    $('#StrEndDate').data("DateTimePicker").minDate(new Date());

    $("#StrStartDate").on("dp.change", function (e) {
        $('#StrEndDate').data("DateTimePicker").minDate(e.date);
    });
    $("#StrEndDate").on("dp.change", function (e) {
        $('#StrStartDate').data("DateTimePicker").maxDate(e.date);
    });
});