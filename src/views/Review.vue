<template>
  <div class="about">
    <div class="px-20 pt-4 pb-8 bg-blue-100">
      <review-card
        v-for="result in reviewResults"
        :key="result.id"
        :review="result"
      ></review-card>
      
    </div>
  </div>
</template>

<script>
import reviewCard from "../components/reviewCard.vue";

export default {
  components: {
    reviewCard,
  },
  data() {
    return {
      reviewResults: [],
    };
  },
  methods: {
    async fetchSurveyResult() {
      const res = await fetch("http://localhost:3000/reviewResults");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.reviewResults = await this.fetchSurveyResult();
  },
};
</script>
