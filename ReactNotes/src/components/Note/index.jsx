import {Container} from './style.js'
import {Tag} from '../Tag'

export function Note ({data, ...rest}) {

    return(<>
    <Container {...rest}>
        <h1>{data.title}</h1>

{data.tags && 
<footer>
    {
    data.tags.map(tag => <Tag title={tag.name} key={tag.id}> {tag.name} </Tag>)
}
    </footer>
}
    </Container>
    
    </>)
    
}