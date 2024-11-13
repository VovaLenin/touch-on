<template>
  <div class="app-container p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-8">Contact Management</h1>

    <!-- Компонент для поиска контактов -->
    <SearchBar @search="handleSearch" />

    <!-- Компонент для отображения списка контактов -->
    <ContactList
      :contacts="filteredContacts"
      @deleteContact="deleteContact"
      @editContact="editContact"
    />

    <!-- Компонент для добавления и редактирования контактов. -->
    <ContactForm
      @addContact="addContact"
      @updateContact="updateContact"
      :editingContact="editingContact"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import SearchBar from "./components/SearchBar.vue";
import ContactList from "./components/ContactList.vue";
import ContactForm from "./components/ContactForm.vue";
import type { Contact } from "./types";

export default defineComponent({
  name: "App",
  components: {
    SearchBar,
    ContactList,
    ContactForm,
  },
  setup() {
    // Состояние для контактов и отфильтрованных результатов
    const contacts = ref<Contact[]>([]);
    const searchQuery = ref("");
    const editingContact = ref<Contact | null>(null);

    // Вычисляемое свойство для отфильтрованных контактов
    const filteredContacts = computed(() => {
      return contacts.value.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    // Методы для обработки действий с контактами
    const addContact = (contact: Contact) => {
      contacts.value.push(contact);
    };

    const updateContact = (updatedContact: Contact) => {
      console.log("contacts.value", contacts.value);
      console.log("updateContact.id", updatedContact);

      const index = contacts.value.findIndex((c) => c.id === updatedContact.id);
      if (index !== -1) {
        contacts.value[index] = updatedContact; // Обновление существующего контакта
      }
      editingContact.value = null; // Сброс `editingContact` после редактирования
    };

    const deleteContact = (contactId: number) => {
      contacts.value = contacts.value.filter(
        (contact) => contact.id !== contactId
      );
    };

    const editContact = (contact: Contact) => {
      editingContact.value = { ...contact };
    };

    const handleSearch = (query: string) => {
      searchQuery.value = query;
    };

    return {
      contacts,
      searchQuery,
      filteredContacts,
      editingContact,
      addContact,
      deleteContact,
      editContact,
      handleSearch,
      updateContact,
    };
  },
});
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
