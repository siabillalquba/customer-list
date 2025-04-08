const contacts = [
  {
    name: "Sia Billal Quba",
    email: "siabillal@gmail.com",
    phone: "+6281122334455",
    age: 28,
    id: 1,
  },
  {
    name: "Monkey D Luffy",
    email: "mugiwara@pirates.com",
    phone: "+6282233445566",
    age: 25,
    id: 2,
  },
  {
    name: "Roronoa Zoro",
    email: "marimo@pirates.com",
    phone: "+6283344556677",
    age: 26,
    id: 3,
  },
];

for (let i = 0; i < contacts.length; i++) {
  console.log(`
    ID          : ${contacts[i].id}
    Full Name   : ${contacts[i].name}
    Age         : ${contacts[i].age}
    Phone       : ${contacts[i].phone}
    Email       : ${contacts[i].email}
  `);
}
