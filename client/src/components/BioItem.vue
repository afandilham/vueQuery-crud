<template>
  <div class="card">
    <form class="card-remove">
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
        </svg>
      </button>
    </form>
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
interface Item {
  name: string;
  email: string;
  phone: string;
  gender: 'MALE' | 'FEMALE';
}

const props = defineProps<Item>();
</script>