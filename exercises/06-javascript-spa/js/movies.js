var Movies = (function ($) {
    return {
        getTopByYear: function (year) {
            return $.ajax({
                url: api_url + 'discover/movie?primary_release_year=' + year + '&sort_by=vote_average.desc&api_key=' + api_key
            });
        },

        getById: function (id) {
            return $.ajax({
                url: api_url + 'movie/' + id + '?api_key=' + api_key
            });
        }
    };
})(jQuery);
