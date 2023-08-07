<script lang="ts">
  import "./assets/fonts/stylesheet.css";
  import "./assets/style/reset-styles.css";
  import "./assets/style/main-style.scss";
  import { Router, Route } from "svelte-routing";
  import StreetPage from "./pages/StreetPage.svelte";
</script>

<div class="wrapper">
  <Router>
        <div class="wrapper__body">
          <Route component="{StreetPage}" path="/"/>
        </div>
  </Router>
</div>

<style>
</style>
