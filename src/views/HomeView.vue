<template>
  <v-responsive>
    <Hero @update-scroll="updateScroll" />
    <ThreeUp />
  </v-responsive>
</template>

<script>
import Hero from '../components/Hero';
import ThreeUp from '../components/ThreeUp'

export default {
  components: {
    Hero,
    ThreeUp,
  },
  methods: {
    updateScroll(scrollY) {
      this.$emit('update-scroll', scrollY);
    },
  },
};
</script>

<style scoped>
/* Scoped styles for HomeView */
</style>
