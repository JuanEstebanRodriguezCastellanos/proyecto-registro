<script setup lang="ts">
import Entrenamiento from "./components/Entrenamiento.vue";
import Formulario from "./components/Formulario.vue";
</script>

<template>
  <h1>Tus Entrenamientos</h1>
  <div class="grid-container">
    <div class="column">
      <h2>Registrar Entrenamiento</h2>
      <Formulario />
    </div>

    <div class="column">
      <h2>Historial</h2>
      <Entrenamiento />
    </div>
  </div>
</template>