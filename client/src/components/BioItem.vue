<template>
  <div class="card">
    <div class="card-action">
      <router-link class="card-edit" :to="`/bio/${props.id}`">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></svg>
      </router-link>
      <button class="card-remove" type="submit" @click="removeBio.mutate(props.id)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
        </svg>
      </button>
    </div>
    <div class="bio-img">
      <img src="../assets/user.svg" alt="img">
    </div>
    <div class="card-profile">
      <h3>{{ props.name }}</h3>
      <p>{{ props.email }}</p>
    </div>
    <div class="card-detail">
      <p>{{ props.phone }}</p>
      <p>{{ props.gender }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { api } from '../axios';

interface Item {
  id: string | undefined;
  name: string;
  email: string;
  phone: string;
  gender: 'MALE' | 'FEMALE';
}

const props = defineProps<Item>();

const removeBio = useMutation((id: any) => {
  return api.delete(`/bio/${id}`);
})
</script>