
function enableDropDown() {
    $('#QuestionTypeId').attr('disabled', false);
}

//$(document).on("click", "#frmStep1 #FirstLanguage .addSection button", function () {
//    var div = $("<div class='form-row language-list' />");
//    var cloneHtml = $("#FirstLanguage").clone();
//    cloneHtml.find("label").remove();
//    cloneHtml.find("#LanguageId").val("");
//    cloneHtml.find("#LanguageLevel").val("");
//    cloneHtml.find("#TutorLanguageId").val("");
//    cloneHtml.find(".addSection .f-add-lang-btn").addClass("mt-0");
//    cloneHtml.find(".addSection .f-add-lang-btn").html('<button type="button" onclick="RemoveLngHtml(this)" class="btn btn-outline-primary"><i class="fas fa-trash"></i></button>');
//    div.append(cloneHtml.html());
//    $("#frmStep1 #language-section").append(div);
//});

$(document).on("click", "#btnPlus", function (e) {
    var div = $("<div class='row' />");

    var cloneHtml = $("#div_option").find(".row").last().clone();
    cloneHtml.find("#Title").val("");
    cloneHtml.find(".addSection .f-add-lang-btn").addClass("mt-0");
    cloneHtml.find(".addSection .f-add-lang-btn").html('<button type="button" onclick="RemoveLngHtml(this)" class="btn btn-outline-rimary"><i class="fas fa-trash"></i></button>');

    var temp = $("#div_option").find(".btn");
    temp.each(function () {
        $(this).remove();
    });

    var addbutton = $("#div_option").find(".addsection");
    var i = 0;
    addbutton.each(function () {
        $(this).append('<button type="button" id="remove_'
            + i +
            '" onclick="RemoveLngHtml(this.id);" class="btn btn-outline-primary"><i class="fa fa-trash"></i></button>');
        i++;
    });

    div.append(cloneHtml.html());
    $("#div_option").append(div);
});

function RemoveLngHtml(e) {
    $("#" + e).parent().closest(".row").remove();
}