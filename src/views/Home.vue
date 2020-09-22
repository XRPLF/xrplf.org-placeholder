<template>
  <div class="hello text-center d-flex h-100">
    <div class="align-self-center align-items-center container">
      <div class="d-block pt-5 mt-5">
        <img alt="XRP Ledger Foundation" id="logo" src="logo.png" style="max-width: 150px" class="mb-4">
        <h1>The <b>XRP Ledger Foundation</b></h1>
        <p>
          Independent, non-profit foundation that furthers activity and development on the XRP Ledger ecosystem.
        </p>
        <div class="alert mt-3 mb-5 alert-warning">
          Something wonderful is about to sprout.
        </div>
        <a href="https://twitter.com/XRPLF" target="_blank" class="text-primary"><i class="fab fa-twitter"></i> @XRPLF</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XRPLF',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
