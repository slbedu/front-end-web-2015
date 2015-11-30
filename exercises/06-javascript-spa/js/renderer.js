var Renderer = (function ($, Handlebars) {
    var template_dir = 'templates/',
        template_ext = '.handlebars',
        template_cache = {};

    return {
        render: function render(template_name, data) {
            if (!template_cache[template_name]) {
                $.ajax({
                    url: template_dir + template_name + template_ext,
                    method: 'GET',
                    async: false,
                    success: function (template) {
                        template_cache[template_name] = Handlebars.compile(template);
                    }
                });
            }

            return template_cache[template_name](data);
        }
    };
})(jQuery, Handlebars);
