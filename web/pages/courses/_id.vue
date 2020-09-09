<script src="../../../server/apps/server/src/courses/courses.controller.spec.ts"></script>
<template>
  <div class="pa-3">
    <h3>{{ courses.name }}</h3>
    <v-select
      v-model="currentIndex"
      :items="
        courses.episodes.map((v, i) => ({
          text: v.name,
          value: i,
        }))
      "
    >
    </v-select>
    <video width="100%" :src="episode.file" controls></video>
    <div>{{ episode }}</div>
  </div>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const { id } = params
    const data = await $axios.$get(`courses/${id}`, {
      params: {
        query: {
          populate: 'episodes',
          paginate: 10,
        },
      },
    })
    console.log(data)
    return {
      id,
      courses: data,
    }
  },
  computed: {
    episode() {
      return this.courses.episodes[this.currentIndex]
    },
  },
  data() {
    return {
      courses: {
        episodes: [],
      },
      currentIndex: 0,
    }
  },
}
</script>

<style></style>
