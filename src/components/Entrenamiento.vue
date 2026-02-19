<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { collection, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import type { Entrenamiento } from "../types/Entrenamiento";
import ModalEditar from "./ModalEdicion.vue";

const entrenamientos = ref<Entrenamiento[]>([]);
const entrenamientoEditando = ref<Entrenamiento | null>(null);

let unsubscribe: () => void;

onMounted(() => {
  const q = query(collection(db, "entrenamientos"), orderBy("fecha", "desc"));

  unsubscribe = onSnapshot(q, (snapshot) => {
    entrenamientos.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<Entrenamiento, "id">)
    }));
  });
});

onUnmounted(() => {
  unsubscribe && unsubscribe();
});

const eliminar = async (id: string) => {
  if (!id) return;
  await deleteDoc(doc(db, "entrenamientos", id));
};

const guardarEdicion = async (e: Entrenamiento) => {
  if (!e.id) return;
  await updateDoc(doc(db, "entrenamientos", e.id), {
    fecha: e.fecha,
    duracion: e.duracion,
    distancia: e.distancia,
  });
  entrenamientoEditando.value = null;
};
</script>

<template>
  <ModalEditar
    v-if="entrenamientoEditando"
    :entrenamiento="entrenamientoEditando"
    @guardar="guardarEdicion"
    @cancelar="entrenamientoEditando = null"
  />

  <div class="cards">
    <div class="card" v-for="e in entrenamientos" :key="e.id">

      <div class="info">
        <strong>{{ e.fecha }}</strong>
        <div class="card-stats">
          <div class="stat-block">
            <span class="stat-value">{{ e.duracion }}</span>
            <span class="stat-label">Minutos</span>
          </div>
          <div class="stat-block">
            <span class="stat-value">{{ e.distancia }}</span>
            <span class="stat-label">Km</span>
          </div>
        </div>
      </div>

      <div class="card-acciones">
        <button @click="entrenamientoEditando = e" title="Editar">✏️</button>
        <button @click="eliminar(e.id!)" title="Eliminar">❌</button>
      </div>

    </div>
  </div>
</template>