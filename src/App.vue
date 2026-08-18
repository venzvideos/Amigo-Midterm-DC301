<script setup>
import { ref } from 'vue'
import EventForm from './components/EventForm.vue'
import EventDisplay from './components/EventDisplay.vue'

const registration = ref(null)

function receiveRegistration(data) {
  console.log(data)

  registration.value = data
}
</script>

<template>
  <h1>College Event Registration</h1>

  <EventForm
    @registration-submitted="receiveRegistration"
  />

  <EventDisplay
    :registration="registration"
  />
</template>