<template>
  <div class="hello text-center d-flex h-100">
    <div class="align-self-center align-items-center">
      <div class="d-block">
        <!-- <img alt="XRP Ledger Foundation" id="logo" src="logo.png" style="max-width: 150px" class="mb-4">
        <h1>The <b>XRP Ledger Foundation</b></h1>
        <p>
          Independent, non-profit foundation that furthers activity and development on the XRP Ledger ecosystem.
        </p>
        <div class="alert mt-3 mb-5 alert-warning">
          Something wonderful is about to sprout.
        </div>
        <a href="https://twitter.com/XRPLF" target="_blank" class="text-primary"><i class="fab fa-twitter"></i> @XRPLF</a> -->
        <div class="px-2">
          <div class="row">
            <div class="col-12 col-sm-5 col-md-4 col-lg-3 text-center">
              <img alt="XRP Ledger Foundation" id="logo" src="logo.png" style="max-width: 200px" class="mb-4 fluid img-fluid" />
            </div>
            <div class="col-12 col-sm-7 col-md-8 col-lg-9 text-left">
              <h1 class="mb-0 pb-0"><b>XRP Ledger Foundation</b></h1>
              <h4 class="pt-0 mt-2"><i>To foster development on, and widespread usage of the XRP Ledger</i></h4>
              <h2 class="pt-2">Values and Beliefs</h2>
              <ul class="list-unstyled fa-ul">
                <li class="pt-2"><span class="fa-li"><i class="text-primary far fa-check-circle"></i></span> We value our role as an independent organization acting as a steward for the XRP Ledger</li>
                <li class="pt-2"><span class="fa-li"><i class="text-primary far fa-check-circle"></i></span> We believe trust is foundational to our mission and building trust is a slow, steady process</li>
                <li class="pt-2"><span class="fa-li"><i class="text-primary far fa-check-circle"></i></span> We believe in close working relationships with developers and organizations that build on and contribute to the XRP Ledger</li>
                <li class="pt-2"><span class="fa-li"><i class="text-primary far fa-check-circle"></i></span> We value having the resources and support to compete on an equal playing field with other foundations in achieving our goals</li>
                <li class="pt-2"><span class="fa-li"><i class="text-primary far fa-check-circle"></i></span> We value cultivating a diverse XRP Ledger ecosystem, where many entities contribute to and benefit from the XRP Ledger</li>
              </ul>
            </div>
          </div>
        </div>
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
