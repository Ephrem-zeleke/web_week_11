<script setup>

// all the code will be here
// app.vue is our container, and it will contain all the components
// we have to import all the components from the component directory

import NewStudentForm from "./components/NewStudentForm.vue";
import StudentTable from "./components/StudentTable.vue";
import StudentMessage from "./components/StudentMessage.vue";



</script>


<template>

  <!--  all the HTML file will goes here -->
  <NewStudentForm></NewStudentForm>

  <StudentTable></StudentTable>

  <StudentMessage></StudentMessage>


</template>


<style scoped>

/* all the style that will apply to the component will be here */

</style>
