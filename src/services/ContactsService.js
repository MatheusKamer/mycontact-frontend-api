import HttpClient from "./utils/HttpClient";

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001')
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts/0269be6a-c43a-462a-a791-d799804d3428?orderBy=${orderBy}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', contact);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ContactsService();
