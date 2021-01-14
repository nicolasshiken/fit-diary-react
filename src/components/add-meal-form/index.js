import { Form } from "../";

export default function AddMealForm() {
    return(
        <Form>
            
            <Form.Row>
                <Form.Item>
                    <label>Fecha</label>
                    <input type="date"/>
                </Form.Item>
                <Form.Item>
                    <label>Comida</label>
                    <input type="text"/>
                </Form.Item>
            </Form.Row>

            <Form.Row>
                <Form.Item>
                    <label>Detalles</label>
                    <input type="text"/>
                </Form.Item>
            </Form.Row>

            <Form.Row>

                <Form.ItemSmall>
                    <label>Proteinas</label>
                    <input type="text"/>
                </Form.ItemSmall>

                <Form.ItemSmall>
                    <label>Grasas</label>
                    <input type="text"/>
                </Form.ItemSmall>

                <Form.ItemSmall>
                    <label>Hidratos</label>
                    <input type="text"/>
                </Form.ItemSmall>

                <Form.ItemSmall>
                    <label>Calorias</label>
                    <input type="text"/>
                </Form.ItemSmall>

            </Form.Row>

            <button className="cta">finalizar</button>

        </Form>
    )
}