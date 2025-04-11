const contacts = [
  {
    id: 1,
    name: "Sia Billal Quba",
    email: "siabillal@gmail.com",
    phone: "+6281122334455",
    age: 28,
    address: {
      street: "Jalan Ir Soekarno No. 17845",
      city: "Batam",
    },
  },
  {
    id: 2,
    name: "Monkey D Luffy",
    email: "mugiwara@pirates.com",
    phone: "+2182233445566",
    age: 25,
    address: {
      street: "Foosha Village 1",
      city: "East Blue",
    },
  },
  {
    id: 3,
    name: "Roronoa Zoro",
    email: "marimo@pirates.com",
    phone: "+2183344556677",
    age: 26,
    address: {
      street: "Shimotsuki Village 1",
      city: "East Blue",
    },
  },
];

for (let i = 0; i < contacts.length; i++) {
  console.log(`
    ID          : ${contacts[i].id}
    Full Name   : ${contacts[i].name}
    Age         : ${contacts[i].age}
    Phone       : ${contacts[i].phone}
    Email       : ${contacts[i].email}
    Address     : ${contacts[i].address.street}, ${contacts[i].address.city}
  `);
}

console.log(contacts);
