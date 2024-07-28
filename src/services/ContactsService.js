import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`, {
      headers: {
        'Authorization': 'Bearer token'
      }
    });
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', { body: contact });
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactsService();
