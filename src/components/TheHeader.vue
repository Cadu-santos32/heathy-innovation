<template>
  <header class="relative bg-green-700 px-6 py-4 flex justify-between items-center shadow-md">
    <h1 class="text-xl font-bold text-green-50">Alimentação inteligente</h1>

    <!-- Menu desktop -->
    <nav class="hidden md:flex space-x-6 text-green-50">
      <a href="#" class="hover:underline">Sobre</a>
      <a href="#" class="hover:underline">Jogos</a>
      <a href="#" class="hover:underline">Nutrientes do meu prato</a>
    </nav>

    <!-- Botão mobile -->
    <button v-on:click="abrirMenu" class="md:hidden text-green-50 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

    <!-- Menu mobile -->
    <nav v-if="isOpen" class="absolute top-full left-0 w-full bg-emerald-400 flex flex-col items-start px-6 py-4 md:hidden">
      <a href="#" class="py-1 hover:underline text-green-50">Sobre</a>
      <a href="#" class="py-1 hover:underline text-green-50">Jogos</a>
      <a href="#" class="py-1 hover:underline text-green-50">Nutrientes do meu prato</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    abrirMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
</style>
