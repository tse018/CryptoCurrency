<template>
   <div class="header grid">
      <img src="/images/money-bag.svg" alt="crypto logo" class="header__logo grid__item" />

      <div class="header__title grid__item colums-2">
         {{ title }}
      </div>

      <div class="grid__item"></div>
      <div class="grid__item"></div>

      <img class="header__hamburger grid__item " src="/images/charm_menu-hamburger.svg" />
   </div>
</template>

<script>
export default {
   data() {
      return {
         title: "ALL CRYPTOCURRENCIES PRICES",
      };
   },
};
</script>

<style scoped>
/*
.header {
   width: 100vw;
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 10px;
}
.header__logo {
   grid-column: 2 / span 2;
}
.header__title {
   font-weight: var(--font-title-weight);
   font-size: var(--font-title);
   grid-column: 4 / span 5;
}
.header__hamburger {
   grid-column: 12 / span 1;
} */

.header__logo {
   width: 150px;
}

.header__title {
   font-size: 48px;
   width: 960px;
   margin-left: -80px;
   padding-top: 50px;
}

.grid__item {
   background: none;
}
</style>
