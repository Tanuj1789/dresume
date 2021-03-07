<template>
  <div class="flex-col">
    <div id="home">
      <img src="@/assets\sparks.png" class="profile" />
      <div class="content">
        <h1
        style="font-family: 'Dancing Script', cursive;"
        >
          Hi. I'm <strong>Tanuj Upadhyay</strong>.
        </h1>
        <br>
        <h5 style="font-family: 'Sansita Swashed', cursive;">
          Versatile computer science student experienced in working with people
          at multiple levels. Aiming to utilize
          my problem-solving, designing and creative skills for the betterment
          of the community.
          </h5> <br>
          <p>

          Sports Programmer || Web
          Developer || Member of Student Academic Council, JIIT ||Robotics Enthusiast</p>
         <a href="https://internshala.com/student/resume?detail_source=resume_direct" style="color:#42b983" target="_blank"><h5>Resume</h5></a>
        <li
        >
          <router-link to="/skills" style="color:#42b983"><h2>Know about what i do?</h2></router-link>
        </li>
      </div>
    </div>
    <div class="footer">
      <a href="https://codeforces.com/profile/uptanuj" target="_blank">
        <img src="@/assets/codeforces.png" class="footerImage"
      /></a>
      <a href="https://www.codechef.com/users/tarus" target="_blank">
        <img src="@/assets/codechef.png"  class="footerImage"
      /></a>
      <a href="https://www.hackerrank.com/tarustarus1789" target="_blank">
        <img src="@/assets/hackerrank.png" class="footerImage"
      /></a>
      <a href="https://auth.geeksforgeeks.org/user/workintanuj/profile" target="_blank">
        <img src="@/assets/geeksforgeeks.png" class="footerImage"
      /></a>
      <a href="https://github.com/Tanuj1789" target="_blank">
        <img src="@/assets/github.png" class="footerImage"
      /></a>
      <a href="https://www.linkedin.com/in/tanuj-upadhyay-4784951a4/" target="_blank">
        <img src="@/assets/linkedin.png" class="footerImage"
      /></a>
      <a href="https://codeforces.com/profile/uptanuj" target="_blank">
        <img src="@/assets/codeforces.png" class="footerImage"
      /></a>
      <a href="https://codeforces.com/profile/uptanuj" target="_blank">
        <img src="@/assets/codeforces.png" class="footerImage"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  // mounted(){
  //   window.scrollTo(0,document.body.scrollHeight);
  // },
};
</script>
<style>

.flex-col {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to right,
      rgba(223, 250, 250, 0.5),
      rgb(8, 8, 8)
    ),
    url("D:\\Programming\\vue-webpack\\src\\assets\\theme1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  /* background:blue; */
}
#home {
  /* background:chartreuse; */
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-items: center;
  align-items: center;
}
.profile {
  flex-grow: 1;
  display: flex;
  margin: 3%;
  max-width: 400px;
  /* min-height:68%; */
  max-width: 25%;
  align-self: center;
  border-radius: 50%;
  flex-grow: 1;
}
.profile:hover {
  border-radius: 50%;
  transform: scale(1.05) rotate(-3deg);
  transition-duration: 0.5s;
  border-bottom: solid 15px;
}
.content {
  /* background:chartreuse; */
  flex-grow: 1;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 25%;
  max-width: 500px;
  font-family:Calligraffitti;
  font-weight: 100%;
  flex-wrap: wrap;
  color:wheat;
}
.content:hover {
  color:white;
  transform: scale(1.1);
  transition-duration: 0.5s;
  background:rgba(10, 10, 10, 0.7);
}
.content:hover a{
  filter:drop-shadow(1px 1px 5px white)
}
.content:hover li{
  filter:drop-shadow(20px 0px 8px #42b983);
}
.footer {
  /* background: pink; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content : space-around;
  flex-grow: 1;
}
.footerImage {
  min-width: 20%;
  max-width: 50%;
  /* background: chartreuse; */
  filter: grayscale(50%);

}
.footerImage:hover {
  min-width: 20%;
  max-width: 50%;
  filter: grayscale(0%);
}
</style>
