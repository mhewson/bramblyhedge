<template>
  <div class="three-up-wrapper">
 
    <div class="three-up-container">
      <v-container>
        <v-responsive class="mx-auto align-center fill-height mx-auto" max-width="100%">
          <div class="text-center mt-16 mb-16">
            <h2 class="text-h4">Welcome</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </v-responsive>
      </v-container>
    </div>
    <div class="cards-container">
      <v-container>
        <v-responsive class="mx-auto align-center fill-height mx-auto" max-width="100%">
          <v-row class="cards-row">
            <v-col cols="12" md="4" v-for="(card, index) in cards" :key="index">
              <div>
                <v-hover v-slot="{ isHovering, props }">
                  <v-card class="mx-auto custom-card" max-width="344" v-bind="props">
                    <v-img :src="card.image" />
                    <v-card-text>
                      <h2 class="text-h6 text-primary">{{ card.title }}</h2>
                      <p class="text">{{ card.description }}</p>
                    </v-card-text>
                    <v-overlay :model-value="isHovering" class="align-center justify-center" scrim="#455A64" contained>
                      <v-btn variant="flat">See more info</v-btn>
                    </v-overlay>
                  </v-card>
                </v-hover>
              </div>
            </v-col>
          </v-row>
        </v-responsive>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg',
          title: 'Magento Forests',
          description: 'Travel to the best outdoor experience on planet Earth. A vacation you will never forget!'
        },
        {
          image: 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg',
          title: 'Magento Forests',
          description: 'Travel to the best outdoor experience on planet Earth. A vacation you will never forget!'
        },
        {
          image: 'https://cdn.vuetifyjs.com/images/cards/forest-art.jpg',
          title: 'Magento Forests',
          description: 'Travel to the best outdoor experience on planet Earth. A vacation you will never forget!'
        }
      ]
    };
  }
};
</script>

<style scoped>

.three-up-wrapper {
  position: relative;
  overflow: visible;
  z-index: 0;
}

.three-up-container {
  background-color: #E0E0E0; /* Light earthy color that complements #455A64 */
  padding-bottom: 100px; /* Extra space to accommodate overlapping cards */
}

.cards-container {
  position: relative;
  top: -70px; /* Adjust this value to control the overlap amount */
  z-index: 1;
}

.cards-row {
  display: flex;
  justify-content: center;
}

.text {
  font-size: var(--v-step-xs);
}

.custom-card {
  position: relative;
  border: 8px solid white;
  border-radius: 16px; /* adjust as needed for rounded corners */
  box-shadow: none;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 1; /* Ensure cards are visible on load */
  transform: translateY(0); /* Start position */
}

.custom-card::before {
  content: '';
  position: absolute;
  top: -8px; /* Same as outer border width */
  left: -8px; /* Same as outer border width */
  right: -8px; /* Same as outer border width */
  bottom: -8px; /* Same as outer border width */
  border: 4px solid #455A64; /* Inner border color and width */
  border-radius: 12px; /* Inner border rounded corners (outer border radius - inner border width) */
  pointer-events: none; /* Prevents interaction with the pseudo-element */
  box-sizing: border-box; /* Ensures padding and border are included in the element's total width and height */
}
</style>
