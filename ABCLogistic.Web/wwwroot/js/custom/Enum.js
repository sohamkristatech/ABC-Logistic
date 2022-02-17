var uploadedEnum = null;

$(function () {
    $("#frmUpdateEnum").on("submit", function () {
        $(".validation-summary-errors ul li").remove();
        $("#frmUpdateEnum").valid();
        var selectedFile = $('#div_upload_pro input[type=file]')[0].files[0];
    });
    $("#frmUpdateEnum").on("submit", function () {
        $(".validation-summary-errors ul li").remove();
        $("#frmUpdateEnum").valid();
        var selectedFile = $('#div_upload_pro input[type=file]')[0].files[0];
    });
});

$(document).on("change", "#enumFile", function () {
    var fileUpload = $("#enumFile").get(0);
    var files = fileUpload.files;

    var ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();
    if (!SearchExt(ext.toLowerCase(), imageExtensions)) {
        DisplayErrorMsg(uploadValidFileMsg, "#display-messages");
        var $li = $("<li class='error'/>").html(uploadValidFileMsg);
        $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
        $(".validation-summary-errors ul").append($li);
        $('html, body').animate({ scrollTop: 0 }, 500);
        $('.upload_photo_btn #enumFile').val('');
        e.preventDefault();
    }
    else {
        if ($(".validation-summary-errors ul li:visible").length < 1) {
            $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
        }
        var fileData = new FormData();
        for (var i = 0; i < files.length; i++) {
            var filesizemb = ((files[i].size) / 1024) / 1024;
            if (filesizemb > maxPhotoSizeMB) {
                DisplayErrorMsg(maxFileSizeMsg, "#display-messages");
                var $li = $("<li class='error'/>").html(maxFileSizeMsg);
                $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
                $(".validation-summary-errors ul").append($li);
                $('.upload_photo_btn #enumFile').val('');
                $('html, body').animate({ scrollTop: 0 }, 500);
                e.preventDefault();
                return false;
            }
            else {
                fileData.append(files[i].name, files[i]);
                $(".validation-summary-errors ul li.error").remove();
                if ($(".validation-summary-errors ul li:visible").length < 1) {
                    $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                }
            }
        }
        if (files.length > 0) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $("#div_upload_pro").addClass("displaynone");
                $("#div_upload_pro_img").removeClass("displaynone");
                $("#div_crop_pro").removeClass("displaynone");
                $("#has_crop_image_Pro").val("false");
                try {
                    $('#upload_pro_img').removeClass("croppie-container").html("");
                    var el = document.getElementById('upload_pro_img');
                    $resize = $(el).croppie({
                        showZoomer: true,
                        enableOrientation: true,
                        mouseWheelZoom: 'ctrl',
                        viewport: {
                            width: imgWidth,
                            height: imgHeight,
                            type: 'squre'
                        },
                        boundary: {
                            width: cropWidth,
                            height: cropHeight
                        }
                    });

                    $resize.croppie('bind', {
                        url: e.target.result
                    });
                } catch (e) {
                    // nothing
                }
                $(".btnaction").addClass("disable-click");
                $(".form-actions").hide();
                $("#btn_save_pro").bind("click", function (event) {
                    uploadedEnum = $("#enumFile").val();
                    $resize.croppie("result").then(function (canvas) {
                        var points = $resize.croppie('get');
                        if (points != undefined) {
                            $("#XCoordinate_pro").val(points.points[0]);
                            $("#YCoordinate_pro").val(points.points[1]);
                            $("#WCoordinate_pro").val(points.points[2] - points.points[0]);
                            $("#HCoordinate_pro").val(points.points[3] - points.points[1]);
                        }
                        $('#pro_img').attr('src', canvas).parent().removeClass("displaynone");
                        $('#div_pro_view').hide();
                        $('<i class="fa fa-times-circle remove_profile" onclick="RemoveEnum()"></i>').insertAfter('#pro_img');
                        $("#div_enum").removeClass("displaynone");
                        $("#div_upload_pro").removeClass("displaynone");
                        $("#div_upload_pro_img").addClass("displaynone");
                        $("#div_crop_pro").addClass("displaynone");
                        $("#has_crop_image_Pro").val("true");
                        $(".btnaction").removeClass("disable-click");
                        $(".form-actions").show();
                        $("#btn_save_pro").unbind("click");
                        $('#div_pro_view').hide().removeClass('d-block');
                        $resize = null;
                    });
                    $(this).unbind(event);
                });
            };
            reader.readAsDataURL(files[0]);
        }
        if ($("#partial_msg .alret-close").length > 0) {
            closemsg($("#partial_msg .alret-close"), true);
        }
        RemoveMsg("#display-messages");
    }
});

function DeleteImg(id) {
    if (confirm("Are you sure? Do you want to delete this image?")) {
        $.post(SiteUrl + 'Enum/deleteimage', { id: id}, function (data) {
            if (data.Success) {
                console.log(data);
                DisplaySuccessMsg(data.Messages, "#display-messages");
                $("#div_pro_view").remove();
            }
            else {
                DisplayErrorMsg(data.Message, "#display-messages");
                var $li = $("<li/>").html(data.Message);
                $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
                $(".validation-summary-errors ul").append($li);
            }
        });
        return true;
    }
    return false;
}

function RemoveMsg(divId) {
    $(divId).find(".alret-close").trigger("click");
}

function RemoveEnum_Cancel() {
    $('#pro_img').attr('src', "").parent().addClass("displaynone");
    $("#div_enum i").remove();
    $('.upload_photo_btn #enumFile').val('');
    $("#div_enum").addClass("displaynone");
    $("#div_upload_pro").removeClass("displaynone");
    $("#div_upload_pro_img").addClass("displaynone");
    $("#div_crop_pro").addClass("displaynone");
    $("#upload_pro_img").removeClass("croppie-container");
    $("#upload_pro_img").html('');
    $(".btnaction").removeClass("disable-click");
    $('#div_pro_view').show().addClass('d-block');
    $(".form-actions").show();
}

function RemoveEnum() {
    $('#pro_img').attr('src', "").parent().addClass("displaynone");
    $('.upload_photo_btn #enumFile').val('');
    $('#pro_img').parent().find("i").remove();
    $("#upload_pro_img").removeClass("croppie-container");
    $("#upload_pro_img").html('');
    $('#div_pro_view').show().addClass('d-block');
    uploadedEnum = null;
}