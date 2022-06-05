function searchReceiver() {

    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("search_input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("receiver_list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function getMessage(id) {
    event.preventDefault();

    $('#reciever_id').val(id);
    let url = $('.get_messages').val();
    var formData = {
        id: id
    };
    $.ajax({
        type: "POST",
        data: formData,
        dataType: "json",
        url: url,
        success: function (data) {
            $('#all_massages').empty();
            $('#all_massages').html(data['messages']);
            $('#receiver_name').html(data['receiver_name']);
            $('#chat_receiver_id').html(data['receiver_id']);
            $('#all_massages').attr('class', 'user_' + data['receiver_id']);
            /*$('.typing_content').attr('to-user-id', 'user_'+data['receiver_id']);*/
            $('.typing_content').attr('id', 'typing_user_' + data['receiver_id']);
            $('.typing_img').attr('src', data['image']);
            $('#message').attr('to-user-id', 'user_' + data['receiver_id']);
        },
        error: function (data) {
            console.log("Error:", data);
        }
    });
}

$(document).ready(function () {


    /* ======================== socket ======================== */
    let ip_address = 'wss://ingazlms.herokuapp.com';
    // let ip_address = 'http://localhost';
    // let socket_port = '3000';
    // let socket = io(ip_address + ':' + socket_port);
    let socket = io(ip_address);

    console.log(socket);

    socket.on('sendChatToClient', (formData) => {
        console.log('#last_mesg' + formData.sender_id);
        $('#last_mesg' + formData.sender_id).html(formData.message);
        $('.user_' + formData.sender_id).append(formData.chat_message);
        $("#typing_user_" + formData.sender_id).attr('hidden', 'true');
    });


    socket.on('sendIsTyping', (formData) => {
        console.log(formData);
        $("#typing_user_" + formData.from_user_id).removeAttr('hidden');
        setTimeout(function () {
            $("#typing_user_" + formData.from_user_id).attr('hidden', 'true');
        }, 10000);
    });


    /* ======================== socket ======================== */

    $(document).on('keyup', '#message', function () {
        let formData = {
            'from_user_id': $(this).attr('from-user-id'),
            'to_user_id': $(this).attr('to-user-id'),
        };
        socket.emit('isTyping', formData);
    });

    $("#submitForm").submit(function (e) {
        e.preventDefault();

        let demoMode = $('#demoMode').val();
        if (demoMode == 1) {
            toastr.error("For the demo version, you cannot change this", "Error");
            return false;
        }

        var url = $('.store_message').val();
        var reciever_id = $('#reciever_id').val();
        var message = $('#message').val();
        if (reciever_id == "") {
            toastr.error('Please Select Receiver first', 'Error');

            return false;
        }
        var formData = {
            reciever_id: reciever_id,
            message: message,
        };

        $.ajax({
            type: "POST",
            data: formData,
            dataType: "json",
            url: url,
            success: function (data) {

                /* ======================== send socket message ======================== */
                let my_user_id = $("input[name='auth_user_id']").val();
                let sendData = formData;
                sendData.sender_id = my_user_id;
                sendData.chat_message = data;
                socket.emit('sendChatToServer', formData);
                /* ======================== send socket message ======================== */

                console.log(data);
                // $('#all_massages').empty();
                $('#all_massages').append(data);
                $('#message').val('');
                $('#last_mesg').empty();
                $("#typing_user_" + my_user_id).attr('hidden', 'true');
                $('#last_mesg' + reciever_id).html(message);
            },
            error: function (data) {
                console.log("Error:", data);
            }
        });
    });
    $(document).on('click', '.unseen', function () {
        $(this).removeClass("unseen")

    });

    $('.messages_chat').scrollTop($('.messages_chat ')[0].scrollHeight);

});

