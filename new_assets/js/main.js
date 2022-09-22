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
        $('.toggle__collapese').toggleClass('show');
        // console.log('tesdt coll');
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
    // $('#' + childId).clone().appendTo($('#' + parentId));
   var id=$('#' + childId).clone();
   id.find('input').val('');
   id.appendTo($('#' + parentId));
}
// Remove Question
function RemoveQuestion(that, row_content) {
    // $(that).closest('.'+ row_content).prev().find('.action_buttons').append($(that).siblings().html())
    let allDivs=document.querySelectorAll('.question_box_body .row-question');
    // alert(allDivs.length);

    if(allDivs.length==1){
        // allDivs.parenElement.remove('.question_box');
        // alert('sfd');
        console.log($(that).closest('.question_box'));
        $(that).closest('.question_box').remove();
        // console.log($('.'+ row_content).find('.question_box'));
    }
    $(that).closest('.' + row_content).remove();

}
//  uploading files
$('.popup_input').click(function(){
    $(this).siblings().click();
})

// toggle password type
function PasswordType(that){
    if($(that).siblings().attr('type') === 'password'){
        $(that).siblings().attr('type','text')
    }
    else{
        $(that).siblings().attr('type','password')
    }
}

// toggle background color between popup buttons

$(function(){
    // $('.box_action').removeClass('youtube')
    $('.box_action').click(function(){
       $(this).addClass('youtube');
       console.log($(this).parent().html())
       $(this).parent().siblings().find('.box_action').removeClass('youtube')
    })
})