<template>
  <div class="contact-list">
    <ul>
      <!-- Компонент для отображения одного контакта -->
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="handleDelete(contact.id)"
        @edit="handleEdit(contact)"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ContactItem from "./ContactItem.vue";
import type { Contact } from "../types";

export default defineComponent({
  name: "ContactList",
  components: {
    ContactItem,
  },
  props: {
    contacts: {
      type: Array as PropType<Contact[]>,
      required: true,
    },
  },
  emits: ["deleteContact", "editContact"],
  setup(props, { emit }) {
    const handleDelete = (contactId: number) => {
      emit("deleteContact", contactId);
    };

    const handleEdit = (contact: Contact) => {
      emit("editContact", contact);
    };

    return {
      handleDelete,
      handleEdit,
    };
  },
});
</script>

<style scoped>
.contact-list {
  margin-top: 16px;
}
</style>
