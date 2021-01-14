import {
    Container,
    Title,
    SubTitle,
    Details,
    Icons,
    MealContainer,
    ExerciseContainer,
    ExerciseDetails,
    ExerciseItem
} from "./styles";

export default function GeneralContainer({ children, ...restProps }) {
    return(
        <Container { ...restProps }>{ children }</Container>
    )
} 

GeneralContainer.Title = function GeneralContainerTitle({ children, ...restProps}) {
    return <Title { ...restProps }>{ children }</Title>
}

GeneralContainer.SubTitle = function GeneralContainerSubTitle({ children, ...restProps}) {
    return <SubTitle { ...restProps }>{ children }</SubTitle>
}

GeneralContainer.Details = function GeneralContainerDetails({ children, ...restProps}) {
    return <Details { ...restProps }>{ children }</Details>
}

GeneralContainer.Icons = function GeneralContainerIcons({ children, ...restProps }) {
    return <Icons { ...restProps }>{ children }</Icons>
}

GeneralContainer.MealContainer = function GeneralContainerMeal({ children, ...restProps }) {
    return <MealContainer { ...restProps } >{ children }</MealContainer>
}

GeneralContainer.ExerciseContainer = function GeneralContainerExercise({ children, ...restProps }) {
    return <ExerciseContainer { ...restProps } >{ children }</ExerciseContainer>
}

GeneralContainer.ExerciseItem = function GeneralContainerExerciseItem({ children, ...restProps }) {
    return <ExerciseItem { ...restProps } >{ children }</ExerciseItem>
}

GeneralContainer.ExerciseDetails = function GeneralContainerExerciseDetails({ children, ...restProps }) {
    return <ExerciseDetails { ...restProps } >{ children }</ExerciseDetails>
}