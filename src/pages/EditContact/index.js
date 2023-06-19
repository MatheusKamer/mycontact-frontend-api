import { Container } from './styles'

import ContactForm from '../../components/ContactForm/index'

import PageHeader from '../../components/PageHeader'

export default function EditContact() {
  return (
    <Container>
      <PageHeader
        title='Editar contato'
      />

      <ContactForm
        buttonLabel={'Salvar alterações'}
      />
    </Container>
  )
};
