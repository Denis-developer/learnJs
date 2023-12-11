/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let genresGenre;
        while (genresGenre == '' || genresGenre == null || !isNaN(genresGenre) || genresGenre == undefined) {
            genresGenre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '').trim();
        }
        personalMovieDB.genres.push(genresGenre);
    }
}

writeYourGenres();

function rememberMyMovies() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        let lastMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
        let lastMovieGrade = +prompt('На сколько оцените его?', '');

        if (lastMovie != null && lastMovie != '' && lastMovieGrade != null && lastMovieGrade != '') {
            personalMovieDB.movies[lastMovie] = lastMovieGrade;
        } else {
            i--;
        }
    }
}

rememberMyMovies();

function detelePersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detelePersonalLevel();