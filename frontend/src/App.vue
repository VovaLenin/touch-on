<template>
  <div class="app-container p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-8">Contact Management</h1>

    <div class="components-wrapper">
      <!-- Компонент для поиска контактов -->
      <SearchBar @search="handleSearch" />

      <!-- Компонент для отображения списка контактов -->
      <ContactList
        :contacts="filteredContacts"
        @deleteContact="deleteExistingContact"
        @editContact="editContact"
      />

      <!-- Компонент для добавления и редактирования контактов. -->
      <ContactForm
        @addContact="addNewContact"
        @updateContact="updateExistingContact"
        :editingContact="editingContact"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from "./apiService";
import SearchBar from "./components/SearchBar.vue";
import ContactList from "./components/ContactList.vue";
import ContactForm from "./components/ContactForm.vue";
import type { Contact } from "./types";

// Состояние для контактов и отфильтрованных результатов
const contacts = ref<Contact[]>([]);
const searchQuery = ref("");
const editingContact = ref<Contact | null>(null);

// Получение контактов при загрузке компонента
const loadContacts = async () => {
  const savedContacts = localStorage.getItem("contacts");

  if (savedContacts) {
    contacts.value = JSON.parse(savedContacts);
  }

  try {
    const fetchedContacts = await fetchContacts();
    contacts.value = fetchedContacts;
    localStorage.setItem("contacts", JSON.stringify(fetchedContacts)); // Сохранение в localStorage
  } catch (error) {
    console.error("Failed to load contacts from API:", error);
  }
};

// Добавление нового контакта
const addNewContact = async (contact: Contact) => {
  const newContact = await addContact(contact);
  contacts.value.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts.value)); // Обновляем localStorage
};
// Обновление контакта
const updateExistingContact = async (updatedContact: Contact) => {
  const contact = await updateContact(updatedContact);
  if (contact) {
    const index = contacts.value.findIndex((c) => c.id === contact.id);
    if (index !== -1) {
      contacts.value[index] = contact;
      localStorage.setItem("contacts", JSON.stringify(contacts.value)); // Обновляем localStorage
    }
  }
  editingContact.value = null;
};

// Удаление контакта
const deleteExistingContact = async (contactId: number) => {
  const success = await deleteContact(contactId);
  if (success) {
    contacts.value = contacts.value.filter(
      (contact) => contact.id !== contactId
    );
    localStorage.setItem("contacts", JSON.stringify(contacts.value)); // Обновляем localStorage
  }
};

// Метод для установки контакта на редактирование
const editContact = (contact: Contact) => {
  editingContact.value = { ...contact };
};

// Обработка поиска
const handleSearch = (query: string) => {
  searchQuery.value = query;
};

// Вычисляемое свойство для отфильтрованных контактов
const filteredContacts = computed(() => {
  return contacts.value.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Загружаем контакты при монтировании компонента
onMounted(loadContacts);
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
}
.components-wrapper {
  max-width: 400px;
  margin: 0 auto;
}
</style>
