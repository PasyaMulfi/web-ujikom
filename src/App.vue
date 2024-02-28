<template>
  <header>
    <Navbar /> <!-- Menambahkan komponen Navbar -->
  </header>
  <router-view /> <!-- Menampilkan konten halaman -->
  <footer>
    <Footer /> <!-- Menambahkan komponen Footer -->
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'; 
import Footer from './components/Footer.vue'; 
</script>

<style scoped>

</style>

<script>
export default {
  components: {
    Navbar,
    Footer 
  }
}
</script>
