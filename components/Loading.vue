<template>
  <div class="loading" />
</template>
<script>
export default {};
</script>
<style scoped>
.checkBoxGroup {
  margin: 5rem;
}
.checkbox {
  color: red;
}
.loading {
  width: 160px;
  height: 160px;
  border-radius: 150px;
  border: 15px solid #fff;
  border-top-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -80px;
  margin-left: -80px;
  animation: loading 1.2s linear infinite;
  -webkit-animation: loading 1.2s linear infinite;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
