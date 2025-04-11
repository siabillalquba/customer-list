# Customer List

Customer list of Flozka, local florist in Batam

## Features

1. **Display Contacts** : Display all contacts that has been added into customer list.
2. **Add Contact** : Add new contact into customer list.
3. **Edit Contact** : Edit information related to existing contact.
4. **Delete Contact** : Delete any contact except favorited contact.

## Flowchart

```mermaid
  graph TD;
    A[Start]-->B[Display All Contacts];
    B-->C{Get User Choice };
    C-->|One| D[Add Contact];
    C-->|Two| E[Edit Contact];
    C-->|Three| F[Delete Contact];
```
