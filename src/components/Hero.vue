<template>
  <v-parallax height="100vh" src="../assets/img/hero/sarah.jpg" class="hero-parallax">
    <v-responsive class="mx-auto align-center fill-height mx-auto" max-width="1200">
      <img :class="['logo', { 'fadeIn': scrollY > 200 }]" src="../assets/logo.png"/>
      <div class="content-wrapper" :class="{ fadeOut: scrollY > 200 }">
        <h1 class="title fluid-text-h1 mb-4">
          <span class="hero-branding">Brambly Hedge Preschool: Where Learning Comes Naturally</span>
        </h1>
        <p class="subheading">
          <span class="bg-amber-lighten-4">Learning through art, play, nature, and each other.</span>
        </p>
      </div>
    </v-responsive>
    <!-- Placeholder for the three cards that will parallax up -->
    <div class="cards-placeholder"></div>
  </v-parallax>
</template>


<script>
export default {
  data() {
    return {
      scrollY: 0,
      heroTitle: 'Brambly Hedge Preschool: Where Learning Comes Naturally',
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      this.$emit('update-scroll', this.scrollY);
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.logo {
  width: 150px;
  position: fixed;
  top: 60px;
  left: 6px;
  z-index: 1200;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.logo.fadeIn {
  opacity: 1;
}

.v-parallax__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.hero-parallax {
  box-shadow: 0 4px 24px rgba(69, 90, 100, 0.9);
  position: relative;
  z-index: 100;
}

.content-wrapper {
  text-align: center;
  transition: opacity 2s ease; /* Doubled the transition duration */
}

.fadeOut {
  opacity: 0;
}

h1.title {
  font-family: "Fredericka the Great", serif;
  font-size: var(--v-type-step-5);
  color: #fff;
  width: 500px;
  text-align: left;
  line-height: 1.2;
  font-weight: 400;
}

.hero-branding {
  color: #455A64;
  background-color: #aed581;
  opacity: 80%;
}

.subheading {
  font-size: var(--v-type-step-2);
  color: #455A64;
  width: 500px;
  text-align: left;
  font-weight: bold;
}

.bg-amber-lighten-4 {
  color: #455A64 !important;
  background-color: #FFFACD;
  opacity: 80%;
}

.cards-placeholder {
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
}

@media (max-width: 600px) {
  .hero-branding {
    font-size: var(--v-type-step-2);
  }

  .subheading {
    font-size: var(--v-font-step-0);
  }
}
</style>
