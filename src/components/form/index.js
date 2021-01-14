import {
    Container,
    Row,
    Item,
    ItemSmall
} from "./styles";

export default function Form({ children, ...restProps }){
    return(
        <Container { ...restProps }>{ children }</Container>
    )
}

Form.Row = function FormRow({ children, ...restProps }) {
    return(
        <Row { ...restProps}>{ children }</Row>
    )
}

Form.Item = function FormItem({ children, ...restProps }) {
    return(
        <Item { ...restProps}>{ children }</Item>
    )
}

Form.ItemSmall = function FormItemSmall({ children, ...restProps }) {
    return(
        <ItemSmall { ...restProps}>{ children }</ItemSmall>
    )
}