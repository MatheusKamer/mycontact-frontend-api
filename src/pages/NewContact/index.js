import { Container } from './styles'

import PageHeader from '../../components/PageHeader'
import ContactForm from '../../components/ContactForm'

export default function NewContact() {
  return (
    <Container>
      <PageHeader
        title='Novo contato'
      />

      <ContactForm
        buttonLabel={'Cadastrar'}
      />
    </Container>
  )
};
