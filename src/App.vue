<template>
  <div id="app">
    <!-- import navbar component -->
    <Navbar/>
    <div id="app-container">
      <router-view/>
    </div>
    <Footer/>
  </div>

</template>

<style>
@import './assets/css/style.css';
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
  },
  beforeCreate: function () {
    this.$store.dispatch('authenticate')
  }
}
</script>
