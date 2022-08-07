$(".toggle-password").click(function () {
    
    var input = $(this).closest('.input-group').find('input');
    if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
});

$(".toggle-password-update").click(function () {
    
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


$(document).on('click', '.editStudent', function () {
    let student_id = $(this).data('item-id');
    let url = $('#url').val();
    url = url + '/admin/get-user-data/' + student_id
    let token = $('.csrf_token').val();


    $.ajax({
        type: 'POST',
        url: url,
        data: {
            '_token': token,
        },
        success: function (student) {
            console.log(student.gender)
            $('#studentId').val(student.id);
            $('#studentName').val(student.name);
            $('#studentAbout').summernote("code", student.about);
            $('#studentDob').val(student.dob);
            $('#studentPhone').val(student.phone);
            $('#identity_document').val(student.identity_document);
            $('#editBalance').val(student.balance);
            $('#studentEmail').val(student.email);
            $('#studentGender').val(student.gender);
            $('#studentGender').niceSelect('update');
            $('#studentImage').val(student.image);
            $('#studentFacebook').val(student.facebook);
            $('#studentTwitter').val(student.twitter);
            $('#studentLinkedin').val(student.linkedin);
            $('#studentYoutube').val(student.youtube);
            $("#editStudent").modal('show');
        },
        error: function (data) {
            toastr.error(__('common.Something Went Wrong'), __('common.Error'));
        }
    });


});


$(document).on('click', '.deleteStudent', function () {
    let id = $(this).data('id');
    $('#studentDeleteId').val(id);
    $("#deleteStudent").modal('show');
});


$(document).on('click', '#add_student_btn', function () {
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
    $('#addYoutube').val('');
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
                // console.log(password_label);
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
                // if (name == 'password') {
                //     toastr.warning(`${message[name] ?? 'This field is required '}`)
                // }
            });
        }
    } catch (e) {
        console.log(e);
    }
}

/* store student */
$("#addstudent").submit("submit", function (event) {
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
            disabled_button("#save_button_parent");
        },
        success: function (data) {

            console.log(data);
            $('.error-message').remove();
            $('input').removeClass('red-border');
            $('.nice-select').removeClass('red-border');
            let status = data.status;

            if (data.open_toastr == "yes") {
                showToastr(data, status);
            }

            if (status == 310) {
                formValidateRequest(data);
                $("#save_button_parent").html(`<i class="ti-check"></i> save`);
            }
            if (status == 200) {
                location.reload();
            }
            if (status == 500) {
                $("#save_button_parent").html(`save`);

            }

        },
        error: function (data) {
            // error method

        },
        complete: function(data) {
            realase_disabled_button("#save_button_parent");

        },
        cache: false,
        contentType: false,
        processData: false
    });
});

/* edit student */
$("#editstudent").submit("submit", function (event) {
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
           disabled_button("#update_button_parent");
        },
        success: function (data) {

            console.log(data);
            $('.error-message').remove();
            $('input').removeClass('red-border');
            $('.nice-select').removeClass('red-border');
            let status = data.status;

            if (data.open_toastr == "yes") {
                showToastr(data, status);
            }

            if (status == 310) {
                formValidateRequest(data);
                $("#update_button_parent").html(`<i class="ti-check"></i> save`);
            }


            if (status == 200) {
                location.reload();
            }

            if (status == 500) {
                $("#update_button_parent").html(`save`);
            }

        },
        error: function (data) {
            // $("#update_button_parent").html(`save`);
        },
        complete: function(data) {
            // $("#update_button_parent").html(`save`);
            realase_disabled_button("#update_button_parent");

        },
        cache: false,
        contentType: false,
        processData: false
    });
});



          /***
     * helper function
     * ****/
           function disabled_button(selector) {

            $(selector).attr("disabled", true);
            
            }
            
            function realase_disabled_button(selector) {
            
            
            $(selector).removeAttr("disabled");
            
            }