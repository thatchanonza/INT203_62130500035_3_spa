<template>
  <h2 class="text-blue-300 mb-2 mt-1 text-base font-bold">{{ review.id }}</h2>
  <div class="bg-white p-6 rounded-lg shadow-lg flex justify-between">
    <div>
      <h2 class="text-2xl font-bold mb-2 text-gray-800">
        "{{ review.description }}"
      </h2>
      <p class="text-gray-700"></p>
      <p class="text-gray-700">{{ review.name }}</p>
      <p class="text-red-700 italic">
        Ratings: {{ review.rating }} , Product: {{ review.product.name }}
      </p>
    </div>
    <!--may be button component-->
    <div>
      <button
        class="uppercase p-2.5 flex items-center bg-red-500 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 m-1"
        @click="deleteReview(review.id)"
      >
        <svg
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
          style="transform: rotate(360deg)"
        >
          <path d="M12 12h2v12h-2z" fill="currentColor"></path>
          <path d="M18 12h2v12h-2z" fill="currentColor"></path>
          <path
            d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
            fill="currentColor"
          ></path>
          <path d="M12 2h8v2h-8z" fill="currentColor"></path>
        </svg>
      </button>
      <!-- <router-link to="/form"> -->
      <button
        class="uppercase p-2.5 flex items-center bg-blue-200 text-blue-50 max-w-max shadow-sm hover:shadow-lg rounded-full w-10 h-10 m-1"
        @click="updateReview(review)"
      >
        <img
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM4MXB0IiB2aWV3Qm94PSIwIC0xIDM4MS41MzQxNyAzODEiIHdpZHRoPSIzODFwdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzcwLjU4OTg0NCAyMzAuOTY0ODQ0Yy01LjUyMzQzOCAwLTEwIDQuNDc2NTYyLTEwIDEwdjg4Ljc5Mjk2OGMtLjAxOTUzMiAxNi41NTg1OTQtMTMuNDM3NSAyOS45ODA0NjktMzAgMzBoLTI4MC41ODk4NDRjLTE2LjU2MjUtLjAxOTUzMS0yOS45ODA0NjktMTMuNDQxNDA2LTMwLTMwdi0yNjAuNTg5ODQzYy4wMTk1MzEtMTYuNTYyNSAxMy40Mzc1LTI5Ljk4MDQ2OSAzMC0zMGg4OC43ODkwNjJjNS41MjM0MzggMCAxMC00LjQ3NjU2MyAxMC0xMCAwLTUuNTIzNDM4LTQuNDc2NTYyLTEwLTEwLTEwaC04OC43ODkwNjJjLTI3LjYwMTU2Mi4wMzEyNS00OS45Njg3NSAyMi4zOTg0MzctNTAgNTB2MjYwLjU4OTg0M2MuMDMxMjUgMjcuNjAxNTYzIDIyLjM5ODQzOCA0OS45Njg3NSA1MCA1MGgyODAuNTg5ODQ0YzI3LjYwMTU2Mi0uMDMxMjUgNDkuOTY4NzUtMjIuMzk4NDM3IDUwLTUwdi04OC43ODkwNjJjMC01LjUyMzQzOC00LjQ3NjU2My0xMC4wMDM5MDYtMTAtMTAuMDAzOTA2em0wIDAiLz48cGF0aCBkPSJtMTU2LjM2NzE4OCAxNzguMzQzNzUgMTQ2LjAxMTcxOC0xNDYuMDE1NjI1IDQ3LjA4OTg0NCA0Ny4wODk4NDQtMTQ2LjAxMTcxOSAxNDYuMDE1NjI1em0wIDAiLz48cGF0aCBkPSJtMTMyLjU0Mjk2OSAyNDkuMjU3ODEyIDUyLjAzOTA2Mi0xNC40MTQwNjItMzcuNjI1LTM3LjYyNXptMCAwIi8+PHBhdGggZD0ibTM2Mi40ODgyODEgNy41NzgxMjVjLTkuNzY5NTMxLTkuNzQ2MDk0LTI1LjU4NTkzNy05Ljc0NjA5NC0zNS4zNTU0NjkgMGwtMTAuNjA1NDY4IDEwLjYwNTQ2OSA0Ny4wODk4NDQgNDcuMDg5ODQ0IDEwLjYwNTQ2OC0xMC42MDU0NjljOS43NS05Ljc2OTUzMSA5Ljc1LTI1LjU4NTkzOCAwLTM1LjM1NTQ2OXptMCAwIi8+PC9zdmc+"
        />
      </button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  props: ["review"],
  data() {
    return {
    };
  },
  methods: {
    deleteReview(id) {
      console.log(id)
      // axios
      //   .delete(`http://localhost:3000/reviewResults/${id}`)
      //   .then((response) => {
      //     return response.data;
      //   })
        // console.log(this.reviewResults);
        this.$emit("deleteReview", id)
    },
    updateReview(review){
      console.log(review)
      this.$emit("updateReview", review)
      // axios
      // .put(`http://localhost:3000/reviewResults/${id}`,{

      // })
    }
    
  },
  
};
</script>
