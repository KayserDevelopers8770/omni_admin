<template>
  <div class="default-layout">
    <header class="header">
      <a href="#">logo</a>
    </header>
    <main class="main-content">
      <slot></slot>
    </main>
    <footer><p>Copyright &copy; 2018</p></footer>
  </div>
</template>

<script>
  export default {
    name : 'DefaultLayout'

  }
</script>
