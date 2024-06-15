<template>
  <v-app-bar app color="brand" elevation="4">
    <v-toolbar-title class="menu-title">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn v-for="link in links" :key="link.name" :to="link.path" text>{{ link.name }}</v-btn>
    </v-toolbar-items>
    <v-btn icon @click="drawer = !drawer" class="hidden-md-and-up">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" temporary right>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.name" :to="link.path" @click="drawer = false">
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Brambly Hedge Preschool: Where Learning Comes Naturally',
    },
  },
  data() {
    return {
      drawer: false,
      links: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ],
    };
  },
};
</script>

<style scoped>

.menu-title {
  font-size: var(--v-type-step-0);
}

.hidden-md-and-up {
  display: none;
}

.hidden-sm-and-down {
  display: flex;
}

@media (max-width: 960px) {
  .hidden-md-and-up {
    display: flex;
  }

  .hidden-sm-and-down {
    display: none;
  }
}
</style>
