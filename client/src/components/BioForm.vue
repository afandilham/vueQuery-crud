<template>
  <form class="bio-form" @submit.prevent="createBio">
    <input type="text" placeholder="Name" v-model="name" required>
    <input type="email" placeholder="Email" v-model="email" required>
    <input type="tel" placeholder="Phone" v-model="phone" required>
    <select name="gender" id="gender" v-model="gender" required>
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
import { ref } from '@vue/runtime-core';
import { useMutation } from '@tanstack/vue-query';
import { api } from '../axios';
import { IBiodata } from '../types/IBiodata';
import { nanoid } from 'nanoid';
import Button from './Button.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const gender = ref<'MALE' | 'FEMALE'>('MALE');

const { mutate } = useMutation({
  mutationFn: (data: IBiodata) => api.post<IBiodata[]>('/bio', data)
});

const clearForm = () => {
  name.value = '';
  email.value = '';
  phone.value = '';
  gender.value = 'MALE';
};

const createBio = () => {
  mutate({
    id: nanoid(),
    name: name.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value
  });
  clearForm();
};
</script>