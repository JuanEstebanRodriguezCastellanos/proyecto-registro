<script setup lang="ts">
import { ref, watch } from "vue";
import type { Entrenamiento } from "../types/Entrenamiento";

const props = defineProps<{ entrenamiento: Entrenamiento }>();
const emit = defineEmits<{
  guardar: [e: Entrenamiento];
  cancelar: [];
}>();

const form = ref({ ...props.entrenamiento });

watch(() => props.entrenamiento, (val) => {
  form.value = { ...val };
});
</script>

<template>
  <div class="overlay" @click.self="emit('cancelar')">
    <div class="modal">
      <h3>Editar Entrenamiento</h3>

      <form @submit.prevent="emit('guardar', form)">
        <label>
          Fecha
          <input type="date" v-model="form.fecha" required />
        </label>

        <label>
          Duración (min)
          <input type="number" v-model.number="form.duracion" min="0" required />
        </label>

        <label>
          Distancia (km)
          <input type="number" step="1" v-model.number="form.distancia" min="0" required />
        </label>

        <div class="acciones">
          <button type="button" class="btn-cancelar" @click="emit('cancelar')">Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</template>