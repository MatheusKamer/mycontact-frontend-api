/* Bibliotecas */
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
/* utilFunctions */
import isEmailValid from '../../utils/isEmailValid'
import formatPhone from '../../utils/formatPhone'
import useErrors from '../../hooks/useErrors'
import CategoriesService from '../../services/CategoriesService'
/* Estilos */
import { Form, ButtonContainer } from './styles'
/* Componentes */
import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'

export default function ContactForm({ buttonLabel, onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors()

  const isFormValid = (name && errors.length === 0);

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await CategoriesService.listCategories();
        setCategories(categories)
      } catch {} finally {
        setIsLoadingCategories(false)
      }
    }

    loadCategories()
  }, [])

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail invalido' })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value))
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit({
      name, email, phone: phone.replace(/\D/g, ''), category,
    })
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome *'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type='email'
          error={getErrorMessageByFieldName('email')}
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          disabled={isLoadingCategories}
        >
          <option value=''>Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type='submit' disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}
