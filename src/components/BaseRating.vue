<template>
  <div>
    <star-rating v-model:rating="rating" @click="sendRating(rating)"></star-rating>
    <div class="mt-2 m-auto"><p> Ratings score: {{ rating }}</p> </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  // prop:['rating'],
  data() {
    return{
      rating:5,
    }
  },
  methods:{
    sendRating(rating){
      console.log(rating)
      this.$emit('sendRating', rating)
    }
  }
};
</script>