<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
    <div class="bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full">
      <h1 class="text-2xl font-bold mb-4">Jogo de Escolhas</h1>

      <!-- Texto da fase -->
      <p class="mb-6 text-lg">{{ currentStep.text }}</p>

      <!-- Botões de escolha -->
      <div class="space-y-3">
        <button
          v-for="option in currentStep.options"
          :key="option.text"
          @click="selectOption(option)"
          class="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          {{ option.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepIndex: 0,
      steps: [
        {
          text: "Você acorda em uma floresta escura. O que faz?",
          options: [
            { text: "Explorar a floresta", next: 1 },
            { text: "Procurar abrigo", next: 2 }
          ]
        },
        {
          text: "Você encontra um caminho iluminado por tochas.",
          options: [
            { text: "Seguir o caminho", next: 3 },
            { text: "Voltar e procurar abrigo", next: 2 }
          ]
        },
        {
          text: "Você encontra uma cabana abandonada e decide descansar. Fim.",
          options: [{ text: "Reiniciar", next: 0 }]
        },
        {
          text: "Você encontra um vilarejo e é salvo pelos moradores! Fim.",
          options: [{ text: "Reiniciar", next: 0 }]
        }
      ]
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.stepIndex];
    }
  },
  methods: {
    selectOption(option) {
      this.stepIndex = option.next;
    }
  }
};
</script>
