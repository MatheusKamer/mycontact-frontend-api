import { Container, Header, ListContainer, Card } from './styles.js'

import arrow from '../../assets/images/icons/arrow.svg'
import edit from '../../assets/images/icons/edit.svg'
import trash from '../../assets/images/icons/trash.svg'

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>0 contatos</strong>
        <a href='/'>Novo contato</a>
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
              <strong>Matheus Silva</strong>
              <small>instagram</small>
            </div>
            <span>matheus@hotmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit' />
            </a>
            <button type='button'>
              <img src={trash} alt='Delete' />
            </button>
          </div>
        </Card>
        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Matheus Silva</strong>
              <small>instagram</small>
            </div>
            <span>matheus@hotmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit' />
            </a>
            <button type='button'>
              <img src={trash} alt='Delete' />
            </button>
          </div>
        </Card>
        <Card>
          <div className='info'>
            <div className='contact-name'>
              <strong>Matheus Silva</strong>
              <small>instagram</small>
            </div>
            <span>matheus@hotmail.com</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className='actions'>
            <a href='/'>
              <img src={edit} alt='Edit' />
            </a>
            <button type='button'>
              <img src={trash} alt='Delete' />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}
