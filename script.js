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
  phone,
  email,
  street,
  city,
  country,
  age,
  isFavorited
) {
  const lastContact = dataContacts[dataContacts.length - 1];
  const lastID = lastContact.id;
  const nextID = lastID + 1;

  const newContact = {
    id: nextID,
    name,
    phone,
    email,
    address: { street, city, country },
    age,
    isFavorited,
  };
  dataContacts.push(newContact);
  console.log(`Added: ${name}`);
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

  // const removeContact = dataContacts.find((contact) =>
  //   contact.name.includes(remove)
  // );
  // if (removeContact.isFavorited == true) {
  //   console.log("Can't delete favorited contact");
  // } else {
  //   console.log(`Deleted: ${removeContact.name}`);
  //   dataContacts.splice(removeContact.id - 1, 1);
  // }
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
  console.log(`Updated contact id: ${id}`);
  dataContacts = updatedDataContacts;
}

// displayContacts(dataContacts);

// addContact(
//   "Novel Baswedan",
//   "+6285566778899",
//   "novelbaswedan@example.com",
//   "Jalan Deposito T8",
//   "Jakarta",
//   "Indonesia",
//   47,
//   true
// );
// displayContacts(dataContacts);

// const foundContacts = searchContacts(dataContacts, "Indonesia");
// displayContacts(foundContacts);

// deleteContact(dataContacts, 2);
// displayContacts(dataContacts);

// updateContactById(3, {
//   name: "Anies Rasyid Baswedan",
//   email: "arbaswedan@example.com",
// });
// displayContacts(dataContacts);

function renderContacts() {
  const dataContactsListElement = document.getElementById("data-contacts");

  dataContactsListElement.innerHTML = dataContacts
    .map((oneContact) => {
      return `<li>
  <h2>${oneContact.name}</h2>
  <p>${oneContact.age} years old</p>
  <p>${oneContact.phone}</p>
  <p>${oneContact.email}</p>
  <p>${oneContact.address.street}, ${oneContact.address.city}, ${oneContact.address.country}</p>
  </li>`;
    })
    .join("");
}

renderContacts();
