'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < personalMovieDB.count; i++) {
    let lastMovie = prompt('Один из последних просмотренных фильмов?', '');
    let lastMovieGrade = +prompt('На сколько оцените его?', '');

    if (lastMovie != null && lastMovie != '' && lastMovieGrade != null && lastMovieGrade != '') {
        personalMovieDB.movies[lastMovie] = lastMovieGrade;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);