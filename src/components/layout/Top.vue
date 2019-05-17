<template>
  <header class="top0v" data-ripple>
    <router-link to="/main" tag="a" class="top0v_left">
      <h1>Blossom</h1>
    </router-link>
    <!-- Theme changer -->
    <div class="top0v_right">
      <router-link class="icon" to="/write" tag="a" exact data-ripple><i class="material-icons-round md-32">edit</i></router-link>
      <router-link class="icon" to="/view" tag="a" exact data-ripple><i class="material-icons-round md-32">visibility</i></router-link>
      <a class="icon" data-ripple><i class="material-icons-round md-32">format_paint</i></a>
      <!-- <button id="Sunrise" class="btn -themechanger -selected"  @onclick="themeHelper.theme='sunrise'"></button>
      <button id="Dawn" class="btn -themechanger"></button>
      <button id="Sunset" class="btn -themechanger" @onclick="themeHelper.theme='sunset'"></button> -->
    </div>
  </header>
</template>
<script>

</script>
