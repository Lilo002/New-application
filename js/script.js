"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Одина из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Одина из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;   /* задание уже существующего свойства - только ковычки квадратные, так как через точку создаст новое свойство */

console.log(personalMovieDB);