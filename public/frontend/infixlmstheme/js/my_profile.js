function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#previewTxt').hide();
            $('#imgPreview').show();
            $('#imgPreview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}
$('#select_country').select2();

// pofile_image.onchange = evt => {
//     console.log('text');
//     const [file] = pofile_image.files
//     if (file) {
//         show_profile_image.src = URL.createObjectURL(file)

//     }
// }


$('#pofile_image').change(function () {
    console.log('image uploaded');
    if ($(this).val() != '') {
        upload(this);

    }
});


function upload(img) {
    var form_data = new FormData();
    var token=$("input[name=_token]").val();
    form_data.append('file', img.files[0]);
    form_data.append('_token', token);
    var submit_url=$('#ajax-update-profile-image').val();
    var url=$('#url').val();
    $('#loading').css('display', 'block');
    $.ajax({
        url: submit_url,
        data: form_data,
        type: 'POST',
        contentType: false,
        processData: false,
        success: function (data) {
            // console.log(data.data);
            let status = data.status;
            let open_toastr = data.open_toastr;

            if (open_toastr == "yes") {
                showToastr(data, status);
            }

            if (status == 310) {
                // alert(url+'/'+data.data);
                $('#show_profile_image').attr('src', url+'/' +data.data);
                // console.log(310);
                // alert(data.error_messages);
              // formValidateRequest(data);
                
            }
            if (status == 200) {
                location.reload();
                /*$("#form-submit").html(`<i class="ti-check"></i> save`);*/
            }

            // console.log(data);
            if (data.fail) {
                $('#show_profile_image').attr('src', url+'/public/demo/user/admin.jpg');

                toastr.error(data.errors['file'], 'Error Alert', {
                        timeOut: 5000
                    });
            }else {
                // $('#file_name').val(data);
                // console.log(data);
                $('#show_profile_image').attr('src',data);
                var header_image='background-image: url('+data+')';
                $('.studentProfileThumb').attr('style',header_image);
                // console.log('success');
            }
            $('#loading').css('display', 'none');
            //   location.reload();
              
        },
        error: function (xhr, status, error) {
            alert(xhr.responseText);
            $('#show_profile_image').attr('src', url+'/public/demo/user/admin.jpg');
        }
    });
}

// $(document).ready(function (e) {
//     $.ajaxSetup({
//     headers: {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//     }
//     });
//     pofile_image.onchange = evt => {
//         const [file] = pofile_image.files
//         if (file) {
//             show_profile_image.src = URL.createObjectURL(file)
//             var submit_url=document.getElementById('ajax-update-profile-image').value;
//             var pofile_image=document.getElementById('pofile_image');

//             var formData = new FormData(this);
//             var files = $('#pofile_image')[0].files;


//             console.log(pofile_image);

//             fd.append('file',files[0]);
//             $.ajax({
//                 type:'POST',
//                 url: submit_url,
//                 data: formData,
//                 cache:false,
//                 contentType: false,
//                 processData: false,
//                 success: (data) => {
//                 alert('File has been uploaded successfully');
//                 console.log(data);
//                 },
//                 error: function(data){
//                 console.log(data);
//                 }
//             });
//         }
//     };
//     });
