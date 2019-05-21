<template>
  <header class="top0v" data-ripple>
    <router-link to="/" tag="a" class="top0v_left">
      <h1>Blossom</h1>
    </router-link>
    <!-- Theme changer -->
    <div class="top0v_right">
      <router-link class="icon" to="/write" tag="a" exact data-ripple>
        <div class="active-hidden" v-tooltip.top="'글쓰기'">
          <i class="material-icons-round md-32">add</i>
        </div>
        <div class="active-visible" v-tooltip.top="'출판'">
          <i class="material-icons-round md-32">publish</i>
        </div>
      </router-link>
      <router-link class="icon" to="/view" tag="a" exact data-ripple>
        <div class="active-hidden" v-tooltip.top="'목록보기'">
          <i class="material-icons-round md-32">view_list</i>
        </div>
        <router-link class="active-visible" v-tooltip.top="'수정'" to="/write" tag="div">
          <i class="material-icons-round md-32">edit</i>
        </router-link>
      </router-link>
      <div id="ThemePalette" class="icon" data-ripple>
        <div id="ThemeMenu" v-tooltip.top="'테마변경'">
          <i class="material-icons-round md-32">color_lens</i>
        </div>
        <div id="ThemePaletteSelector">
          <button id="Sunrise" class="btn -themechanger -selected"></button>
          <button id="Dawn" class="btn -themechanger"></button>
          <button id="Sunset" class="btn -themechanger"></button>
          <button id="Midnight" class="btn -themechanger"></button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>

</script>
