var ComponentsTypeahead = function () {

    var handleTwitterTypeaheadModal = function() {


        // Example #3
        var custom = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace("product_name"),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          prefetch:{
                  url: '/api/product/get-products',
                   prepare: function (settings) {
                      settings.type = "POST";
                      settings.contentType = "application/json; charset=UTF-8";
                      var query = {};  
                      query.CategoryId = "";
                      query.FilterText = "";
                      query.limit = 10000;
                      settings.data = JSON.stringify(query);

                      return settings;
                   },
                   transform : function(res){
                    console.log(res.data.result);
                    return res.data.result;

                   } 
                 }
        });
         
        custom.initialize();
         
        if (App.isRTL()) {
          $('#product').attr("dir", "rtl");  
        }
        $('#product').typeahead(null, {
          name: 'daproduct',
          displayKey: 'product_name',
          hint: (App.isRTL() ? false : true),
          source: custom.ttAdapter(),
          templates: {
            suggestion: Handlebars.compile([
              '<div class="media">',
                    '<div class="pull-left">',
                        '<div class="media-object">',
                            '<img src="{{media_link}}" width="50" height="50"/>',
                        '</div>',
                    '</div>',
                    '<div class="media-body">',
                        '<h4 class="media-heading">{{product_name}}</h4>',
                    '</div>',
              '</div>',
            ].join(''))
          }
        });

    }

    return {
        //main function to initiate the module
        init: function () {
            handleTwitterTypeaheadModal();
        }
    };

}();

jQuery(document).ready(function() {    
   ComponentsTypeahead.init(); 
});