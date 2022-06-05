

$(document).on('click', '.cart_store', function (e) {
    e.preventDefault();
    let btn = $(this);
    let id = $(this).data('id');
    let url = $('.enroll_cart').val();
    let csrf_token = $('.csrf_token').val();
    if ($.isNumeric(id)) {

        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: url + '/' + id,
            data: {
                _token: csrf_token
            },
            success: function (data) {

                if (data['result'] === "failed") {
                    toastr.error(data['message']);
                    btn.show();
                } else {
                    toastr.success(data['message']);
                    btn.html(`<i class="fas fa-check"></i>`);
                }
                if (data.type === 'addToCart') {
                    $('.notify_count').html(data.total);
                    getList();
                } else {

                }

            }
        });

    } else {
        getList();
    }


});
$(".stripe-button-el").remove();
$(".razorpay-payment-button").hide();
