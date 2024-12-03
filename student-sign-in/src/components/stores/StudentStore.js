// this file will be our stored for our data
// import some library from the pinia and vue for ref data

import { defineStore } from 'pinia'
import { ref, computed} from 'vue'

export const useStudentStore = defineStore('students', () =>{

    // the data stored here will be used by our components
    // let's assign a variable for student list and put some example data

    const studentList = ref([
        {name:'A. Student', starID: 'aa1234aa', presence: false},
        {name:'B. Student', starID: 'bb1234bb', presence: false},
    ])

    const mostRecentStudent = ref({})  // this will be an object

    // the store can also write a function that add the student to the student list

    function addNewStudent(student){
        studentList.value.push(student)
    }
    // we add a function to delete a student
    function deleteStudent(studentToDelete){
        studentList.value = studentList.value.filter((student) =>{
            return studentToDelete != student
        })
    }
    // we also need the store to know when the student arrive or leave
    // so let's create a function for student arrive or left
    function arrivedOrLeft(student){
        mostRecentStudent.value = student
    }
    // student store also works with computed properties
    const studentCount = computed(() => {
        return studentList.value.length
    })



    return {
        // will return reactive value here
        studentList,
        mostRecentStudent,


        // will return function here
        addNewStudent,
        deleteStudent,
        arrivedOrLeft,

        // computed property
        studentCount,


    }
})