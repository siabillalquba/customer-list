const dataContactsListElement = document.getElementById("data-contacts");

// ---------------------------------
// Function
// ---------------------------------

function getCurrentContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  return id;
}

function renderContactById() {
  const id = getCurrentContactId();
  //   const contacts = dataContacts;
  //   const oneContact = contacts.find((oneContact) => oneContact.id === id);
  const oneContact = loadContactById(id);

  dataContactsListElement.innerHTML = `
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
    
    <div>
        <button onclick="renderEditContactFormById(${
          oneContact.id
        })">Edit</button>
        <button onclick="deleteContactById(${oneContact.isFavorited}, ${
    oneContact.id
  })">Delete</button>
    </div>
  </li>`;
}

// ---------------------------------
// Program
// ---------------------------------
window.addEventListener("load", renderContactById);
