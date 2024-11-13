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
      <button @click="editContact" class="text-blue-500 hover:underline">
        Edit
      </button>
      <button @click="deleteContact" class="text-red-500 hover:underline">
        Delete
      </button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Contact } from "../types";

export default defineComponent({
  name: "ContactItem",
  props: {
    contact: {
      type: Object as PropType<Contact>,
      required: true,
    },
  },
  emits: ["delete", "edit"],
  setup(props, { emit }) {
    const deleteContact = () => {
      emit("delete", props.contact.id);
    };

    const editContact = () => {
      emit("edit", props.contact);
    };

    return {
      deleteContact,
      editContact,
    };
  },
});
</script>

<style scoped>
.contact-item {
  transition: background-color 0.2s ease;
}
.contact-item:hover {
  background-color: #f9fafb;
}
</style>
