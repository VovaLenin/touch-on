<template>
  <div class="contact-list">
    <transition-group name="contact" tag="ul">
      <!-- Компонент для отображения одного контакта -->
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="handleDelete(contact.id)"
        @edit="handleEdit(contact)"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ContactItem from "./ContactItem.vue";
import type { Contact } from "../types";

defineProps<{
  contacts: Contact[];
}>();

const emit = defineEmits(["deleteContact", "editContact"]);
const handleDelete = (contactId: number) => {
  emit("deleteContact", contactId);
};

const handleEdit = (contact: Contact) => {
  emit("editContact", contact);
};
</script>

<style scoped>
.contact-list {
  margin: 16px 0 30px;
}

/* Анимации для контактов */
.contact-enter-active,
.contact-leave-active {
  transition: all 0.5s ease;
}
.contact-enter,
.contact-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
