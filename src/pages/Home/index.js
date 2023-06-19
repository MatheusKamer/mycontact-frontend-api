import { Container, InputSearchContainer, Header, ListContainer, Card } from './styles.js'

import { Link } from 'react-router-dom'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'
import Modal from '../../components/Modal/index.js'
import Loader from '../../components/Loader/index.js'

export default function Home() {
  return (

    <Container>
      <Loader />
      {/* <Modal danger /> */}

      <InputSearchContainer>
        <input type='text' placeholder='Pesquisar contato...' />
      </InputSearchContainer>

      <Header>
        <strong>0 contatos</strong>
        <Link to='/new'>Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type='button'>
            <span>Nome</span>
            <img src={arrow} alt='arrowIndicator' />
          </button>
        </header>

        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Matheus Kamer</strong>
              <small>instagram</small>
            </div>
            <span>matheus@hotmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className='actions'>
            <Link to='/edit/123'>
              <img src={edit} alt='Edit' />
            </Link>
            <button type='button'>
              <img src={trash} alt='Delete' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
};
