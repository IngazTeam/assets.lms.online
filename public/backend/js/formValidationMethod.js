function formValidateRequest(data, form = 'none') {
  // console.log($(form).find("input[name=open_time]").attr('name'));
  // console.log(form);
  try {
    let messages = data.error_messages;
    if (messages.length > 0) {
      messages.forEach(function (message) {
        let name = Object.keys(message)[0];
        $(`[id=${name}-error]`).remove();
        let custom_label = "";
        if (form != 'none') {
          custom_label = $(`[name=${name}]`, form).closest('div');
        } else {
          custom_label = $(`[name=${name}]`).closest('div');
        }
        //console.log(custom_label)
        let validate_show =`<span class="help-block form-error"> <i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${message[name] ?? 'This field is required '}</span>`;
        /*let validate_show = `<small
                                          class="error-message text-danger position-relative"
                                          style="text-transform: capitalize; font-weight: bold">
                                          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                                          ${message[name] ?? 'This field is required '}
                                      </small>`;*/
        custom_label.children('input').after(validate_show);
        custom_label.children('input').addClass('red-border');
        custom_label.children('.nice-select').addClass('red-border');
      });
    }
  } catch (e) {
    console.log(e);
  }
}