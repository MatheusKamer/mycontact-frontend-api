import { Container } from './styles'

import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'
import ContactsService from '../../services/ContactsService'

export default function NewContact() {
  async function handleSubmit(formData) {
    const contact = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      category_id: formData.category
    }

    try {
      const response = await ContactsService.createContact(contact);
      console.log(response);
      alert('Contato cadastrado com sucesso!');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <Container>
      <PageHeader
        title='Novo contato'
      />

      <ContactForm
        buttonLabel={'Cadastrar'}
        onSubmit={handleSubmit}
      />
    </Container>
  )
};
