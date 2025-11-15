<template>
  <div class="max-w-3xl mx-auto p-4 md:p-6 space-y-6">

    <h1 class="text-2xl md:text-3xl font-bold mb-4 text-center">
      Calculadora Nutricional
    </h1>

    <!-- SELECT simples -->
    <select
      v-model="alimentoSelecionado"
      class="border rounded p-3 w-full text-base"
    >
      <option value="">Selecione um alimento...</option>

      <option 
        v-for="a in alimentos" 
        :key="a.id" 
        :value="a"
      >
        {{ a.nome }}
      </option>
    </select>

    <!-- Botão adicionar -->
    <button 
      @click="adicionarAlimento"
      class="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Adicionar alimento
    </button>

    <!-- Lista de alimentos escolhidos com quantidade -->
    <div 
      v-for="(item, index) in lista" 
      :key="index" 
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center border-b pb-3 mt-4"
    >
      <p class="font-medium text-lg">{{ item.nome }}</p>

      <input 
        type="number"
        v-model.number="item.peso"
        placeholder="Peso (g)"
        class="border p-3 rounded w-full"
      />

      <div class="flex justify-start sm:justify-end">
        <TrashIcon 
          class="h-7 w-7 text-red-600 cursor-pointer"
          @click="remover(index)"
        />
      </div>
    </div>

    <!-- Botão para calcular -->
    <button 
      @click="calcular"
      class="w-full md:w-auto px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Calcular Nutrição
    </button>

    <!-- RESULTADO -->
    <div v-if="resultado.length > 0" class="mt-8">

      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-center">
        Resultados
      </h2>

      <div 
        v-for="(res, i) in resultado" 
        :key="i"
        class="border p-4 rounded mb-3 bg-gray-50 shadow-sm"
      >
        <p class="text-lg font-medium">
          {{ res.nome }} - {{ res.peso }}g
        </p>

        <ul class="mt-2 text-base space-y-1">
          <li><strong>Calorias:</strong> {{ res.calorias }}</li>
          <li><strong>Proteína:</strong> {{ res.proteina }} g</li>
          <li><strong>Carboidratos:</strong> {{ res.carboidrato }} g</li>
          <li><strong>Fibra:</strong> {{ res.fibra }} g</li>
        </ul>
      </div>

    </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from "vue"
import { TrashIcon } from "lucide-vue-next"

import alimentosJson from "../utils/alimentos.json"

// dados base
const alimentos = ref([])
const alimentoSelecionado = ref("")  // agora é string ou objeto

// lista com alimentos selecionados + peso
const lista = ref([])

// resultado final calculado
const resultado = ref([])

onMounted(() => {
  alimentos.value = alimentosJson
})

function adicionarAlimento() {
  if (!alimentoSelecionado.value) return

  lista.value.push({
    id: alimentoSelecionado.value.id,
    nome: alimentoSelecionado.value.nome,
    calorias: alimentoSelecionado.value.calorias,
    proteina: alimentoSelecionado.value.proteina,
    carboidrato: alimentoSelecionado.value.carboidrato,
    fibra: alimentoSelecionado.value.fibra,
    peso: 0
  })

  alimentoSelecionado.value = ""
}

function remover(index) {
  lista.value.splice(index, 1)
}

function calcular() {
  resultado.value = lista.value
    .filter(item => item.peso > 0)
    .map(item => ({
      nome: item.nome,
      peso: item.peso,
      calorias: ((item.calorias / 100) * item.peso).toFixed(2),
      proteina: ((item.proteina / 100) * item.peso).toFixed(2),
      carboidrato: ((item.carboidrato / 100) * item.peso).toFixed(2),
      fibra: ((item.fibra / 100) * item.peso).toFixed(2)
    }))
}
</script>
