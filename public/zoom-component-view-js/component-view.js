const client = ZoomMtgEmbedded.createClient()

let meetingSDKElement = document.getElementById('meetingSDKElement')
var zoomCsrf = $("input[name=zoom-csrf]").val();

// setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js

var signatureEndpoint = $("input[name=signatureEndpoint]").val();
var sdkKey = 'iBLvpgHBs405ydRA0t8MGmOF1DkP7vg53grv'
var meetingNumber = $("input[name=meetingNumber]").val();
var role = $("input[name=role]").val();
var userName = $("input[name=userName]").val();
var userEmail = $("input[name=userEmail]").val();
var passWord = $("input[name=passWord]").val();

// var signatureEndpoint = 'http://localhost:4000'
// var sdkKey = 'iBLvpgHBs405ydRA0t8MGmOF1DkP7vg53grv'
// var meetingNumber = '85284950175'
// var role = 1
// var userName = 'JavaScript'
// var userEmail = 'm@m.com'
// var passWord = '123456'

// pass in the registrant's token if your meeting or webinar requires registration. More info here:
// Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/meetings#join-meeting-with-registration-required
// Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/webinars#join-webinar-with-registration-required

var registrantToken = ''


client.init({
    zoomAppRoot: meetingSDKElement,
    language: 'en-US',
    customize: {
        video: {
            isResizable: true,
            viewSizes: {
                default: {
                    width: 1000,
                    height: 600
                },
                ribbon: {
                    width: 300,
                    height: 700
                }
            }
        }
    }
})

function getSignature() {
    console.log(signatureEndpoint);
    fetch(signatureEndpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //     meetingNumber: meetingNumber,
        //     role: role
        // })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        console.log(data.signature)
        signature = data.signature;
        startMeeting(signature)
    }).catch((error) => {
        console.log(error)
    })
}

function startMeeting(signature) {
    let data = {
        sdkKey: sdkKey,
        signature: signature,
        meetingNumber: meetingNumber,
        password: passWord,
        userName: userName,
        userEmail: userEmail,
        tk: registrantToken
    };

    console.log(data);

    client.join(data);
}
