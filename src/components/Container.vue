<template>
  <div>
    <div v-if="step === 0">
      <Post :insta="insta[i]" :push="push" v-for="(a, i) in insta" :key="i" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step === 1">
      <div :class="filter + ' upload-image'" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox
          :filter="filter"
          :image="image"
          v-for="(filter, i) in filters"
          :key="i"
        >
          {{filter}}
        </FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step === 2">
      <div :class="filter + ' upload-image'" :style="`background-image:url(${image})`"></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  name: "Container-a",
  data() {
    return {
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
      filter: ''
      
    };
  },
  mounted(){
    this.emitter.on('작명', (filter) => {
        this.filter = filter
    })
  },
  props: {
    insta: Array,
    step: Number,
    image: String,
  },
  components: {
    Post,
    FilterBox,
  },
};
</script>

<style></style>
