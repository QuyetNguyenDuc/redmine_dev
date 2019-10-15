$(document).on('keyup keypress', 'form.easyim__search-form .easyim__search-input', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode === 13) {
    e.preventDefault();

    var $searchForm = $(this).closest('form.easyim__search-form');
    $searchForm.find('button.easyim__search-btn').trigger('click');
  }
});

$( document ).ajaxComplete(function( event, request, settings ) {
  if(settings.url.match(/easy_instant_messages/) && typeof EasyInstantMessenger != "undefined") {
    $.extend(EasyInstantMessenger, {
      watchSubmitInput: function watchSubmitInput() {
        var $messageForm = $("#new_easy_instant_message");

        $messageForm.find("#easy_instant_message_content").keypress(function(e) {
          var code = e.keyCode ? e.keyCode : e.which;
          if (code == 13 || code == 10) {
            e.preventDefault();
            $messageForm.find('button.easyim__submit-form__submit-btn').trigger('click');
          }
        });
      }
    });
  }
});
