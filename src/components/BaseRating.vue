<template>
  <div>
    <star-rating v-model:rating="rating" :star-size="35" :border-width="2" border-color="#cc1166" @click="sendRating(rating)"></star-rating>
    <!-- <div class="mt-2 m-auto"><p> Ratings score: {{ rating }}</p> </div> -->
  </div>
</template>

<script>
//npm install vue-star-rating@next
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
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