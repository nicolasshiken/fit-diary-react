import { Exercise, Section } from '../components';

export default function SessionDetails() {
    return(
        <>
            <h1 className="title">Sesion del 9/1/2021</h1>

            <Section 
                title="Entrada en calor"
            >

                <Exercise 
                    name="Levantamiento de piernas"
                    weight="Bw"
                    amount="15 reps."
                    sets="3 sets"
                />

            </Section>
        </>
    )
}