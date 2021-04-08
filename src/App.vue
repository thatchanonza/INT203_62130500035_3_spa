<template>
   <nav id="nav" class="w-full top-0 p-1 text-white bg-gray-300">
    <div class="flex justify-between">
      <div class="ml-6 self-center">
        <!-- <a href="index.html"> -->
          <span>
          <router-link to="/">Logo
            <!-- <img class="h-12 w-16" src="./assets/logojj.png" alt="#" /> -->
          </router-link>
          </span>
          <!-- </a> -->
      </div>
      <div class="mr-6 self-center">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/form">Form</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>


#nav {
  padding: 1em;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#nav a.router-link-exact-active {
  color: #ce4848;
}
</style>
