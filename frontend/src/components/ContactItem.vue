<template>
  <li
    class="contact-item p-4 border-b border-gray-200 flex justify-between items-center"
  >
    <div class="contact-info">
      <h3 class="text-lg font-semibold">{{ contact.name }}</h3>
      <p class="text-sm text-gray-600">Phone: {{ contact.phone }}</p>
      <p class="text-sm text-gray-600">Email: {{ contact.email }}</p>
    </div>
    <div class="contact-actions flex gap-2">
      <button
        @click="editContact"
        class="text-blue-500 hover:underline"
        data-testid="edit-button"
      >
        Edit
      </button>
      <button
        @click="deleteContact"
        class="text-red-500 hover:underline"
        data-testid="delete-button"
      >
        Delete
      </button>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";
import type { Contact } from "../types";

const props = defineProps({
  contact: {
    type: Object as PropType<Contact>,
    required: true,
  },
});
const emit = defineEmits(["delete", "edit"]);

const deleteContact = () => {
  emit("delete", props.contact.id);
};

const editContact = () => {
  emit("edit", props.contact);
};
</script>

<style scoped>
.contact-item {
  transition: background-color 0.2s ease;
}
.contact-item:hover {
  background-color: #f9fafb;
}
</style>
