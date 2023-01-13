<template>
  <h2>Contact VueQuery</h2>
  <BioForm />
  <div class="bio-lists">
    <div v-if="isLoading">Now loading...</div>
    <BioItem v-for="item in data" :key="item.id" 
      :name="item.name" 
      :email="item.email" 
      :phone="item.phone"
      :gender="item.gender" />
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { api } from '../axios';
import { IBiodata } from '../types/IBiodata';
import BioForm from './BioForm.vue';
import BioItem from './BioItem.vue';

const getBiodata = async () => {
  const response = await api.get<IBiodata[]>('/bio');
  return response.data;
};

const { isLoading, data } = useQuery({
  queryKey: ['bio'],
  queryFn: getBiodata,
});
</script>