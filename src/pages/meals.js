import { Section, Meal } from "../components";

export default function Meals() {
    return(
        <>
            <h1 className="title">Comidas</h1>

            <div className="add-btn">
                <img src="/images/add_circle.svg" alt="Agregar"/>
            </div>

            <Section 
                title="Sabado 9 de enero"
            >

                <Meal
                    title="Desayuno"
                    details="Licuado del rico"
                />

            </Section>
        </>
    )
}