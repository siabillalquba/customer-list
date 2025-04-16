let dataContacts = [
  {
    id: 1,
    age: 28,
    name: "Sia Billal Quba",
    email: "siabillalquba@example.com",
    phone: "+6281122334455",
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
      country: "Indonesia",
    },
    isFavorited: true,
  },
  {
    id: 2,
    age: 83,
    name: "Bacharuddin Jusuf Habibie",
    email: "bjhabibie@example.com",
    phone: "+6282233445566",
    address: {
      street: "Templergraben 55",
      city: "Aachen",
      country: "Germany",
    },
    isFavorited: false,
  },
  {
    id: 3,
    age: 55,
    name: "Anies Rasyid Baswedan",
    email: "aniesbaswedan@example.com",
    phone: "+6283344556677",
    address: {
      street: "College Park",
      city: "Maryland",
      country: "United States",
    },
    isFavorited: true,
  },
  {
    id: 4,
    age: 55,
    name: "Giring Ganesha",
    email: "giring@example.com",
    phone: "+6284455667788",
    address: {
      street: "Jl Deplu Raya",
      city: "Jakarta",
      country: "Indonesia",
    },
    isFavorited: false,
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
    contact.name.includes(keyword)
  );
  return foundContacts;
}

function deleteContact(contacts, id) {
  const updatedContacts = contacts.filter((contact) => contact.id !== id);
  dataContacts = updatedContacts;
}

function updateContactById(
  id,
  name,
  age,
  phone,
  email,
  street,
  city,
  country,
  isFavorited
) {
  // TODO
}

deleteContact(dataContacts, 1);
displayContacts(dataContacts);

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

// const foundContacts = searchContacts(dataContacts, "Baswedan");
// displayContacts(foundContacts);

// updateContactById("Giring Ganesha", "Giring Nidji");
// displayContacts(dataContacts);
