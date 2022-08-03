// Change Collapse Icon

function test_collapse(that) {
    if ($(that).attr("aria-expanded") === "true") {
        $(that).find('.bi-caret-left-fill').toggleClass('bi-caret-left-fill  bi-caret-down-fill')
    } else {
        $(that).find('.bi-caret-down-fill').toggleClass('bi-caret-down-fill  bi-caret-left-fill')
    }
}

// Tooltip Toggle

$(function () {
    $("[data-toggle=tooltip]").tooltip();
    if($(window).width() < 567){
        $('.toggle__collapese').removeClass('show');
    }
    // if($('.toggle__collapese').hasClass('show')){
    //     console.log('tetetet');
    // }
})

// Append Question

// function AppendQuestion(that){
//     console.log('test click');
//     $(that).parent().closest('.question_box_body').append(`<div class="row row_content">` + $(that).closest('.row_content').html() +`</div>`);
//     $(that).remove()
// }
function AppendQuestion(parentId, childId) {
    $('#' + childId).clone().appendTo($('#' + parentId));
}
// Remove Question
function RemoveQuestion(that, row_content) {
    // $(that).closest('.'+ row_content).prev().find('.action_buttons').append($(that).siblings().html())
    $(that).closest('.' + row_content).remove();

}
//  uploading files
$('.popup_input').click(function(){
    $(this).siblings().click();
})


