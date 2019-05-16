<template>
  <header class="top0v">
    <router-link to="/" tag="a" class="top0v_left">
      <img src="../assets/img/logo.svg" />
    </router-link>
    <!-- Theme changer -->
    <div class="top0v_right">
      <button id="Sunrise" class="btn -themechanger -selected"  @onclick="themeHelper.theme='sunrise'"></button>
      <button id="Dawn" class="btn -themechanger"></button>
      <button id="Sunset" class="btn -themechanger" @onclick="themeHelper.theme='sunset'"></button>
    </div>
  </header>
</template>
<script>

</script>
