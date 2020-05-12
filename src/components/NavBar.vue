<template>
   <b-navbar class="is-link" :fixed-top="true"  :transparent="true">
      <template slot="brand">
         <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img
                    src="../assets/images/formakers_logo.png"
                    alt="formakers_logo"
            >
         </b-navbar-item>
      </template>
      <template slot="start">
         <b-navbar-item tag="router-link" :to="{ path: '/' }">
            HOME
         </b-navbar-item>
         <b-navbar-item href="#">
            플랜 소개
         </b-navbar-item>
         <b-navbar-item tag="router-link" :to="{ path: '/process' }">
            프로세스
         </b-navbar-item>
         <b-navbar-item tag="router-link" :to="{ path: '/company' }">
            회사 소개
         </b-navbar-item>
      </template>

      <template slot="end">
         <b-navbar-item tag="div">
            <div class="buttons">
               <a class="button is-primary">
                  <strong>LOG IN</strong>
               </a>
               <a class="button is-light">
                  CART
               </a>
            </div>
         </b-navbar-item>
      </template>
   </b-navbar>
</template>

<script>
   export default {

   }
</script>

<style scoped lang="scss">

   nav.navbar.is-fixed-top {
      background: transparent;
      font-size: 18px;
      font-weight: 700;
      padding: 20px;
   }


</style>
