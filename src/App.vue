<template>
  <v-app>
    <menu-bar :title="heroTitle"></menu-bar>
    <v-main class="hedge-container">
      <router-view @update-scroll="updateScroll"></router-view>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    MenuBar,
    AppFooter,
  },
  methods: {
    updateScroll(scrollY) {
      // Additional global scroll logic if needed
    },
  },
};
</script>

<style scoped>
/* Your global styles here */
</style>
