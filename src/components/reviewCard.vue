<template>
    <h2 class="text-blue-300 mb-2 mt-1 text-base font-bold">{{ review.id }}</h2>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-2 text-gray-800">"{{ review.description }}"</h2>
      <p class="text-gray-700">{{ review.name }}</p>
      <p class="text-red-700 italic">{{ review.rating }}</p>
    </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>
