<template>
  <div>
    hi
  </div>
</template>

<script>
export default {
  mounted() {
    this.$http.get('/files/pdf')
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
</script>

<style scoped>

</style>