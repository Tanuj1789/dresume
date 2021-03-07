<template>
  <div id="app">
    <div id="header">
      <ul>
        <li><router-link to="/" class="paint">Home </router-link></li>
        <li><router-link to="/skills" class="paint">Skills </router-link></li>
        <li>
          <router-link to="/education" class="paint">Projects </router-link>
        </li>
        <!-- <li><router-link to="/experience" class="paint">Experience </router-link></li> -->
        <li>
          <router-link to="/achievements" class="paint"
            >Achievements
          </router-link>
        </li>
        <li><router-link to="/contact" class="paint">Contact </router-link></li>
      </ul>
    </div>
    <div v-bind:class="{mybody:show}">
    <router-view> </router-view>
    </div>
  </div>
</template>

<script>

export default {

  name: "App",
  components: {
  },

  data()
  {
    return {
      show:true,
    }
  }
};
</script>

<style >
.paint {
  color: #42b983;
}
.header {

  padding-left: 10px;
  justify-content: center;
}
#app {
  font-family: 'Red Rose', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  display: flex;
  flex-direction: column;
  /* z-index:100; */
  /* position:relative; */
 /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #434343,
    #000000
  );
   background: linear-gradient(
    to right,
    #434343,
    #000000
  );
  min-height: 100vh ;
  width: 100%;
}
body {
  margin: 0px;
}
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

img {
  filter: grayscale(100%);
  background: transparent;
}
img:hover {
  filter: grayscale(0%);
}
.flex-row{
  display:flex;
  justify-content: space-evenly;
}
</style>

