<template>
  <div>
    <star-rating v-model:rating="rating"></star-rating>
    <div>Currently Selected: {{ rating }}</div>

    <!-- <star-rating
      :show-rating="false"
      @rating-selected="setRating"
    ></star-rating> -->
    <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
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
      message:"eiei"
    }
  }
  // methods: {
  //   setRating: function (rating) {
  //     this.rating = "You have Selected: " + rating + " stars";
  //   },
  //   showCurrentRating: function (rating) {
  //     this.currentRating =
  //       rating === 0
  //         ? this.currentSelectedRating
  //         : "Click to select " + rating + " stars";
  //   },
  //   setCurrentSelectedRating: function(rating) {
  //     this.currentSelectedRating = "You have Selected: " + rating + " stars";
  //   }
  // },
  // data() {
  //   return {
  //     rating: "No Rating Selected",
  //     message: "test",
  //     currentRating: "No Rating",
  //     currentSelectedRating: "No Current Rating",
  //     boundRating: 3,
  //   };
  // },
};
</script>