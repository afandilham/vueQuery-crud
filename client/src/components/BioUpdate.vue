<template>
  <button class="button-back" @click="router.back">Back to home</button>
  <form class="bio-form" @submit.prevent="updateBio">
    <h1>Update data</h1>
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
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from '@vue/runtime-core';
import { useMutation } from '@tanstack/vue-query';
import { api } from '../axios';
import { IBiodata } from '../types/IBiodata';
import Button from './Button.vue';

const route = useRoute();
const router = useRouter();
const name = ref<string>('');
const email = ref<string>('');
const phone = ref<string>('');
const gender = ref<'MALE' | 'FEMALE'>('MALE');

const fetchBio = async (id: string | string[]): Promise<IBiodata> => await api.get(`/bio/${id}`)
  .then((response) => {
    name.value = response.data.name;
    email.value = response.data.email;
    phone.value = response.data.phone;
    gender.value = response.data.gender;
    return response.data;
  });

const { mutate } = useMutation({
  mutationFn: (data: IBiodata) => api.put<IBiodata[]>(`/bio/${route.params.id}`, data)
});

const updateBio = () => {
  mutate({
    name: name.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value,
  });
  router.go(-1);
};

onMounted(() => {
  fetchBio(route.params.id)
});
</script>