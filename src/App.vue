<template>
  <div class="container-fluid" id="app">
    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar-ligth fixed-top bg-light py-1 pl-1">
        <router-link class="text-dark navbar-brand" to="/">
          <img src="/logo.png" alt="" title="" id="logo" />
          <b>XRP Ledger Foundation</b>
        </router-link>
        <!--
            Projects » List + Canny
         -->
        <div class="navbar ml-0 pl-0">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- <router-link class="nav-link mr-3" :class="{ 'text-dark active -font-weight-bold': $router.currentRoute.name === 'About' }" to="/about">About us</router-link> -->
            </li>
            <li class="nav-item">
              <!-- <router-link class="nav-link mr-3" :class="{ 'text-dark active -font-weight-bold': $router.currentRoute.name === 'Projects' }" to="/projects">Our projects</router-link> -->
            </li>
            <li class="nav-item">
              <!-- <router-link class="nav-link mr-3" :class="{ 'text-dark active -font-weight-bold': $router.currentRoute.name === 'Leadership' }" to="/leadership">Leadership</router-link> -->
            </li>
            <li class="nav-item">
              <!-- <router-link class="nav-link mr-3" :class="{ 'text-dark active -font-weight-bold': $router.currentRoute.name === 'Media' }" to="/media">In the media</router-link> -->
            </li>
            <li class="nav-item">
              <!-- <router-link class="nav-link mr-3" :class="{ 'text-dark active -font-weight-bold': $router.currentRoute.name === 'Contact' }" to="/contact">Contact us</router-link> -->
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view class="text-left" />
    <footer class="footer mt-auto py-2">
      <div class="container">
        <span class="text-muted">
          <b>XRP Ledger Foundation</b>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
  html, body {
    height: 100%;
  }

  #app {
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 90px;
    padding-bottom: 70px;
    height: 100%;
  }

  b {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
  }

  header {
    #logo { max-height: 60px; }
    a.navbar-brand {
      padding-right: 14px;
      border-radius: 4px;
      &:hover, &:active {
        background-color: rgba(0, 0, 0, .03);
        // box-shadow: 0 0px 0px 1px rgba(0, 0, 0, .1);
      }
    }
    .navbar-nav {
      a {
        transition: box-shadow 0.15s ease-in-out;

        &:hover, &:active {
          box-shadow: 0 8px 0px -5px rgba(86,129,209, .2);
        }
        &.active {
          box-shadow: 0 8px 0px -6px rgba(0,0,0, .1);
          &:hover, &:active {
            box-shadow: 0 8px 0px -5px rgba(86,129,209, .2);
          }
        }
      }
    }
  }

  footer {
    z-index: 1;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    font-size: .9em;
  }

  /* Custom page CSS
  -------------------------------------------------- */
  /* Not required for template or sticky footer method. */

  main > .container {
    padding: 60px 15px 0;
  }

  .footer {
    background-color: #f5f5f5;
  }

  .footer > .container {
    padding-right: 15px;
    padding-left: 15px;
  }

  code {
    font-size: 80%;
  }
</style>
