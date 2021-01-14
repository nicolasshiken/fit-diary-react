import { GeneralContainer } from "../";

export default function Exercise({ name, weight, amount, sets}) {
    return(
        <GeneralContainer.ExerciseContainer>
                    
            <GeneralContainer.ExerciseItem>
                <GeneralContainer.ExerciseDetails>{ name }</GeneralContainer.ExerciseDetails>
            </GeneralContainer.ExerciseItem>

            <GeneralContainer.ExerciseItem>
                <GeneralContainer.ExerciseDetails>{ weight }</GeneralContainer.ExerciseDetails>
            </GeneralContainer.ExerciseItem>

            <GeneralContainer.ExerciseItem>
                <GeneralContainer.ExerciseDetails>{ amount }</GeneralContainer.ExerciseDetails>
            </GeneralContainer.ExerciseItem>

            <GeneralContainer.ExerciseItem>
                <GeneralContainer.ExerciseDetails>{ sets }</GeneralContainer.ExerciseDetails>
            </GeneralContainer.ExerciseItem>

        </GeneralContainer.ExerciseContainer>
    )
}