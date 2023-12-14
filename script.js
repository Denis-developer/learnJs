'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        personalMovieDB.count = numberOfFilms;
    },
    showMyDB: function (privat) {
        if (!privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genresGenre;
            while (genresGenre == '' || genresGenre == null || !isNaN(genresGenre) || genresGenre == undefined) {
                genresGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
            }
            personalMovieDB.genres.push(genresGenre);
        }
        personalMovieDB.genres.forEach(function (item, i, arr) {
            console.log(`Любимый жанр #${++i} - это ${item}`);
        });
    },
    rememberMyMovies: function () {
        for (let i = 0; i < personalMovieDB.count; i++) {
            let lastMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            let lastMovieGrade = +prompt('На сколько оцените его?', '');

            if (lastMovie != null && lastMovie != '' && lastMovieGrade != null && lastMovieGrade != '') {
                personalMovieDB.movies[lastMovie] = lastMovieGrade;
            } else {
                i--;
            }
        }
    },
    moviesPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    }
}