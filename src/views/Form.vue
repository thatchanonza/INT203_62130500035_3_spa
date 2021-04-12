<template>
  <div class="container">
    <div style="margin-top: 10px; font-weight: bold">{{ rating }}</div>
    <form
      @submit.prevent="submit"
      class="w-full md:w-1/2 border border-red-500 p-6 bg-blue-200"
    >
      <h2 class="text-2xl pb-3 font-semibold">Send Message</h2>
      <div>
        <div class="flex flex-col mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model.trim="name"
            class="px-3 py-2 bg-blue-100 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col mb-3">
          <base-rating @sendRating="getRating" ></base-rating>
          
          <p>{{ rating }}</p>
        </div>

        <div class="flex flex-col mb-3">
          <label for="email">rating</label>
          <input
            type="text"
            id="rating"
            class="px-3 py-2 bg-blue-100 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
            autocomplete="off"
          />
        </div>

        <div class="flex flex-col mb-3">
          <label for="message">Message</label>
          <textarea
            rows="4"
            id="description"
            v-model.trim="description"
            class="px-3 py-2 bg-blue-100 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
          ></textarea>
        </div>
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

  <div class="bottom-36 right-2 alert-card">
    <!-- Danger -->
    <div
      class="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg max-w-xl mx-auto"
    >
      <div class="text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current w-5 pt-1"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"
          />
        </svg>
      </div>
      <div class="px-3">
        <h3 class="text-red-800 font-semibold tracking-wider">Danger</h3>
        <ul class="list-disc list-inside">
          <li>
            Lorem ipsum is placeholder text commonly used in the graphic, print
          </li>
          <li>
            Lorem ipsum is placeholder text commonly used in the graphic, print
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bottom-2 right-2 alert-card">
    <!-- Success -->
    <div
      class="bg-green-50 p-4 rounded flex items-start text-green-600 shadow-lg max-w-xl mx-auto"
    >
      <div class="text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current w-5 pt-1"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"
          />
        </svg>
      </div>
      <div class="px-3">
        <h3 class="text-green-800 font-semibold tracking-wider">Success</h3>
        <p class="py-2 text-green-700">
          Lorem ipsum is placeholder text commonly used in the graphic, print
        </p>
        <div class="space-x-6">
          <button
            class="text-green-900 font-semibold tracking-wider hover:underline focus:outline-none"
          >
            View Status
          </button>
          <button
            class="text-green-900 font-semibold tracking-wider hover:underline focus:outline-none"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<!--alert may be base alert-card component-->
<script>
import BaseRating from "../components/BaseRating";
import axios from "axios"

export default {
  components: {
    BaseRating,
    
  },
  data(){
    return{
      urlRegisterData: "http://localhost:3000/reviewResults",
      name:"",
      rating:0,
      description:""
    }
  },
  methods:{
    submit(){
      // this.name = 
      // this.rating = rating
      // this.description = description

      axios.post(this.urlRegisterData, {
            name: this.name, 
            rating: this.rating, 
            description: this.description
          })
          .then((response) => {
            console.log(response);
            //  window.location.href = '/review'
          });
    },
    getRating(newRating){
      console.log("ma di hey"+newRating)
      this.rating = newRating;
    }
    
  }
  
};
</script>

