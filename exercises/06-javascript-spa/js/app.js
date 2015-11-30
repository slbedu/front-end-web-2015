jQuery(document).ready(function movieCatalog() {
    var $searchForm = jQuery('#search');
    var $mainContent = jQuery('#main');

    var app;
    var searchByYear;
    var showDetailInfo;

    searchByYear = function (event) {
        event.preventDefault();

        var year = $('#year').val() | 0;

        if (year > 2015 || year < 1990) {
            console.log('error');
        } else {
            app.setLocation('#/movies/' + year);
        }
    };

    showDetailInfo = function () {
        var id = this.getAttribute('data-movie-id');
        app.setLocation('#/movie/' + id);
    };

    app = Sammy('#main', function () {
        this.get('#/', function () {
            $mainContent.html(Renderer.render('home'));
        });

        this.get('#/movie/:id', function () {
            var id = this.params.id;

            Movies.getById(id).then(function (movie) {
                $mainContent.html(Renderer.render('movie-info', movie));
            });
        });

        this.get('#/movies/:year', function () {
            var year = this.params.year;

            Movies.getTopByYear(year).then(function (movies) {
                $mainContent.html(Renderer.render('movies', movies));
            });
        });
    });

    $searchForm.on('submit', searchByYear);
    $mainContent.on('click', '.movie-info', showDetailInfo);
    app.run('#/');
});
