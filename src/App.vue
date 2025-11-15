<script setup>
import nutrientesDoMeuPrato from '@/view/nutrientesDoMeuPrato.vue'
</script>

<template>
  <div class="p-4">
    <nav class="flex gap-4 mb-4">
      <router-link to="/" class="text-blue-500">Home</router-link>
      <router-link to="/jogoAlimento" class="text-blue-500">Jogo</router-link>
      <router-link to="/nutrientesDoMeuPrato" class="text-blue-500">Nutrientes do Meu Prato</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>
