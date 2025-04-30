const contactFormElement = document.getElementById("contact-form");

let dataContacts = [
  {
    id: 1,
    name: "Sia Billal Quba",
    email: "siabillalquba@example.com",
    phone: "+6281122334455",
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
      country: "Indonesia",
    },
    age: 28,
    isFavorited: true,
  },
  {
    id: 2,
    name: "Bacharuddin Jusuf Habibie",
    email: "bjhabibie@example.com",
    phone: "+6282233445566",
    address: {
      street: "Templergraben 55",
      city: "Aachen",
      country: "Germany",
    },
    age: 83,
    isFavorited: false,
  },
  {
    id: 3,
    name: "Anies Baswedan",
    email: "aniesbaswedan@example.com",
    phone: "+6283344556677",
    address: {
      street: "College Park",
      city: "Maryland",
      country: "United States",
    },
    age: 55,
    isFavorited: true,
  },
];

function displayContacts(contacts) {
  contacts.forEach((contact) => {
    console.log(`
    ID: ${contact.id}  
    Full Name   : ${contact.name}
    Age         : ${contact.age} years old
    Phone       : ${contact.phone}
    Email       : ${contact.email}
    Address     : ${contact.address.street}, ${contact.address.city}, ${
      contact.address.country
    }
    ${contact.isFavorited ? "Favorited" : ""}
  `);
  });
}

function addContact(contactData) {
  const lastContact = dataContacts[dataContacts.length - 1];
  const lastID = lastContact.id;
  const nextID = lastID + 1;

  const newContactData = {
    id: nextID,
    ...contactData,
  };
  dataContacts.push(newContactData);
  //  console.log(`Added: ${name}`);
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.phone.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.address.street.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.address.city.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.address.country.toLowerCase().includes(keyword.toLowerCase()) ||
      contact.age.toString().includes(keyword)
  );

  console.log(`Found Contacts: ${keyword}`);
  return foundContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((oneContact) => oneContact.id !== id);
  console.log(`Deleted contact id: ${id}`);
  dataContacts = updatedContacts;
}

function updateContactById(id, updatedContactData) {
  const updatedDataContacts = dataContacts.map((oneContact) => {
    if (oneContact.id === id) {
      return {
        ...oneContact,
        ...updatedContactData,
      };
    } else {
      return oneContact;
    }
  });
  console.log(`Updated contact id: ${id}`);
  dataContacts = updatedDataContacts;
}

function renderContacts() {
  const dataContactsListElement = document.getElementById("data-contacts");

  dataContactsListElement.innerHTML = dataContacts
    .map((oneContact) => {
      return `
<li>
  <h2>${oneContact.name}</h2>
  <p>${oneContact.age} years old</p>
  <p>${oneContact.phone}</p>
  <p>${oneContact.email}</p>
  <p>
    ${oneContact.address.street},
    ${oneContact.address.city},
    ${oneContact.address.country}
  </p>
  <p>${oneContact.isFavorited ? "⭐ Favorited" : ""}</p>
</li>`;
    })
    .join("");
}

function submitContact(event) {
  event.preventDefault();

  const formData = new FormData(contactFormElement);

  const newContactFormData = {
    name: String(formData.get("name")),
    age: Number(formData.get("age")),
    phone: String(formData.get("phone")),
    email: String(formData.get("email")),
    address: {
      street: String(formData.get("address.street")),
      city: String(formData.get("address.city")),
      country: String(formData.get("address.country")),
    },

    //   isFavorited: Boolean(formData.get("isFavorited")),
  };

  addContact(newContactFormData);
  renderContacts();
}

// ---------------------------------
// Program
// ---------------------------------

contactFormElement.addEventListener("submit", submitContact);

renderContacts();
