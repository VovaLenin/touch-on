const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let contacts = [
  {
    id: 1,
    name: "John Doe",
    phone: "+7(123)456-7890",
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+7(989)654-3210",
    email: "jane@example.com",
  },
];

// Получение всех контактов
app.get("/contacts", (req, res) => {
  res.json(contacts);
});

// Добавление нового контакта
app.post("/contacts", (req, res) => {
  const { name, phone, email } = req.body;
  const newContact = { id: Date.now(), name, phone, email };
  contacts.push(newContact);
  res.status(201).json(newContact);
});

// Обновление контакта
app.put("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id, 10);
  const { name, phone, email } = req.body;
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (contactIndex !== -1) {
    contacts[contactIndex] = { id: contactId, name, phone, email };
    res.json(contacts[contactIndex]);
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
});

// Удаление контакта
app.delete("/contacts/:id", (req, res) => {
  const contactId = parseInt(req.params.id, 10);
  contacts = contacts.filter((contact) => contact.id !== contactId);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
