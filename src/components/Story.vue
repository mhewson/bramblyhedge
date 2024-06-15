<template>
  <v-container class="">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
        <v-row>
          <v-col cols="12">
          <v-card>
            <v-carousel hide-delimiters show-arrows="hover">
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                cover
                eager
              ></v-carousel-item>
            </v-carousel>
          </v-card>
          </v-col>
        </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import img1 from '../assets/img/stories/forest.jpg';
import img2 from '../assets/img/stories/learning.jpg';
import img3 from '../assets/img/stories/woods.png'
export default {
  data () {
    return {
      items: [
        {
          src: img1,
        },
        {
          src: img2,
        },
        {
          src: img3,
        },
      ],
    }
  },
}
</script>