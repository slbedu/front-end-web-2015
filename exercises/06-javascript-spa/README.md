## Създайте обект Renderer с един метод:
1. Renderer.render(viewName, data) - метод, който връща готов HTML във формата на стринг

## Създайте обект Movies с два метода:
1. Movies.getTopByYear(year) - метод, който връща топ 20 филми от дадена година
2. Movies.getById(id) - метод, който връща детайлна информация за филм по ID

## Създайте три темплейта (Handlebars.js):
1. Първият е началната страница
2. Вторият показва топ филмите за дадена година
3. Третият показва детайлите за избран филм

## Създайте три маршрута (Sammy.js):
1. За началната страница - #/
2. За топ филмите по година - #/movies/:year
3. За детайлите на даден филм - #/movie/:id

## API End Points:
1. Get all movies by year:
	```
	http://api.themoviedb.org/3/discover/movie
	  ?primary_release_year=__WHICH_YEAR__
	  &sort_by=vote_average.desc
	  &api_key=__YOUR_API_KEY__
	```

2. Get movie by ID:
	```
	http://api.themoviedb.org/3/movie/__MOVIE_ID__
	  ?api_key=__YOUR_API_KEY__
	```

3. Get small poster:
	```
	http://image.tmdb.org/t/p/w92/__POSTER_PATH__
	```

4. Get large poster:
	```
	http://image.tmdb.org/t/p/w342/__POSTER_PATH__
	```

## Sammy.js маршрути:
1. Как се прави приложение с помощта на Sammy.js:
	```javascript
	// направа на приложение чрез Sammy.js
	// в тази функцията дефинираме всички маршрути, които искаме да имаме
	var app = Sammy(function () {

		// pattern - адреса, който искаме да направим достъпен чрез GET заявка
		this.get(pattern, function () {
			// тази функция се изпълнява, когато се достъпи
			// посочения адрес
		});

	});

	// маршрут, който да бъде зареден
	app.run(pattern);
	```

2. Как се навигира до определен маршрут от кода на приложението
	```javascript
	// pattern - адресът, който искаме да заредим
	// трябва да го има дефиниран в маршрутите при инициализаране на Sammy.js
	app.setLocation(pattern);
	```

## Краен резултат:
1. Начална страница  
![Landing page](https://raw.githubusercontent.com/slbedu/front-end-web-2015/master/exercises/06-javascript-spa/result/home.JPG)

2. Топ филми по година  
![Top movies per year page](https://raw.githubusercontent.com/slbedu/front-end-web-2015/master/exercises/06-javascript-spa/result/movies.JPG)

3. Детайли за избран филм  
![Movie details page](https://raw.githubusercontent.com/slbedu/front-end-web-2015/master/exercises/06-javascript-spa/result/movie-details.JPG)
