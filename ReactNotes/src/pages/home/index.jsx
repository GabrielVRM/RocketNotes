import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import {FiPlus, FiSearch} from 'react-icons/fi';
import { Input } from '../../components/Input';
import {Section} from '../../components/Section'
import {Container, Brand, Menu, Search, Content, NewNote} from './style'
import { Note } from '../../components/Note';

export function Home() {
    return(
<>
<Container>
    <Brand>
    <h1>MaximoNotes</h1>
    </Brand>
    <Header></Header>
    <Menu>
        <li>

        <ButtonText title="Todos" isActive/>
        </li>
        <li>
        <ButtonText title="React"/>
        </li>
        <li>
        <ButtonText title="Node"/>
        </li>

    </Menu>

    <Search >

<Input icon={FiSearch} placeholder="pesquisar pleo titulo" />
    </Search>
    <Content>
<Section title= 'Minhas Notas' >
    <Note data={{title: 'React', tags: [{id: 1, name: 'react'}, {id: 2, name: 'node'}]}}/>
    </Section>        

    </Content>
    <NewNote to="/new">
        <FiPlus />
            Criar Nota
    </NewNote>
</Container>
</>

    )
    
}