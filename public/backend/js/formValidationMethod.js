function formValidateRequest(data, form = 'none') {
  // console.log($(form).find("input[name=open_time]").attr('name'));
  // console.log(form);
  try {
    let messages = data.error_messages;
    if (messages.length > 0) {
      messages.forEach(function (message) {
        let name = Object.keys(message)[0];
        $(`[id=${name}-error]`).remove();
        let elemmentObj = "";
        if (form != 'none') {
          elemmentObj = $(`[name=${name}]`, form);
        } else {
          elemmentObj = $(`[name=${name}]`);
        }
        let  messageText = "" ;
        //=============================================
        if(typeof message[name]=== 'object' && message[name]!== null){
          Object.keys(message[name]).forEach(key => {
            messageText += message[name][key]
          });
        }else{
          messageText = message[name] ;
        }
        let validate_show =`<span class="help-block form-error"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${messageText ?? 'This field is required '}</span>`;

        console.log(elemmentObj.closest("div").find("span.form-error"))
        elemmentObj.addClass('red-border');
        // console.log(elemmentObj.parent())
        if(elemmentObj.attr("type") == "file"){
          elemmentObj.closest("div").parent().find("span.form-error").remove();
          elemmentObj.closest("div").after(validate_show);
        }else{
          elemmentObj.closest("div").find("span.form-error").remove();
          elemmentObj.after(validate_show);
        }

      });
    }
  } catch (e) {
    console.log(e);
  }
}