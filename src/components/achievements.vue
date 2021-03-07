<template>
  <div class="bigdiv">
    <bigImage v-bind:bg="curimage" v-bind:show="clicks" v-on:updateshow="close()"/>
    <div v-bind:class="{skills:show, notskills:!show}">
      <div class="subskills">

        <div class="mytitle">Competitive Programming</div>
        <div class="myskills">
          <img src="@/assets/hrAdvance.png" v-on:click="open('hrAdvance')" />
          <img src="@/assets/hr2.png" v-on:click="open('hr2')" />
        </div>
      </div>
      <div class="subskills">
        <div class="mytitle">Internship</div>
        <div class="myskills">
          <img src="@/assets/internship1.png" v-on:click="open('internship1')" />
          <img src="@/assets/internship2.png" v-on:click="open('internship2')" />
        </div>
      </div>

      <div class="subskills">
        <div class="mytitle">Tech-Evnets</div>
        <div class="myskills">
          <img src="@/assets/Tech1.png" v-on:click="open('Tech1')" />
          <img src="@/assets/Tech2.png" v-on:click="open('Tech2')" />
          <img src="@/assets/Tech3.png" v-on:click="open('Tech3')" />
          <img src="@/assets/Tech4.png" v-on:click="open('Tech4')" />
          <img src="@/assets/Tech5.png" v-on:click="open('Tech5')" />
        </div>
      </div>
      <div class="subskills">
        <div class="mytitle">Academics</div>
        <div class="myskills">
          <img src="@/assets/Academic1.png" v-on:click="open('Academic1')" />
          <img src="@/assets/Academic2.png" v-on:click="open('Academic2')" />
          <img src="@/assets/Academic3.png" v-on:click="open('Academic3')" />

        </div>
      </div>
    </div>

  </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
import bigImage from "./bigImage";
export default {
  name: "achievements",
  components: {
    bigImage,
  },
  mounted(){
    <b-spinner label="Loading..."></b-spinner>
    window.scrollTo(0,document.body.scrollHeight);
  }, 
  data()
  {
    return{
      curimage:String,
      show: true,
      clicks:0,
    }
  },
  methods:{
    open(data){
      this.show=false;
      this.clicks=1;
      this.curimage=data

    },
    close(){
      this.show=true;
      this.clicks=0
      // console.log('parent',this.show)
    }
 }
};
</script>
<style scoped>
img{
  filter:grayscale(20%);
}
img:hover{
  filter:grayscale(0%);
}
.bigdiv {
  /* z-index:0; */
  background-image: url("D:\\Programming\\vue-webpack\\src\\assets\\achievements.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  opacity: 0.7;
  filter: grayscale(0%);
}

.skills {
  color: white;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  /* background: inherit; */
}
.notskills {
  /* position:relative; */
  z-index:0;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: space-around;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  opacity:0.4;
  /* background: inherit; */
}
.subskills {
  display: flex;
  height: 25%;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
}
.myskills {
  position: relative;
  /* margin-top:30px; */
  display: flex;
  height: 75%;
  width: 100%;
  flex-wrap: wrap;
}
.myskills img {
  height: 100%;
  padding-left: 2%;
  padding-right: 2%;
  width: 6%;
  filter: grayscale(0%);
}
.mytitle {
  display: flex;

  font-family: Comic Sans MS;
  font-weight: 900;
  width: 100%;
  font-size: 25px;
}
.myskills img {
  animation: myanimation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  flex-grow: 1;
  max-width: 210px;
}
@keyframes myanimation {
  0% {
    transform: rotateZ(5deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(5deg);
  }
}
.myskills img:hover {
  box-shadow: 0px 0px 40px black;
  animation: none;
  transform: scale(1.02);
}
</style>