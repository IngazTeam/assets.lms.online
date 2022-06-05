window.addEventListener('DOMContentLoaded', function(event) {
    console.log('DOM fully loaded and parsed');
    websdkready();
});


function websdkready() {

    var testTool = window.testTool;

    if (testTool.isMobileDevice()) {
        vConsole = new VConsole();
    }

    ZoomMtg.preLoadWasm(); // pre download wasm file to save time.

    var SDK_KEY = "iBLvpgHBs405ydRA0t8MGmOF1DkP7vg53grv";

    var SDK_SECRET = "NPL15PlxCy5mVXO7RB7wVVP3ZngNszH51fHp";

    if (testTool.getCookie("meeting_lang"))
        document.getElementById("meeting_lang").value = testTool.getCookie("meeting_lang");

    document.getElementById("meeting_lang").addEventListener("change", function(e) {
        testTool.setCookie("meeting_lang", document.getElementById("meeting_lang").value);
        testTool.setCookie("_zm_lang", document.getElementById("meeting_lang").value);
    });

    // copy zoom invite link to mn, autofill mn and pwd.
    document.getElementById("meeting_number").addEventListener("input", function(e) {
        var tmpMn = e.target.value.replace(/([^0-9])+/i, "");
        if (tmpMn.match(/([0-9]{9,11})/)) {
            tmpMn = tmpMn.match(/([0-9]{9,11})/)[1];
        }
        var tmpPwd = e.target.value.match(/pwd=([\d,\w]+)/);
        if (tmpPwd) {
            document.getElementById("meeting_pwd").value = tmpPwd[1];
            testTool.setCookie("meeting_pwd", tmpPwd[1]);
        }
        document.getElementById("meeting_number").value = tmpMn;
        testTool.setCookie("meeting_number", document.getElementById("meeting_number").value);
    });

    var meetingConfig = testTool.getMeetingConfig();
    if (!meetingConfig.mn || !meetingConfig.name) {
        alert("Meeting number or username is empty");
        return false;
    }

    testTool.setCookie("meeting_number", meetingConfig.mn);
    testTool.setCookie("meeting_pwd", meetingConfig.pwd);

    var signature = ZoomMtg.generateSDKSignature({
        meetingNumber: meetingConfig.mn,
        sdkKey: SDK_KEY,
        sdkSecret: SDK_SECRET,
        role: meetingConfig.role,
        success: function(res) {
            // console.log(res.result);
            meetingConfig.signature = res.result;
            meetingConfig.sdkKey = SDK_KEY;
            let sdk_asset_url = $("#zoom_sdk_asset_url").val();
            // alert(sdk_asset_url);
            var joinUrl = sdk_asset_url + "/meeting.html?" + testTool.serialize(meetingConfig);
            // console.log(joinUrl);

            let url =  $("#update-join-meetings").val();

            if (meetingConfig.role === 1) {
                $.ajax({
                    url: url,
                    type: 'post',
                    data: {
                        '_token': $('#_token').val(),
                        'student_url': sdk_asset_url + "/meeting.html?",
                        'meeting_config': meetingConfig,
                    },
                    beforeSend: function () {
                    },
                    success: function (data) {
                        // alert("data");
                        console.log(data);
                    },
                    error: function (data) {
                    },
                });
            }

            document.getElementById('show-zoom').src = joinUrl;
            $(".vidloader").addClass('d-none')
        },
    });


}
