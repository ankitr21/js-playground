// destructuring Objects and Json entries.

const course = {
    courseName:"javascript",
    price : "9999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor)

const {courseInstructor} = course
const {courseInstructor: ci} = course

// console.log(courseInstructor)
// console.log(ci)

