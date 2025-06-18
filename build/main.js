"use strict";
class Contact {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
let contacts = [];
let contactId = 0;
function addConantact() {
    const nameInput = document.getElementById("name-input");
    const phoneInput = document.getElementById("phone-input");
    const name = nameInput.value;
    const phone = parseInt(phoneInput.value);
    if (name && phone) {
        contacts.push(new Contact(contactId++, name, phone));
        renderContact();
        nameInput.value = "";
        phoneInput.value = "";
    }
}
function renderContact() {
    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
        const listItem = document.createElement("li");
        const divItem = document.createElement("div");
        divItem.className = "item";
        divItem.textContent = `${contact.name}: ${contact.phone}`;
        listItem.appendChild(divItem);
        contactList.appendChild(listItem);
    });
}
