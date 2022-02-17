var id = $("#Id").val() != undefined ? $("#Id").val() : 0;
var _NotConfirmed = "Not Confirmed";
var _Confirmed = "Confirmed";
var _PasswordNotMatch = "Password and confirmed password do not match.";
function funCofirmPassword() { document.getElementById("Password").value.length > 0 && document.getElementById("ConfirmPassword").value.length > 0 && document.getElementById("Password").value != document.getElementById("ConfirmPassword").value ? (document.getElementById("spanConfirm").innerHTML = _PasswordNotMatch, document.getElementById("spanConfirm").style.color = "red") : document.getElementById("Password").value.length > 0 && document.getElementById("ConfirmPassword").value.length == 0 ? (document.getElementById("spanConfirm").innerHTML = _NotConfirmed, document.getElementById("spanConfirm").style.color = "red") : (document.getElementById("spanConfirm").innerHTML = _Confirmed, document.getElementById("spanConfirm").style.color = "green") }
jQuery(document).ready(function () { $("#Password").keyup(function () { $("#passComment").html(passwordStrength($("#Password").val(), $("#Username").val())); document.getElementById("passComment").style.color = $("#passComment").html() == "&nbsp;&nbsp;Too short" || $("#passComment").html() == "&nbsp;&nbsp;Average" ? "red" : "green" }) }); $(document).ready(function () { document.getElementById("Username")/*.focus()*/ }); $(function () { $("#Password").change(function () { return document.getElementById("Password").value.length > 0 ? (document.getElementById("spanConfirm").innerHTML = _NotConfirmed, document.getElementById("spanConfirm").style.color = "red") : document.getElementById("spanConfirm").innerHTML = "", !1 }) })
$(document).ready(function () {
    $("#Phone").mask("(999) 999-9999");
});
$("#btnSubmit").click(function () {
    if ($("#frmUser").valid() && !isEmailDup && !isUserDup) {
        if (document.getElementById("Password").value != document.getElementById("ConfirmPassword").value) {
            return false;
        }
        if (isEmailDup || isUserDup) {
            if ($(".validation-summary-errors ul li#user-name-error").length < 1 && isUserDup) {
                var $li = $("<li id='user-name-error'/>").html(userDupMessage);
                $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
                $(".validation-summary-errors ul").append($li);
            }
            if ($(".validation-summary-errors ul li#email-name-error").length < 1 && isEmailDup) {
                var $li = $("<li id='email-name-error'/>").html(emailDupMessage);
                $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
                $(".validation-summary-errors ul").append($li);
            }
            return false;
        }
    }
    else {
        if ($(".validation-summary-errors ul li#user-name-error").length < 1 && isUserDup) {
            var $li = $("<li id='user-name-error'/>").html(userDupMessage);
            $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
            $(".validation-summary-errors ul").append($li);
        }
        if ($(".validation-summary-errors ul li#email-name-error").length < 1 && isEmailDup) {
            var $li = $("<li id='email-name-error'/>").html(emailDupMessage);
            $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
            $(".validation-summary-errors ul").append($li);
        }
        //e.preventdefault()
        return false;
    }
})

var isUserDup = false;
var isEmailDup = false;
var userDupMessage = "";
var emailDupMessage = "";

//function IsUserNameExists() {
//    if ($("#Username").val().trim().length > 0) {
//        var n = SiteUrl + "User/ValidateDuplicateUser",
//            t = { username: $("#Username").val().trim(), Id: id };
//        $.post(n, t, function (n) {
//            $(".validation-summary-errors ul li#user-name-error").remove();
//            if (n.Status) {
//                isUserDup = true;
//                userDupMessage = n.Message;
//                if ($(".validation-summary-errors ul li#user-name-error").length < 1) {
//                    var $li = $("<li id='user-name-error'/>").html(n.Message);
//                    $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
//                    $(".validation-summary-errors ul").append($li);
//                }
//            }
//            else {
//                isUserDup = false;
//                if ($(".validation-summary-errors ul li:visible").length < 1) {
//                    $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
//                }
//            }
//        }, "json")
//    }
//}

function IsUserEmailExists() {
    if ($("#Username").val().trim().length > 0) {
        var n = SiteUrl + "User/ValidateDuplicateEmail",
            t = { email: $("#Email").val().trim(), Id: id };
        $.post(n, t, function (n) {
            $(".validation-summary-errors ul li#email-name-error").remove();
            if (n.Status) {
                isEmailDup = true;
                emailDupMessage = n.Message;
                if ($(".validation-summary-errors ul li#email-name-error").length < 1) {
                    var $li = $("<li id='email-name-error'/>").html(n.Message);
                    $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
                    $(".validation-summary-errors ul").append($li);
                }
            }
            else {
                isEmailDup = false;
                if ($(".validation-summary-errors ul li:visible").length < 1) {
                    $(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                }
            }
        }, "json")
    }
}

$(function () {
    //$("#Username").focusout(function () {
    //    IsUserNameExists()
    //})

    //$("#Email").focusout(function () {
    //    IsUserEmailExists()
    //})

    $("form input[data-val-remote-url]").on({
        focus: function () {
            $(this).closest('form').validate().settings.onkeyup = false;
        },
        blur: function () {
            $(this).closest('form').validate().settings.onkeyup = $.validator.defaults.onkeyup;
        }
    });
})
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

var uploadedProFile = null;

$(function () {
    $("#frmUser").on("submit", function () {
        $(".validation-summary-errors ul li").remove();
        $("#frmUser").valid();
        //var selectedFile = $('#div_upload_pro input[type=file]')[0].files[0];
    });

    $("#frmUser").on("submit", function () {
        $(".validation-summary-errors ul li").remove();
        $("#frmUser").valid();
        //var selectedFile = $('#div_upload_pro input[type=file]')[0].files[0];
    });
});

$(document).on("change", "#profileFile", function () {
    var fileUpload = $("#profileFile").get(0);
    var files = fileUpload.files;

    var ext = files[0].name.substring(files[0].name.lastIndexOf('.') + 1).toLowerCase();
    if (!SearchExt(ext.toLowerCase(), imageExtensions)) {
        DisplayErrorMsg(uploadValidFileMsg, "#display-messages");
        var $li = $("<li class='error'/>").html(uploadValidFileMsg);
        $(".validation-summary-valid").addClass("validation-summary-errors").removeClass("validation-summary-valid");// 
        $(".validation-summary-errors ul").append($li);
        $('html, body').animate({ scrollTop: 0 }, 500);
        $('.upload_photo_btn #profileFile').val('');
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
                $('.upload_photo_btn #profileFile').val('');
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
                    uploadedProFile = $("#profileFile").val();
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
                        $('<i class="fa fa-times-circle remove_profile" onclick="RemoveProfile()"></i>').insertAfter('#pro_img');
                        $("#div_profile").removeClass("displaynone");
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
        $.post(SiteUrl + 'User/deleteimage', { id: id }, function (data) {
            if (data.Success) {
                DisplaySuccessMsg(data.Message, "#display-messages");
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

function RemoveProfile_Cancel() {
    $('#pro_img').attr('src', "").parent().addClass("displaynone");
    $("#div_profile i").remove();
    $('.upload_photo_btn #profileFile').val('');
    $("#div_profile").addClass("displaynone");
    $("#div_upload_pro").removeClass("displaynone");
    $("#div_upload_pro_img").addClass("displaynone");
    $("#div_crop_pro").addClass("displaynone");
    $("#upload_pro_img").removeClass("croppie-container");
    $("#upload_pro_img").html('');
    $(".btnaction").removeClass("disable-click");
    $('#div_pro_view').show().addClass('d-block');
    $(".form-actions").show();
}

function RemoveProfile() {
    $('#pro_img').attr('src', "").parent().addClass("displaynone");
    $('.upload_photo_btn #profileFile').val('');
    $('#pro_img').parent().find("i").remove();
    $("#upload_pro_img").removeClass("croppie-container");
    $("#upload_pro_img").html('');
    $('#div_pro_view').show().addClass('d-block');
    uploadedProFile = null;
}