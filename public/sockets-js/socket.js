notification.on('send_new_notification_to_user', function (data) {

    console.log(data);

    let notify = $('.notify_count_' + data.to_user_id);
    let notify_count = notify.text();
    notify.text(parseInt(notify_count)+1);

    $('.default-empty-image').remove();

    let notification = `<li>
                            <a href="#">
                                <div>
                                    <h4>${data.from_user_name}</h4>
                                    <p>${data.msg}</p>
                                    <p class="time"><i aria-hidden="true" class="fa fa-clock"></i>
                                        <span>0s ago</span>
                                    </p>
                                </div>
                            </a>
                        </li>`;

    $('.scroll_notification_list .notifications').prepend(notification);

    toastr.success(data.msg, data.title)
});
