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

function addContact(
  name,
  age,
  phone,
  email,
  street,
  city,
  country,
  isFavorited
) {
  const lastContact = dataContacts[dataContacts.length - 1];
  const lastID = lastContact.id;
  const nextID = lastID + 1;

  const newContact = {
    id: nextID,
    name,
    age,
    phone,
    email,
    address: { street, city, country },
    isFavorited,
  };
  dataContacts.push(newContact);
  console.log(`Added: ${name}`);
}

function searchContacts(contacts, keyword) {
  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return foundContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  console.log(`Deleted contact id:${id}`);
  dataContacts = updatedContacts;
}

function updateContactById(id, newContactData) {
  const updatedDataContacts = dataContacts.map((oneContact) => {
    if (oneContact.id === id) {
      return {
        ...oneContact,
        ...newContactData,
      };
    } else {
      return oneContact;
    }
  });

  dataContacts = updatedDataContacts;
}

// displayContacts(dataContacts);

// addContact(
//   "Novel Baswedan",
//   47,
//   "+6285566778899",
//   "novelbaswedan@example.com",
//   "Jalan Deposito T8",
//   "Jakarta",
//   "Indonesia",
//   true
// );
// displayContacts(dataContacts);

// const results = searchContacts(dataContacts, "baswedan");
// displayContacts(results);

// deleteContact(dataContacts, 1);
// displayContacts(dataContacts);

updateContactById(1, {
  name: "Billal Saja",
  email: "billalsaja@example.com",
  phone: "+621122334455",
  age: 30,
});

displayContacts(dataContacts);
