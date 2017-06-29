(function () {

    var StripeBilling = {
        init: function () {

            this.form = $('#billing-form');
            this.submitButton = this.form.find('input[type=submit]');

            var stripeKey = $('#pub').val();

            Stripe.setPublishableKey(stripeKey);

            this.bindEvents();
        },

        bindEvents: function () {
            this.form.on('submit', $.proxy(this.sendToken, this));
        },

        sendToken: function (event) {
            this.submitButton.val('Processing...');

            Stripe.createToken(this.form, $.proxy(this.stripeResponseHandler, this));

            event.preventDefault();

        },

        stripeResponseHandler: function (status, response) {
            //console.log(status, response);

            if (response.error) {

                var hideCheck = $('#client-token').val();

                if (hideCheck == 0) {

                    this.form.find('#error-message').show().text(response.error.message);

                    return this.submitButton.prop('disabled', false).val('Proceed');
                }

            }

            this.submitButton.val('Proceed');

            $('<input>', {
                type: 'hidden',
                name: 'stripeToken',
                value: response.id
            }).appendTo(this.form);

            this.form[0].submit();
        }

    };

    var CardInfo = {
        ShowCardInfoBox: function () {

            var hideCheck = $('#client-token').val();

            if (hideCheck == 1) {

                $("#cardInfoSection").hide();
            }

        }
    };

    StripeBilling.init();
    CardInfo.ShowCardInfoBox();
})();