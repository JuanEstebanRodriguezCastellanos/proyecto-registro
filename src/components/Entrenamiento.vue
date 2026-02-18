<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import type { Entrenamiento } from "../types/Entrenamiento";

const entrenamientos = defineModel<Entrenamiento[]>({ required: true });

let unsubscribe: () => void;

onMounted(() => {
  const q = query(
    collection(db, "entrenamientos"),
    orderBy("fecha", "desc")
  );

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
</script>

<template>
  <div class="cards">
    <div class="card" v-for="e in entrenamientos" :key="e.id">
      <div class="info">
        <strong>{{ e.fecha }}</strong>
        <p>{{ e.duracion }} min · {{ e.distancia }} km</p>
      </div>

      <!-- Se elimina el bloque de botones -->
      <!-- <div class="acciones">
        <button @click="emit('editar', e)">✏️</button>
        <button @click="eliminar(e.id)">🗑️</button>
      </div> -->
    </div>
  </div>
</template>