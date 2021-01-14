import { GeneralContainer } from "../";

export default function Meal({ title, details}) {
    return(
        <GeneralContainer.MealContainer>
            <GeneralContainer.SubTitle>{ title }</GeneralContainer.SubTitle>
            <GeneralContainer.Details>{ details }</GeneralContainer.Details>
        </GeneralContainer.MealContainer>
    )
}