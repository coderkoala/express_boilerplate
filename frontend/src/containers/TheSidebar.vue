<template>
  <CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])">
    <CSidebarBrand class="d-md-down-none" to="/">
      <img :src="require('../../public/img/logo.png')" class="c-sidebar-brand-full" height="35" />
      <img class="c-sidebar-brand-minimized" :src="require('../../public/img/logo.png')" height="35" />
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" />
  </CSidebar>
</template>

<script>
  import nav from './_nav';

  export default {
    name: 'TheSidebar',
    nav,
    computed: {
      show() {
        return this.$store.state.sidebarShow;
      },
      minimize() {
        return this.$store.state.sidebarMinimize;
      },
    },
  };
</script>
