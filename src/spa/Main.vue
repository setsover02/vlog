<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <!-- <h2>제목</h2>
        <span>글쓴이</span>
        <span>내용</span> -->
      </div>
      <div :key="index" v-for="value in data" class="col-12">
        <h2>{{ value.title }}</h2>
        <span>{{ value.writer }}</span>
        <span>{{ value.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/data' // dummy data
export default {
  name: 'Read',
  data () {
    return {
      data: data
    }
  },
  methods: {
    write () {
      this.$router.push({
        path: 'write'
      })
    }
  }
}
</script>
