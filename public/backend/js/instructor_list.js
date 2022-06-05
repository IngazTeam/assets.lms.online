$(".toggle-password").click(function () {

    var input = $(this).closest('.input-group').find('input');

    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});
$(".imgBrowse").change(function (e) {
    e.preventDefault();
    var file = $(this).closest('.primary_file_uploader').find('.imgName');
    var filename = $(this).val().split('\\').pop();
    file.val(filename);
});

$(document).on('click', '.editInstructor', function () {
    let instructor_id = $(this).data('item-id');
    let url = $('#url').val();
    url = url + '/admin/get-user-data/' + instructor_id
    let token = $('.csrf_token').val();

    $.ajax({
        type: 'POST',
        url: url,
        data: {
            '_token': token,
        },
        success: function (instructor) {
            $('#instructorId').val(instructor.id);
            $('#instructorName').val(instructor.name);
            $('#instructorAbout').summernote("code", instructor.about);
            $('#instructorDob').val(instructor.dob);
            $('#instructorPhone').val(instructor.phone);
            $('#identity_document').val(instructor.identity_document);
            $('#instructorEmail').val(instructor.email);
            $('#instructorImage').val(instructor.image);
            $('#instructorFacebook').val(instructor.facebook);
            $('#instructorTwitter').val(instructor.twitter);
            $('#instructorLinkedin').val(instructor.linkedin);
            $('#instructorInstragram').val(instructor.instagram);
            $("#editInstructor").modal('show');
        },
        error: function (data) {
            toastr.error('Something Went Wrong', 'Error');
        }
    });


});


$(document).on('click', '.deleteInstructor', function () {
    let id = $(this).data('id');
    $('#instructorDeleteId').val(id);
    $("#deleteInstructor").modal('show');
})

$(document).on('click', '#add_instructor_btn', function () {
    $('#addName').val('');
    $('#addAbout').html('');
    $('#startDate').val('');
    $('#addPhone').val('');
    $('#addEmail').val('');
    $('#addPassword').val('');
    $('#addCpassword').val('');
    $('#addFacebook').val('');
    $('#addTwitter').val('');
    $('#addLinked').val('');
    $('#addInstagram').val('');
});



function formValidateRequest(data) {
    try {
        let messages = data.error_messages;
        if (messages.length > 0) {
            messages.forEach(function (message) {
                let name = Object.keys(message)[0];
                $(`[id=${name}-error]`).remove();
                let custom_label = $(`[name=${name}]`).closest('div');
                let password_label = $(`[name=${name}]`).closest('.password_class');
                let validate_show = `<small
                                            class="error-message text-danger position-relative"
                                            style="text-transform: capitalize; font-weight: bold">

                                            <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                            ${message[name] ?? 'This field is required '}
                                        </small>`;
                custom_label.children('label').append(validate_show);
                password_label.children('label').append(validate_show);
                custom_label.children('input').addClass('red-border');
                custom_label.children('.nice-select').addClass('red-border');
            });
        }
    } catch (e) {
        console.log(e);
    }
}



/* store instructor */
$("#addinstructor").submit("submit", function (event) {
    event.preventDefault();
    let url = $(this).attr('action');
    let formData = new FormData(this);
    /*console.log( formData );*/
    $.ajax({
        url: url,
        type: 'post',
        data: formData,
        beforeSend: function () {
            $("#save_button_parent").html(`<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> saving`);
        },
        success: function (data) {
            console.log(data);
            $('.error-message').remove();
            $('input').removeClass('red-border');
            $('.nice-select').removeClass('red-border');

            let status = data.status;
            let open_toastr = data.open_toastr;

            if (open_toastr == "yes") {
                showToastr(data, status);
            }

            if (status == 310) {
                formValidateRequest(data);
                $("#save_button_parent").html(`<i class="ti-check"></i> save`);
            }


            if (status == 200) {
                location.reload();
                /*$("#form-submit").html(`<i class="ti-check"></i> save`);*/
            }



        },
        error: function (data) {
            // error method
        },
        cache: false,
        contentType: false,
        processData: false
    });
});

/* edit instructor */
$("#editinstructor").submit("submit", function (event) {
    event.preventDefault();
    let url = $(this).attr('action');
    let formData = new FormData(this);
    /*console.log( formData );*/
    $.ajax({
        url: url,
        type: 'post',
        data: formData,
        beforeSend: function () {
            $("#update_button_parent").html(`<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> saving`);
        },
        success: function (data) {
            console.log(data);
            $('.error-message').remove();
            $('input').removeClass('red-border');
            $('.nice-select').removeClass('red-border');
            let status = data.status;
            let open_toastr = data.open_toastr;

            if (open_toastr == "yes") {
                showToastr(data, status);
            }
            if (status == 310) {
                formValidateRequest(data);
                $("#update_button_parent").html(`<i class="ti-check"></i> save`);
            }
            if (status == 200) {
                location.reload();
                /*$("#form-submit").html(`<i class="ti-check"></i> save`);*/
            }
        },
        error: function (data) {
            // error method
        },
        cache: false,
        contentType: false,
        processData: false
    });
});
