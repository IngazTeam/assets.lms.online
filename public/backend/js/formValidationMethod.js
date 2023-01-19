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

        let validate_show =`<span class="help-block form-error"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${message[name] ?? 'This field is required '}</span>`;
        elemmentObj.closest("div").find("span.form-error").remove();
        elemmentObj.addClass('red-border');
        // console.log(elemmentObj.parent())
        if(elemmentObj.attr("type") == "file"){
          elemmentObj.closest("div").after(validate_show);
        }else{
          elemmentObj.after(validate_show);
        }

      });
    }
  } catch (e) {
    console.log(e);
  }
}