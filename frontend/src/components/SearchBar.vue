<template>
  <div class="search-bar mb-4">
    <input
      v-model="query"
      @input="handleInput"
      type="text"
      placeholder="Search contacts..."
      class="input-field w-full p-2 border rounded"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SearchBar",
  emits: ["search"],
  setup(_, { emit }) {
    // Состояние параметров поиска
    const query = ref("");

    // Метод обработки ввода в поле поиска
    const handleInput = () => {
      emit("search", query.value);
    };

    return {
      query,
      handleInput,
    };
  },
});
</script>

<style scoped>
.search-bar {
  margin: 0 auto;
}
</style>
