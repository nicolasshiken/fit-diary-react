import { Exercise, Section, AddSessionForm } from "../components";

export default function AddSession() {
    return(
        <>
            <h1 className="title">Agregar Sesion</h1>

            <Section className="section" title="Sesion del 9/1/2021">

                <Exercise
                    name="Levantamiento de piernas"
                    weight="Bw"
                    amount="15 reps."
                    sets="3 sets"
                />

            </Section>

            <AddSessionForm />

        </>
    )
}