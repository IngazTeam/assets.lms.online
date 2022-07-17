// change collapse icon
function test_collapse(that) {
    if ($(that).attr("aria-expanded") === "true") {
        $(that).find('.bi-caret-left-fill').toggleClass('bi-caret-left-fill  bi-caret-down-fill')
    } else {
        $(that).find('.bi-caret-down-fill').toggleClass('bi-caret-down-fill  bi-caret-left-fill')
    }
}


$(function(){
    $("[data-toggle=tooltip]").tooltip();
})