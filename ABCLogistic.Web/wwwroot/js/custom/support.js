function dataBound() {
    this.expandRow(this.tbody.find("tr.k-master-row").first());
}

function FilterData() {
    return {
    };
}

$(document).on('click', '.user-status', function () {
    var getId = $(this).data('id');
    var fid = $(this).data('fid');
    $('#myModal').modal('show');
    $("#dataid").val(getId);
    $("#datafid").val(fid);
});

$(document).on('click', '#sendReplay', function () {
    var supportFrontUserId = $("#dataid").val();
    var description = CKEDITOR.instances['Description'].getData();
    var file = $('#File').prop('files')[0];

    var formData = new FormData();
    formData.append("supportFrontUserId", supportFrontUserId);
    formData.append("description", description);
    formData.append("file", file);

    var isValid = $("#Description").valid();
    if (!isValid) { return false; }

    $.ajax({
        type: "POST",
        url: SiteUrl + "Support/CreateReply",
        //dataType: "mul",
        cache: false,
        processData: false,
        contentType: false,
        data: formData,
        success: function (data) {
            if (data.Success === true) {
                $("#myModal").modal('hide');
                $("#dataid").val("");
                $("#datafid").val("");
                $("#Description").val("");
                DisplaySuccessMsg(data.Messages, "#display-message");
                $('#grid').data('kendoGrid').dataSource.page(1);
            }
            else {
                DisplayErrorMsg(data.Messages, "#display-message");
            }
        },
        error: function (xmlHttpRequest, textStatus, errorThrown) {
        }
    });
});

$(function () {
    $(document).on("click", "#grid tbody .view-more", onClick);
    $(document).on("click", ".support-detail-sub-grid tbody .view-more-details", onDetailClick);
    $(document).on("click", ".support-detail-sub-grid tbody .view-more-detailsReply", onDetailClickReply);
});

function onClick(e) {
    var grid = $("#grid").data("kendoGrid");
    var row = $(e.target).closest("tr");
    var dataItem = grid.dataItem(row);
    if (!row.hasClass("k-state-selected")) {
        $("#detail-form #detail_content").html(dataItem.Description);
        $("#detail-form").modal({
            backdrop: 'static',
            keyboard: false
        }).show();
    }
};

function onDetailClick(e) {
    debugger;
    var row = $(e.target).closest("tr");
    var id = $(row).find('.support-id').html();
    var grid = $(e.target).closest(".k-grid").data("kendoGrid");
    var dataItem = grid.dataItem(row);
    if (!row.hasClass("k-state-selected")) {
        if (typeof dataItem !== 'undefined') {
            if (dataItem.Question != null && dataItem.Question != undefined && dataItem.Question !== "") {
                $("#detail-form #detail_content").html(dataItem.Question);
            } else {
                $("#detail-form #detail_content").html("No Description Found");
            }
        }
        $("#detail-form").modal({
            backdrop: 'static',
            keyboard: false
        }).show();
    }
};

function onDetailClickReply(e) {
    debugger;
    var row = $(e.target).closest("tr");
    var id = $(row).find('.support-id').html();
    var grid = $(e.target).closest(".k-grid").data("kendoGrid");
    var dataItem = grid.dataItem(row);
    if (!row.hasClass("k-state-selected")) {
        if (typeof dataItem !== 'undefined') {
            if (dataItem.Reply != null && dataItem.Reply != undefined && dataItem.Reply !== "") {
                $("#detail-form #detail_content").html(dataItem.Reply);
            } else {
                $("#detail-form #detail_content").html("No Description Found");
            }
        }
        $("#detail-form").modal({
            backdrop: 'static',
            keyboard: false
        }).show();
    }
};

CKEDITOR.replace('Description',
    {
        allowedContent: true,
        extraPlugins: 'easyimage',
        cloudServices_uploadUrl: SiteUrl + 'Support/SaveImage',
        cloudServices_tokenUrl: SiteUrl + 'Support/EditorToken',
        easyimage_styles: {
            gradient1: {
                group: 'easyimage-gradients',
                attributes: {
                    'class': 'easyimage-gradient-1'
                },
                label: 'Blue Gradient',
                icon: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/gradient1.png',
                iconHiDpi: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/hidpi/gradient1.png'
            },
            gradient2: {
                group: 'easyimage-gradients',
                attributes: {
                    'class': 'easyimage-gradient-2'
                },
                label: 'Pink Gradient',
                icon: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/gradient2.png',
                iconHiDpi: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/hidpi/gradient2.png'
            },
            noGradient: {
                group: 'easyimage-gradients',
                attributes: {
                    'class': 'easyimage-no-gradient'
                },
                label: 'No Gradient',
                icon: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/nogradient.png',
                iconHiDpi: 'https://ckeditor.com/docs/ckeditor4/4.16.0/examples/assets/easyimage/icons/hidpi/nogradient.png'
            }
        },
        easyimage_toolbar: [
            'EasyImageFull',
            'EasyImageSide',
            'EasyImageGradient1',
            'EasyImageGradient2',
            'EasyImageNoGradient',
            'EasyImageAlt'
        ]
    });
