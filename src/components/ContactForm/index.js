import { Form, ButtonContainer } from './styles'

import PropTypes from 'prop-types'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder='Nome' />
      </FormGroup>
      <FormGroup
        error={'O formato do e-mail é invalido'}
      >
        <Input placeholder='E-mail' error />
      </FormGroup>
      <FormGroup>
        <Input placeholder='Telefone' />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="Categoria">Categoria</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Trabalho">Trabalho</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit' disabled>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
}
