import { Session } from "../components";

export default function Sessions() {
    return(
        <>
            <h1 className="title">Sesiones</h1>

            <div className="add-btn">
                <img src="/images/add_circle.svg" alt="Agregar"/>
            </div>

            <Session
                title="Sabado 9 de enero"
            />
        </>
    )
}