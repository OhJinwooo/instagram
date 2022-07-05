<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step === 1" @click="step++">Next</li>
      <li v-if="step === 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container
    @write="text = $evnet"
    :insta="insta"
    :step="step"
    :image="image"
  />
  

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputfile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>


  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <!-- <div v-if="step === 0">내용0</div>
  <div v-if="step === 1">내용1</div>
  <div v-if="step === 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import insta from "./data";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      insta,
      step: 0,
      image: "",
      text: "",
      filter: ""
    };
  },
  mounted(){
    this.emitter.on('작명', (filter)=>{
      this.filter = filter
      console.log(filter);
    })
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      let myfile = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.text,
        filter: this.filter,
      };
      this.insta.unshift(myfile);
      this.step = 0;
    },
    // more() {
    //   axios
    //     .get("https://codingapple1.github.io/vue/more0.json")
    //     .then((결과) => {
    //       console.log(결과.data);
    //       this.insta.push(결과.data);
    //     });
    // },
    upload(e) {
      let file = e.target.files;
      console.log(file[0]);
      let url = URL.createObjectURL(file[0]);
      this.image = url;
      console.log(url);
      this.step++;
    },
  },
};
</script>

<style>
@import "style.css";
</style>
