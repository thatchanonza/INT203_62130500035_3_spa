<template>
  <div class="container">
    <form
      @submit.prevent="submit"
      class="w-full md:w-1/2 border-2 border-blue-800 p-6 bg-blue-200"
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

        <div class="flex flex-row mb-3">
          <div>
            <label>Select a product</label>
            <select class="field mx-2" v-model="review.product">
              <option disabled value="">Please select one</option>
              <option
                v-for="option in productResults"
                :value="option"
                :key="option"
                :selected="option === review.product"
              >
                {{ option.name }}
              </option>
            </select>
          </div>

          <div class="flex flex-row ml-12">
            <div class="flex items-center">
              <label class="mr-3">Ratings </label>
              <base-rating @sendRating="getRating"></base-rating>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-3">
          <base-input
            v-model="review.description"
            label="Description"
            type="text"
          ></base-input>
        </div>
        <div class="flex justify-between">
        <pre>{{ review }}</pre>
        </div>
      </div>
      <div class="w-full pt-3">
        <button
          type="submit"
          class="w-full bg-blue-100 border border-blue-600 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-blue-400 hover:text-white text-xl cursor-pointer"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<!--alert may be base alert-card component-->
<script>
import axios from "axios";

export default {
  components: {
  },
  data() {
    return {
      urlRegisterData: "http://localhost:3000/reviewResults",
      productResults: [],
      review: {
        name: "",
        rating: 0,
        description: "",
        product: "",
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
          product: this.review.product,
        })
        .then((response) => {
          console.log(response);
          //  window.location.href = '/review'
        });
    },
    async fetchSurveyResult() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      return data;
    },
    getRating(newRating) {
      this.review.rating = newRating;
    },
  },
  async created() {
    this.productResults = await this.fetchSurveyResult();
  },
};
</script>

