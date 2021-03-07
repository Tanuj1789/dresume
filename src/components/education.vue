<template>
  <div class="bigdiv">
    <div class="skills">
      <video
        src="@/assets/background.mp4"
        autoplay

        loop
        id="myviedo"
        poster="@/assets/education.jpg"
         class="myvideo"
      >
        >

        <!-- <p>Your browser does not support HTML5 video.</p> -->
      </video>
      <div class="viewport-header">
        <p>Colour-Pallete Generator </p><br>
        <a
          href="https://colorpalette2.netlify.app/"
          target="_blank"
          class="astyle"
        >
          <img src="@/assets/project1.png" class="forimage" />
        </a>
      </div>
      <div class="viewport-header">
        <p>Lost&Found </p><br>
        <a
          href="https://tanuj1789.github.io/Lost-Found/"
          target="_blank"
          class="astyle"
        >
          <img src="@/assets/project2.png" class="forimage" />
        </a>
      </div>
      <div class="viewport-header">
        <p>Colour-Pallete Generator </p>
        <a
          href="https://colorpalette2.netlify.app/"
          target="_blank"
          class="astyle"
        >
          <img src="@/assets/project1.png" class="forimage" />
        </a>
      </div>
      <div class="viewport-header">
        <p>Colour-Pallete Generator </p>
        <a
          href="https://colorpalette2.netlify.app/"
          target="_blank"
          class="astyle"
        >
          <img src="@/assets/project1.png" class="forimage" />
        </a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
   mounted(){
    window.scrollTo(0,document.body.scrollHeight);
  },
}
</script>
<style >
.bigdiv {
  overflow-y: hidden;
  overflow-x: hidden;
  max-height:100vh;
}
.skills {
  display: flex;
  flex-grow: 1;
  min-height:100vh;
  flex-wrap:wrap;
  justify-content: space-evenly;
  align-items: space-around;
}
.viewport-header {
  /* position:fixed; */
  min-width:25vw;
  max-width:25vw;
  min-height:40vh;
  max-height:50vh;
  margin:5vmin;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: inherit;
  flex-grow: 1;
  animation: myanimation;
  /* background: blue; */
}
.viewport-header:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 200px black;
  transition-duration: 0.3s;
}
.myvideo {
  object-fit: cover;
  min-height: 100%;
  max-height: 100%;
  min-width:100%;
  /* min used for big screen */
  max-width:90%;
  position: absolute;
  background: transparent;
}
.astyle {
  height: 100%;
  width: 100%;
}
.forimage{
  height: 100%;
  width: 100%;
}
</style>
