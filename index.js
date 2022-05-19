"use strict";
// Список курсов
const courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
// Варианты цен (фильтры), которые ищет пользователь
const requiredRange1 = [null, 200];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];
function filterCourses(range, courses) {
    return courses.filter(course => {
        if (((range[0] || 0) <= (course.prices[0] || 0))
            && (range[1] === null || course.prices[1] === null || range[1] >= course.prices[1])
            && (range[1] === null || (course.prices[0] || 0) <= range[1])) {
            return course;
        }
    });
}
console.log(filterCourses(requiredRange1, courses));
console.log(filterCourses(requiredRange2, courses));
console.log(filterCourses(requiredRange3, courses));
