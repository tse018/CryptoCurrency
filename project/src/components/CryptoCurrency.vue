<template>
   <table class="crypto-table">
      <thead class="crypto-table__table-head">
         <tr class="crypto-table__table-row">
            <th class="crypto-table__table-crypto">
               CRYPTO
            </th>

            <th class="crypto-table__table-header">
               PRICE
            </th>

            <th class="crypto-table__table-header">
               MARKED CAP
            </th>

            <th class="crypto-table__table-status">
               24H
            </th>
         </tr>
      </thead>

      <tbody class="crypto-table__body" v-for="valuta in crypto">
         <tr class="crypto-table__table-row" v-if="valuta.rank <= 6">
            <td class="crypto-table__table-value">
               <tr class="crypto-table__table-name">
                  {{ valuta.name }}
               </tr>

               <tr class="crypto-table__table-symbol">
                  {{ valuta.symbol }}
               </tr>
            </td>

            <td class="crypto-table__table-price">
               $ {{ parseFloat(valuta.priceUsd).toFixed(4) }}
            </td>

            <td class="crypto-table__table-marked">
               $ {{ valuta.marketCapUsd.slice(0,3) }} billion
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script>
export default {
   data() {
      return {
         crypto: [],
      };
   },

   created() {
      this.getCryptoApi();
   },

   methods: {
      async getCryptoApi() {
         const url = "https://api.coincap.io/v2/assets";
         const response = await fetch(url);
         const { data } = await response.json();
         this.crypto = data;
      },
   },
};
</script>

<style>
.crypto-table {
   width: 100%;
   height: 100%;
}

.crypto-table__table-head {
   font-size: 24px;
   width: 50%;
   height: 60px;
   border-bottom: 2px solid gray;
}

.crypto-table__table-header {
   width: 25%;
   text-align: left;
}

.crypto-table__table-crypto {
   width: 40%;
   text-align: left;
}

.crypto-table__table-status {
   text-align: right;
} 

.crypto-table__body {
   border-bottom: 2px solid gray;
}

.crypto-table__table-value {
   padding: 40px 40px 0 20px;
}

.crypto-table__table-name {
   font-weight: bold;
}

.crypto-table__table-price {
   padding: 20px 0 0 0;
   font-weight: bold;
}

.crypto-table__table-marked {
   font-weight: bold;
}
</style>
