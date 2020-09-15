<template>
  <div class="pa-3">
    <h3>热门课程</h3>
    <v-row>
      <v-col v-for="(item, i) in courses" :key="i">
        <v-card class="mx-auto" max-width="344">
          <router-link :to="`/courses/${item._id}`">
            <v-img :src="item.cover" height="200px"></v-img>

            <v-card-title> Top western road trips</v-card-title>
          </router-link>

          <v-card-subtitle>{{ item.createAt }}</v-card-subtitle>

          <v-card-actions>
            <like-btn text type="Course" :object="item._id">Share</like-btn>

            <v-btn color="purple" text> Explore</v-btn>

            <v-spacer></v-spacer>
          </v-card-actions>
          <v-expand-transition>
            <div>
              <v-divider></v-divider>

              <v-card-text></v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LikeBtn from '../../components/LikeBtn.vue'

export default {
  components: {
    LikeBtn,
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get('courses')
    return {
      courses: data.data,
    }
  },
}
</script>

<style></style>
