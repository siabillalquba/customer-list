const contacts = [
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
    isFavorited: true,
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
];

function displayContacts() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
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
  }
}

function addContacts(
  name,
  age,
  phone,
  email,
  street,
  city,
  country,
  isFavorited
) {
  const lastContact = contacts[contacts.length - 1];
  const lastID = lastContact.id;
  const nextID = lastID + 1;

  contacts.push({
    id: nextID,
    name,
    age,
    phone,
    email,
    address: { street, city, country },
    isFavorited,
  });
}

function searchContact(search) {
  const foundName = contacts.filter((contact) => contact.name.includes(search));
  console.log(foundName);
}

function deleteContact() {
  //
}

function updateContact() {
  //
}

addContacts(
  "Novel Baswedan",
  47,
  "+6284455667788",
  "novelbaswedan@example.com",
  "Jalan Deposito T8",
  "Jakarta",
  "Indonesia",
  false
);
displayContacts();

searchContact("Baswedan");
