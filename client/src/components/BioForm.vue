<template>
  <form class="bio-form" @submit.prevent="">
    <input type="text" placeholder="Name" required>
    <input type="email" placeholder="Email" required>
    <input type="tel" placeholder="Phone" required>
    <select name="gender" id="gender" required>
      <option value="" disabled>Choose your gender</option>
      <option value="MALE">Male</option>
      <option value="FEMALE">Female</option>
    </select>
    <div class="bio-form__action">
      <Button type="submit">Submit</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Button from './Button.vue';
</script>