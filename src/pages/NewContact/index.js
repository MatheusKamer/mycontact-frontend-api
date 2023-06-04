import { Container } from './styles'

import Input from '../../components/Input'
import Select from '../../components/Select'
import Button from '../../components/Button'

import PageHeader from '../../components/PageHeader'

export default function NewContact() {
  return (
    <Container>
      <PageHeader
        title='Novo contato'
      />

      <Input type="text" placeholder='Nome' />
      <Input type="email" placeholder='E-mail' />
      <Input type="text" placeholder='Telefone' />
      <Select>
        <option value="Categoria">Categoria</option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Trabalho">Trabalho</option>
      </Select>
      <Button type='button' disabled>Salvar alterações</Button>
    </Container>
  )
};
