

$(document).ready(function () {

    $(".course-search-value").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#course-search").click();
        }
    });

    $("#order,  .type,  .language, .level, .category, .mode, #course-search").on('change keyup paste click', function (e) {
        /*console.log($('.course-search-value').val());*/
        ApplyFilter();
    });
});


function ApplyFilter() {

    let order = $('#order').find(":selected").val();
    let url = $('.class_route').val();
    let search = $('.search').val();
    let course_search_value = $('.course-search-value').val();
    let type = [];

    /* type */
    $('.type:checked').each(function (i) {
        type[i] = $(this).val();
    });
    url += '/?type=' + type.toString();


    /* language */
    let language = [];
    $('.language:checked').each(function (i) {
        language[i] = $(this).val();
    });
    url += '&language=' + language.toString();


    /* level */
    let level = [];
    $('.level:checked').each(function (i) {
        level[i] = $(this).val();
    });
    url += '&level=' + level.toString();


    /* category */
    let category = [];
    $('.category:checked').each(function (i) {
        category[i] = $(this).val();
    });
    url += '&category=' + category.toString();
    url += '&order=' + order.toString();


    /* mode */
    let mode = [];
    $('.mode:checked').each(function (i) {
        mode[i] = $(this).val();
    });
    url += '&mode=' + mode.toString();


    /* course search value */
    if (course_search_value != "") {
        url += '&query_search=' + course_search_value;
    }


    // if (search != "") {
    //     url += '&query=' + search;
    // }

    /* create new search link */
    /* create new search link */
    /* create new search link */

    // console.log(url)
    // window.location.href = url;
    // console.log(query)

    $.ajax({
        url: url,
        type: 'get',
        data: [],
        beforeSend: function () {},
        success: function (data) {
            // console.log(data);
            $('.filter-by-ajax').html(data.view);
        },
        error: function (error) {
            console.log(error)
        },
        cache: false,
        contentType: false,
        processData: false
    });



//    let query = '?'+ url.split('?')[1];

   window.history.pushState("", "", url);
    //  window.location.hash = query;
    //  return false;

}
