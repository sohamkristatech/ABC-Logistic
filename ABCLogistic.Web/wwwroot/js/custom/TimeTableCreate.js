$("#StandardId").on("change",
    function () {
        var standardId = $(this).val();
        $.post(SiteUrl + "StudentExam/DivisionDropDownBinding/",
            { standardId: standardId },
            function (data) {
                if (data != "") {
                    $("#DivisionId").empty();
                    if (data.Success && data.EduList != undefined && data.EduList != null) {
                        $("#DivisionId").append(`<option value='' >- Select division -</option>`);
                        $.each(data.EduList,
                            function (index, list) {
                                $("#DivisionId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                            });
                    }
                }
            });
    });

$("#StandardId").on("change",
    function () {
        var standardId = $(this).val();
        $.post(SiteUrl + "TimeTable/AjaxBindingForTutor/",
            { standardId: standardId },
            function (data) {
                if (data != "") {
                    $("#TutorId").empty();
                    if (data.Success && data.EduList != undefined && data.EduList != null) {
                        $("#TutorId").append(`<option value='' >- Select tutor -</option>`);
                        $.each(data.EduList,
                            function (index, list) {
                                $("#TutorId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                            });
                    }
                }
            });
    });

$("#TutorId").on("change",
    function () {
        var tutorId = $(this).val();
        $.post(SiteUrl + "TimeTable/AjaxBindingForSubject/",
            { standardId: $("#StandardId").val(), tutorId: tutorId },
            function (data) {
                if (data != "") {
                    $("#SubjectId").empty();
                    if (data.Success && data.EduList != undefined && data.EduList != null) {
                        $("#SubjectId").append(`<option value='' >- Select subject -</option>`);
                        $.each(data.EduList,
                            function (index, list) {
                                $("#SubjectId").append(`<option value='${list.Id}'>${list.Name} </option>`);
                            });
                    }
                }
            });
    });