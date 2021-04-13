<template>
  <div class="container">
    <div style="margin-top: 10px; font-weight: bold">{{ rating }}</div>
    <form
      @submit.prevent="submit"
      class="w-full md:w-1/2 border border-red-500 p-6 bg-blue-200"
    >
      <h2 class="text-2xl pb-3 font-semibold">Review Service</h2>
      <div>
        <div class="flex flex-col mb-3">
          <base-input
            v-model="review.name"
            label="Name"
            type="text"
          ></base-input>
        </div>

        <div class="flex flex-col mb-3">
          <base-rating @sendRating="getRating"></base-rating>
        </div>

        <div class="flex flex-col mb-3">
          <base-input
            v-model="review.location"
            label="Location"
            type="text"
          ></base-input>
        </div>

        <div class="flex flex-col mb-3">
          <base-input
            v-model="review.description"
            label="Description"
            type="text"
          ></base-input>
          
        </div>
          <pre>{{ review }}</pre>

      </div>
      <div class="w-full pt-3">
        <button
          type="submit"
          class="w-full bg-blue-100 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<!--alert may be base alert-card component-->
<script>
import BaseRating from "../components/BaseRating";
import axios from "axios";

export default {
  components: {
    BaseRating,
  },
  data() {
    return {
      urlRegisterData: "http://localhost:3000/reviewResults",
      review: {
        location:"",
        name: "",
        rating: 0,
        description: "",
      },
    };
  },
  methods: {
    submit() {
      axios
        .post(this.urlRegisterData, {
          name: this.review.name,
          rating: this.review.rating,
          description: this.review.description,
        })
        .then((response) => {
          console.log(response);
          //  window.location.href = '/review'
        });
    },
    getRating(newRating) {
      console.log("ma di hey" + newRating);
      this.review.rating = newRating;
    },
  },
};
</script>

