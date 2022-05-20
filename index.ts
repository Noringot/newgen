interface Course {
    name: string,
    prices: (null | number)[]
}

// Список курсов
const courses: Course[] = [
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
const requiredRange1 = [0, 0];
const requiredRange2 = [100, 350];
const requiredRange3 = [200, null];


function filterCourses(range: (null | number)[], courses: Course[]) {
    const rangeMin = range[0] === null ? 0 : range[0];
    const rangeMax = range[1] === null ? Infinity : range[1];

    return courses.filter(course => {
        const priceMin = course.prices[0] === null ? 0 : course.prices[0];
        const priceMax = course.prices[1] === null ? Infinity : course.prices[1];

        if(rangeMin <= priceMin && rangeMax >= priceMax) {
            return course
        }
    })
}

console.log(filterCourses(requiredRange1, courses));
console.log(filterCourses(requiredRange2, courses));
console.log(filterCourses(requiredRange3, courses));
