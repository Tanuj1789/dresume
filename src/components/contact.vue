<template>
  <div class="main">
    <header>
      <h2>Have me make stuff for you!</h2>
      <p style="display: flex; align-self: flex-start">{{ success }}</p>
    </header>
    <form @submit.prevent="addEmail()" class="row">
      <div class="flex-row">
        <div class="inputbox">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            v-model="name"
          />
        </div>
        <div class="inputbox">
          <input
            name="email"
            id="email"
            placeholder="Email"
            type="email"
            v-model="email"
          />
          <p style="color: red">{{ msg }}</p>
        </div>
      </div>
      <div class="inputbox">
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          v-model="subject"
        />
      </div>
      <div class="flex-row">
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows="4"
          v-model="review"
        ></textarea>
      </div>
      <div>
        <ul class="flex-row">
          <li>
            <input
              type="submit"
              style="background: #2ecc71"
              value="Send Message"
            />
          </li>
          <li><input type="reset" value="Clear Form" class="alt" /></li>
        </ul>
      </div>
    </form>
    <!-- <div v-for="pname in listofnames" v-bind:key="pname.email">
      {{ pname.name }}
      <div>
      {{listofnames}}
    </div> -->
    <div>
      <h3>Find me on ...</h3>
      <ul class="social">
        <li>
          <a href="https://github.com/Tanuj1789" target="_blank">
            <img src="@/assets/github.png" class="footerImage"
          /></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tanuj-upadhyay-4784951a4/"
            target="_blank"
          >
            <img src="@/assets/linkedin.png" class="footerImage"
          /></a>
        </li>
      </ul>
      <hr />
    </div>
  </div>
</template>

<script>
// import firebase1 from "firebase\\auth";
import { names, auth } from "../firebase";
// import {firebase1} from 'firebase/auth'
// require('firebase/auth')
export default {
  data() {
    return {
      email: "",
      msg: "",
      success: "",
      name: "",
      subject: "",
      review: "",
      listofnames: [],
    };
  },
  mounted() {},
  methods: {
    addEmail() {
      this.success = "";
      this.msg = "";
      auth.createUserWithEmailAndPassword(this.email, "1234567").then(
        (user) => {
          console.log(user);
          this.success =
            this.name + ", your review has been successfully added";
          names.push({
            name: this.name,
            email: this.email,
            subject: this.subject,
            review: this.review,
          });
        },
        (err) => {
          this.msg = err;
        }
      );
      var p = [{ name: "", email: "" }];
      names.on("value", function (snapshot) {
        snapshot.forEach(function (childsnapshot) {
          var data = childsnapshot.val();
          // console.log(data.email,data.name);
          p.push({ name: data.name, email: data.email });
          // console.log(p)
        });
      });
      this.listofnames = p;
      // console.log('lois',this.listofnames);
      p = [];
    },
    submitName() {
      // db.push({name:this.name , edit:false});
    },
  },
  firebase: {},
};
</script>

<style scoped>
.main {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background: black; */
  min-width: 80%;
  /* background: pink; */
}
.inputbox {
  margin-top: 2%;
}
h2 {
  color: white;
  font-size: 40px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
h3 {
  color: white;
  font-size: 20px;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
}
.row {
  display: flex;
  margin-top: 5%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
  justify-self: center;
  align-items: center;
  flex-grow: 1;
  /* margin-right:2%;    */
  border: solid 3px white;
  flex-wrap: wrap;
  /* padding:5%; */
  /* background:yellow; */
}
input {
  min-height: 30px;
  /* min-width: 100px; */
  border-radius: 5%;
  border: solid 3px black;
  color: white;
  font-weight: 400;
  font-size: 25px;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
textarea {
  width: 100%;
  border-radius: 5%;
  border: solid 3px black;
  color: white;
  font-weight: 400;
  font-size: 25px;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #414345,
    #232526
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #414345,
    #232526
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
input:active {
  height: 43px;
  width: 343px;
}
input:hover {
  box-shadow: 2px 2px 20px black;
}
::placeholder {
  color: whitesmoke;
  opacity: 0.8;
  font-weight: 10;
  font-family: "Times New Roman", Times, serif;
  letter-spacing: 0.3mm;
  font-size: 20px;
  padding: 8px;
}
.footerImage {
  min-width: 20%;
  max-width: 30%;
  max-height:10%;
  /* background: chartreuse; */
  filter: grayscale(50%);

}

.footerImage:hover {
  min-width: 20%;
  max-width: 30%;
  max-height:10%;
  filter: grayscale(0%);
  filter:drop-shadow(0px 3px 10px white)
}
</style>