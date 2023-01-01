
$(document).on('click', '.editBlog', function () {

    let blog = $(this).data('item');
    console.log(blog)
    $('#BlogId').val(blog.id);
    $('.editTitle').val(blog.title);
    $('.editSlug').val(blog.slug);
    // $('.editPublishDate').val(blog.authored_date);
    $('#image').val(blog.image);
    $('#description').summernote("code", blog.description);

    $('.editPublishDate').datepicker('setDate', blog.authored_date);
    $("#editBlog").modal('show');

});


$(document).on('click', '.deleteBlog', function () {
    let id = $(this).data('id');
    $('#blogDeleteId').val(id);
    $("#deleteBlog").modal('show');
})

$(".editTitle").on('input', function(){
    let title = $(".editTitle").val();
  $(".editSlug").val(convertToSlug(title));
});

$(".addTitle").on('input', function(){
    let title = $(".addTitle").val();
  $(".addSlug").val(convertToSlug(title));
});

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}





/* store blog */
$("#addblog").submit("submit", function (event) {
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


$("#editblog").submit("submit", function (event) {
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
              console.log(200);
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


