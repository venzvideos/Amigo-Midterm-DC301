<script setup>
import { ref } from 'vue'

const emit = defineEmits(['registration-submitted'])

const participantName = ref('')
const studentId = ref('')
const email = ref('')
const event = ref('')
const attendance = ref('')
const confirmation = ref(false)
const purpose = ref('')

function submitRegistration() {
  emit('registration-submitted', {
    name: participantName.value,
    studentId: studentId.value,
    email: email.value,
    event: event.value,
    attendance: attendance.value,
    confirmation: confirmation.value,
    purpose: purpose.value
  })
}
</script>

<template>
  <h2>College Event Registration</h2>

  <form @submit.prevent="submitRegistration">

    <label>Participant Name:</label>
    <input
      v-model="participantName"
      type="text"
      placeholder="Enter participant name"
      required
    />
    <br><br>

    <label>Student ID:</label>
    <input
      v-model="studentId"
      type="text"
      placeholder="Enter student ID"
      required
    />
    <br><br>

    <label>Email:</label>
    <input
      v-model="email"
      type="email"
      placeholder="Enter email"
      required
    />
    <br><br>

    <label>Event:</label>

    <select v-model="event" required>
      <option disabled value="">Select Event</option>
      <option>Intramurals</option>
      <option>IT Week</option>
      <option>Technology Summit</option>
      <option>Student Leadership Seminar</option>
    </select>

    <br><br>

    <label>Attendance Type:</label>
    <br>

    <input
      v-model="attendance"
      type="radio"
      value="On-site"
      required
    />
    On-site

    <input
      v-model="attendance"
      type="radio"
      value="Online"
    />
    Online

    <br><br>

    <input
      v-model="confirmation"
      type="checkbox"
      required
    />

    I confirm my participation in this event

    <br><br>

    <label>Purpose:</label>
    <br>

    <textarea
      v-model="purpose"
      placeholder="Enter your purpose for attending"
      required
    ></textarea>

    <br><br>

    <button type="submit">
      Submit Registration
    </button>

  </form>
</template>