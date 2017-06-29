var ComponentsSelect2 = function() {

    var handleDemo = function() {

        // Set the "bootstrap" theme as the default theme for all Select2
        // widgets.
        //
        // @see https://github.com/select2/select2/issues/2927
        $.fn.select2.defaults.set("theme", "bootstrap");

        var placeholder = "Select a Product";

        $(".select2").select2({
            placeholder: placeholder,
            width: null
        });

        $(".select2-allow-clear").select2({
            allowClear: true,
            placeholder: placeholder,
            width: null
        });

        // @see https://select2.github.io/examples.html#data-ajax
        function formatRepo(repo) {
            if (repo.loading) return repo.text;

            /*var markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repositorysitory__avatar'><img src='" + repo.owner.avatar_url + "' /></div>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";

            if (repo.description) {
                markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
            }

            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><span class='glyphicon glyphicon-flash'></span> " + repo.forks_count + " Forks</div>" +
                "<div class='select2-result-repository__stargazers'><span class='glyphicon glyphicon-star'></span> " + repo.stargazers_count + " Stars</div>" +
                "<div class='select2-result-repository__watchers'><span class='glyphicon glyphicon-eye-open'></span> " + repo.watchers_count + " Watchers</div>" +
                "</div>" +
                "</div></div>";*/

            return repo.product_name;
        }

        function formatRepoSelection(repo) {
            $('#product_name').val(repo.product_name);
            $('#product_thumb').val(repo.media_link);
            
            return repo.product_name || repo.id;
        }

        $(".js-data-example-ajax").select2({
            width: "off",
            ajax: {
                url: "/api/product/get-product-list",
                dataType: 'json',
                method:'POST',
                data: function(params) {
                    return {
                        FilterText  : params.term, // search term
                        FilterType  : 'product-filter',
                        CategoryId  : '',
                        ShowFor     : '',
                        WithTags    : false,
                        limit       : 50,
                        page        : 1,
                    };
                },
                processResults: function(data, page) {
                    // parse the results into the format expected by Select2.
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data
                    return {
                        results: data.data.result
                    };
                },
                cache: true
            },
            escapeMarkup: function(markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo,
            templateSelection: formatRepoSelection
        });
    }

    return {
        //main function to initiate the module
        init: function() {
            handleDemo();
        }
    };

}();

    jQuery(document).ready(function() {
        ComponentsSelect2.init();
    });
