import { Container, InputSearchContainer, Header, ListContainer, Card } from './styles.js'

import { Link } from 'react-router-dom'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import { useEffect, useMemo, useState } from 'react'

import Loader from '../../components/Loader'
import ContactsService from '../../services/ContactsService.js'

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm])

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactsService.listContacts(orderBy)

        setContacts(contactsList)
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadContacts();
  }, [orderBy])

  function handleToggleOrderBy() {
    setOrderBy((prevState) => prevState === 'asc' ? 'desc' : 'asc')
  }

  function handleSearchContact(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type='text'
          placeholder='Pesquisar contato...'
          onChange={handleSearchContact}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}</strong>
        <Link to='/new'>Novo contato</Link>
      </Header>

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
    </Container >
  )
};
