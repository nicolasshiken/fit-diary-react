import { GeneralContainer } from "../";

export default function Session({ title }) {
    return(
        <GeneralContainer>
            <GeneralContainer.Icons>
                <img src="/images/delete.svg" alt="Eliminar"/>
                <img src="/images/edit.svg" alt="Editar"/>
            </GeneralContainer.Icons>
            <GeneralContainer.Title>{ title }</GeneralContainer.Title>
        </GeneralContainer>
    )
}