<template>
  <vue-markdown :source="test"/>
</template>

<script>
export default {
  data () {
    return {
      test: '# hi'
    }
  }
}
</script>
