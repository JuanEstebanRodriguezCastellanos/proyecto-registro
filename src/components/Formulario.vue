<script setup lang="ts">
import { ref } from "vue";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { Entrenamiento } from "../types/Entrenamiento";

const entrenamiento = ref<Entrenamiento>({
  fecha: "",
  duracion: 0,
  distancia: 0,
});

const guardarEntrenamiento = async () => {
  if (!entrenamiento.value.fecha) return;

  await addDoc(collection(db, "entrenamientos"), {
    fecha: entrenamiento.value.fecha,
    duracion: entrenamiento.value.duracion,
    distancia: entrenamiento.value.distancia,
  });

  // limpiar formulario
  entrenamiento.value = {
    fecha: "",
    duracion: 0,
    distancia: 0,
  };
};
</script>

<template>
  <form @submit.prevent="guardarEntrenamiento" class="form">

    <label>
      Fecha
      <input type="date" v-model="entrenamiento.fecha" required />
    </label>

    <label>
      Duración (min)
      <input type="number" v-model.number="entrenamiento.duracion" required />
    </label>

    <label>
      Distancia (km)
      <input type="number" step="1" v-model.number="entrenamiento.distancia" required />
    </label>

    <button type="submit">Guardar</button>
  </form>
</template>