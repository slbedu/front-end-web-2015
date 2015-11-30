jQuery(document).ready(function movieCatalog() {
    var $searchForm = jQuery('#search');
    var $mainContent = jQuery('#main');

    var searchByYear;
    var showDetailInfo;

    searchByYear = function (event) {
        event.preventDefault();

        var year = $('#year').val() | 0;

        if (year > 2015 || year < 1990) {
            console.log('error');
        } else {
            Movies.getTopByYear(year).then(function (movies) {
                $mainContent.html(Renderer.render('movies', movies));
            });
        }
    };

    showDetailInfo = function () {
        var id = this.getAttribute('data-movie-id');

        Movies.getById(id).then(function (movie) {
            $mainContent.html(Renderer.render('movie-info', movie));
        });
    };


    $mainContent.html(Renderer.render('home'));

    $searchForm.on('submit', searchByYear);
    $mainContent.on('click', '.movie-info', showDetailInfo);
});
