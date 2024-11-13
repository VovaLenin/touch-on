import type { Contact } from "./types";

const API_URL = "http://localhost:3000/contacts";

// Получение всех контактов
export const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch contacts");
  return response.json();
};

// Добавление нового контакта
export const addContact = async (contact: Contact): Promise<Contact> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(contact),
  });
  if (!response.ok) throw new Error("Failed to add contact");
  return response.json();
};

// Обновление существующего контакта
export const updateContact = async (
  updatedContact: Contact
): Promise<Contact | null> => {
  const response = await fetch(`${API_URL}/${updatedContact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedContact),
  });
  if (!response.ok) throw new Error("Failed to update contact");
  return response.json();
};

// Удаление контакта
export const deleteContact = async (contactId: number): Promise<boolean> => {
  const response = await fetch(`${API_URL}/${contactId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete contact");
  return true;
};
