<template>
  <div class="contact-form p-4 bg-white rounded shadow-md">
    <h2 class="text-xl font-semibold mb-4">
      {{ isEditing ? "Edit Contact" : "Add Contact" }}
    </h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Name</label>
        <input v-model="form.name" type="text" class="input-field" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Phone</label>
        <input v-model="form.phone" type="text" class="input-field" required />
      </div>
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700">Email</label>
        <input v-model="form.email" type="email" class="input-field" required />
      </div>
      <div class="flex gap-2">
        <button type="submit" class="btn-primary">
          {{ isEditing ? "Update" : "Add" }}
        </button>
        <button type="button" @click="resetForm" class="btn-secondary">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watch, computed } from "vue";
import type { Contact } from "../types";

export default defineComponent({
  name: "ContactForm",
  props: {
    editingContact: {
      type: Object as PropType<Contact | null>,
      default: null,
    },
  },
  emits: ["addContact", "updateContact"],
  setup(props, { emit }) {
    // Реактивное состояние формы
    const form = reactive<Contact>({
      id: Date.now(),
      name: "",
      phone: "",
      email: "",
    });

    // Определить, редактируется ли существующий контакт
    const isEditing = computed(() => !!props.editingContact);

    // Откат формы к исходному состоянию
    const resetForm = () => {
      form.id = Date.now();
      form.name = "";
      form.phone = "";
      form.email = "";
      //   emit("updateContact", null);
    };

    // Отслеживать изменения в editingContact и заполнять форму при редактировании
    watch(
      () => props.editingContact,
      (newContact) => {
        if (newContact) {
          form.id = newContact.id;
          form.name = newContact.name;
          form.phone = newContact.phone;
          form.email = newContact.email;
        } else {
          resetForm();
        }
      },
      { immediate: true }
    );

    // Метод обработки отправки формы
    const handleSubmit = () => {
      if (isEditing.value) {
        emit("updateContact", { ...form });
      } else {
        emit("addContact", { ...form, id: Date.now() });
      }
      resetForm();
    };

    return {
      form,
      isEditing,
      handleSubmit,
      resetForm,
    };
  },
});
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 0 auto;
}
.input-field {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-primary {
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-secondary {
  background-color: #f44336;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
