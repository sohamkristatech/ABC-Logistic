$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));

        $.ajax({
            type: 'GET',
            contentType: "application/json;",
            url: SiteUrl + "Home/BindStatustic",
            data: {
                StartDate: start.format('DD/MM/YYYY'),
                EndDate: end.format('DD/MM/YYYY')
            },
            success: function (data) {
                $("#lblDoctors").text(data.Data.TotalDoctor);
                $("#lblPatent").text(data.Data.TotalPatient);
                $("#lblAppointments").text(data.Data.TotalAppointment);
            },
            error: function () {

            }
        });
    }

    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    //cb(start, end);

    
});