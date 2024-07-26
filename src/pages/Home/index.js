import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState, useCallback } from 'react'

import { Container, InputSearchContainer, Header, ListContainer, Card, ErrorContainer, EmptyListContainer, SearchNotFoundContainer } from './styles.js'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import sad from '../../assets/images/sad.svg'
import emptyBox from '../../assets/images/empty-box.svg'
import magnifieQuestion from '../../assets/images/magnifier-question.svg'

import Loader from '../../components/Loader'
import Button from '../../components/Button'

import ContactsService from '../../services/ContactsService.js'

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false)

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm])

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy)

      setContacts(contactsList)
      setHasError(false)
    } catch (error) {
      setHasError(true)
    } finally {
      setIsLoading(false);
    }
  }, [orderBy])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  function handleSearchContact(event) {
    setSearchTerm(event.target.value)
  }

  function handleTryAgain() {
    loadContacts()
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {contacts.length > 0 && (
        <InputSearchContainer>
          <input
            type='text'
            placeholder='Pesquisar contato...'
            onChange={handleSearchContact}
          />
        </InputSearchContainer>)
      }

      <Header justifyContent={
        hasError
        ? 'flex-end'
        : (contacts.length > 0
            ? 'space-between'
            : 'center'
          )
      }>
        {(!hasError && contacts.length > 0) && (
            <strong>
            {filteredContacts.length}
            {filteredContacts.length === 1 ? ' contato' : ' contatos'}
          </strong>
        )}
        <Link to='/new'>Novo contato</Link>
      </Header>

      {hasError && (
        <ErrorContainer>
          <img src={sad} alt='Sad' />
          <div className='details'>
            <strong>Ocorreu um erro ao obter os seus contatos.</strong>
            <Button type='button' onClick={handleTryAgain}>Tentar novamente</Button>
          </div>
        </ErrorContainer>
      )}

      {!hasError && (
        <>
          {(contacts.length < 1 && !isLoading) && (
            <EmptyListContainer>
              <img src={emptyBox} alt='EmptyBox' />
              <p>
                Você ainda não tem nenhum contato cadastrado!
                Clique no botão <strong>"Novo contato"</strong> para adicionar.
              </p>
            </EmptyListContainer>
          )}

          <div>
            {(contacts.length > 0 && filteredContacts.length < 1) && (
              <SearchNotFoundContainer>
                <img src={magnifieQuestion} alt='MagnifieQuestion' />
                <p>
                  Nenhum contato encontrado com o termo <strong>"{searchTerm}"</strong>.
                </p>
              </SearchNotFoundContainer>
            )}
          </div>

          {filteredContacts.length > 0 && (
            <ListContainer
              orderBy={orderBy}
            >
              <button
                type='button'
                onClick={handleToggleOrderBy}
              >
                <span> Nome</span>
                <img src={arrow} alt='arrowIndicator' />
              </button>
            </ListContainer>
          )}

          {
            filteredContacts.map((contact) => (
              <Card
                key={contact.id}
              >
                <div className='info'>
                  <div className='contact-name'>
                    <strong>{contact.name}</strong>
                    {contact.category_name && (
                      <small>{contact.category_name}</small>
                    )}
                  </div>
                  <span>{contact.email}</span>
                  <span>{contact.phone}</span>
                </div>

                <div className='actions'>
                  <Link to={`/edit/${contact.id}`}>
                    <img src={edit} alt='Edit' />
                  </Link>
                  <button type='button'>
                    <img src={trash} alt='Delete' />
                  </button>
                </div>
              </Card>
            ))
          }
        </>
      )}
    </Container >
  )
};
