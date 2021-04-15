<template>
  <div class="review-list">
    <div class="px-20 pt-4 pb-8 bg-blue-100">
      <div class="container" v-show="form.show">
        <h1>Edit mode</h1>
        <p>edit for old value: {{ form.oldValue }}</p>
        <form
          @submit.prevent="submit"
          class="w-full md:w-1/2 border-2 border-blue-800 p-6 bg-blue-200"
        >
          <h2 class="text-2xl pb-3 font-semibold">Review Service</h2>
          <div>
            <div class="flex flex-col mb-3">
              <base-input
                v-model="newReview.name"
                label="Name"
                type="text"
              ></base-input>
            </div>

            <div class="flex flex-row mb-3">
              <div>
                <label>Select a product</label>
                <select class="field mx-2" v-model="newReview.product">
                  <option disabled value="">Please select one</option>
                  <option
                    v-for="option in productResults"
                    :value="option"
                    :key="option"
                    :selected="option === newReview.product"
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
                v-model="newReview.description"
                label="Description"
                type="text"
              ></base-input>
            </div>
            <div class="flex justify-between">
              <pre>{{ newReview }}</pre>
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

      <review-card
        v-for="result in reviewResults"
        :key="result.id"
        :review="result"
        @deleteReview="deleteArray"
        @updateReview="editArray"
      ></review-card>
      <pre>{{ this.reviewResults }}</pre>
    </div>
  </div>
</template>

<script>
import reviewCard from "../components/reviewCard.vue";
import axios from "axios";

export default {
  components: {
    reviewCard,
  },
  data() {
    return {
      reviewResults: [],
      productResults: [],
      form: {
        show: false,
        oldValue: {
          name: "",
          rating: 0,
          description: "",
          product: "",
        },
      },
      newReview: {
        name: "",
        rating: 0,
        description: "",
        product: "",
      },
    };
  },
  methods: {
    submit() {
      let id = this.form.oldValue.id;
      axios
        .put(`http://localhost:3000/reviewResults/${id}`, this.newReview)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          console.log(this.newReview);
          this.form.show = false;
        })
        .then(() => {
          this.reviewResults = this.reviewResults.map((review) =>
            review.id === id
              ? {
                  ...review,
                  name: this.newReview.name,
                  rating: this.newReview.rating,
                  description: this.newReview.description,
                  product: this.newReview.product,
                }
              : review
          );
        });
    },
    async fetchSurveyResult() {
      const res = await fetch("http://localhost:3000/reviewResults");
      const data = await res.json();
      return data;
    },
    async fetchProductResult() {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();
      return data;
    },
    deleteArray(id) {
      this.reviewResults = this.reviewResults.filter((review) => {
        return review.id !== id;
      });
    },
    editArray(reviewValue) {
      this.form.oldValue = reviewValue;
      this.form.show = true;
    },
    getRating(newRating) {
      this.newReview.rating = newRating;
    },
  },
  async created() {
    this.reviewResults = await this.fetchSurveyResult();
    this.productResults = await this.fetchProductResult();
    // console.log(this.reviewResults)
  },
};
</script>
