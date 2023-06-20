import { Form, ButtonContainer } from './styles'

import PropTypes from 'prop-types'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import { useState } from 'react'

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder='Nome'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup
        /* error={'O formato do e-mail é invalido'} */
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      >
        <Input placeholder='E-mail' /* error */ />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
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
