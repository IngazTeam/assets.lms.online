(function ($) {
    "use strict";
    $(document).ready(function () {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="_token"]').attr("content"),
            },
        });
        $('[data-toggle="tooltip"]').tooltip();
    });

    // status_enable_disable

    $("#lms_table").on("change", ".status_enable_disable", function () {
        var status = 0;
        if ($(this).is(':checked')) {
            var status = 1;
        } else {
            var status = 0;
        }

        var id = $(this).val();
        var url = $("#url").val();
        var table = $("#table_name").val();


        var formData = {
            id: id,
            table: table,
            status: status,
        };
        $.ajax({
            type: "GET",
            // data: formData,
            dataType: "json",
            url: url + "/" + "status-enable-disable/" +id + "/" + table + "/" + status,
            success: function (data) {
                if (data.warring) {
                    toastr.error(data.warring, __('common.Error'));
                }else{
                    toastr.success( __('common.Status has been changed'), __('common.Success'));
                }
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseJSON);
                toastr.error( __('common.Something went wrong'), __('common.Falied'));
            },
        });

    });


    // status_enable_disable
    $("#lms_table").on("change", ".publish_enable_disable", function () {
        var status = 0;
        if ($(this).is(':checked')) {
            status = 1;
        } else {
            status = 0;
        }

        var id = $(this).val();
        var url = $("#url").val();
        var table = $("#table_name").val();


        var formData = {
            id: id,
            table: table,
            status: status,
        };
        console.log(formData);
        $.ajax({
            type: "GET",
            data: formData,
            dataType: "json",
            url: url + "/" + "publish-enable-disable",
            success: function (data) {
                toastr.success( __('common.Publish status has been changed'), __('common.Success'));
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseJSON);
                toastr.error( __('Something went wrong'), __('common.Falied'));
            },
        });

    });

    $(".topbar_enable_disable").on("change", function () {
        var status = 0;
        if ($(this).is(':checked')) {
            var status = 1;
        } else {
            var status = 0;
        }
        alert('topbar_enable_disable');

        var id = $(this).val();
        var url = $("#url").val();
        var table = $("#table_name").val();


        var formData = {
            id: id,
            table: table,
            status: status,
        };
        $.ajax({
            type: "GET",
            data: formData,
            dataType: "json",
            url: url + "/" + "topbar-enable-disable",
            success: function (data) {
                toastr.success( __('common.Status has been changed'), __('common.Success'));
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseJSON);
                toastr.error( __('common.Something went wrong'), __('common.Falied'));
            },
        });

    });


    $(".footer_enable_disable").on("change", function () {
        var status = 0;
        if ($(this).is(':checked')) {
            var status = 1;
        } else {
            var status = 0;
        }
        alert('footer_enable_disable');

        var id = $(this).val();
        var url = $("#url").val();
        var table = $("#table_name").val();


        var formData = {
            id: id,
            table: table,
            status: status,
        };
        $.ajax({
            type: "GET",
            data: formData,
            dataType: "json",
            url: url + "/" + "footer-enable-disable",
            success: function (data) {
                toastr.success( __('common.Status has been changed'), __('common.Success'));
            },
            error: function (xhr, status, error) {
                console.log(xhr.responseJSON);
                toastr.error( __('common.Something went wrong'), __('common.Falied'));
            },
        });

    });


    $(".browseImg").change(function (e) {
        e.preventDefault();
        console.log('Browse image')
        var file = $(this).closest('.primary_file_uploader').find('.imgName');
        var filename = $(this).val().split('\\').pop();
        file.val(filename);
    });


}(jQuery));
