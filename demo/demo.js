const contacts = [
  {
    id: 1,
    age: 28,
    name: "Sia Billal Quba",
    email: "siabillal@gmail.com",
    phone: "+6281122334455",
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
      country: "Indonesia",
    },
    isFavorited: true,
  },
];

function displayContacts() {
  for (let i = 0; i < contacts.length; i++) {
    const contact = contacts[i];
    console.log(`
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

addContacts(
  "Vinsmoke Sanji",
  27,
  "+21123123",
  "sobamask@pirates.com",
  "Baratie Work",
  "East Blue",
  "Indonesia",
  false
);
displayContacts();
