<script setup>
defineProps({
  registration: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div v-if="registration">

    <h2>Submitted Registration</h2>

    <p>Name: {{ registration.name }}</p>

    <p>Student ID: {{ registration.studentId }}</p>

    <p>Email: {{ registration.email }}</p>

    <p>Event: {{ registration.event }}</p>

    <p>Attendance: {{ registration.attendance }}</p>

    <p>
      Confirmation:
      {{ registration.confirmation ? 'Confirmed' : 'Not Confirmed' }}
    </p>

    <p>Purpose: {{ registration.purpose }}</p>

  </div>
</template>
