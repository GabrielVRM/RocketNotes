import { Header } from '../../components/Header'
import { Input } from '../../components/Input/index.jsx'
import { Textarea } from '../../components/Textarea/index.jsx'
import { Container, Form } from './style.js'
import {Section} from '../../components/Section'
import { NoteItem } from '../../components/NoteItem/index.jsx'
import {Button} from '../../components/Button'
import { Link } from 'react-router-dom'


export function New() {
  return (
    <Container>
    <Header />

    <main>
      <Form>
        <header>
          <h1>Criar nota</h1>
          <Link to="/">voltar</Link>
        </header>

        <Input placeholder="Título" />
        <Textarea placeholder="Observações"/>
        <Section title="Links uteis">
          <NoteItem value='https://rocketseat.com.br'/>
          <NoteItem value='' isNew/>

        </Section>
        <Section title='Marcadores'>
          <div className='tags'>

        <NoteItem value='React'/>
          <NoteItem  isNew placeholder="Nova Tag"/>
     
          </div>

        </Section>
        <Button title="Salvar"/>
      </Form>
    </main>
  </Container>
  )
}