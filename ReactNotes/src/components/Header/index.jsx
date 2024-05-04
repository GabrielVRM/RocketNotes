import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {
    return(

        <>
        <Container>
            <Profile to= "/profile">
                <img src='https://github.com/GabrielVRM.png' alt="foto do usuario" />
            <div>
                <span>
                    Bem-vindo
                </span>
                <strong>
                    Gabriel Vieira 
                </strong>
            </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
        </>
    )
    
}