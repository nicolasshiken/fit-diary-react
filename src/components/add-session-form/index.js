import { Form } from "../"

export default function AddSessionForm() {
    return(
        <Form>

            <Form.Row>

                <Form.Item>
                    <label>Ejercicio</label>
                    <input type="text"/>
                </Form.Item>

                <Form.Item>
                    <label>Sección</label>
                    <input type="text"/>
                </Form.Item>

            </Form.Row>

            <Form.Row>

                <Form.ItemSmall>
                    <label>Carga</label>
                    <input type="text"/>
                </Form.ItemSmall>

                <Form.ItemSmall>
                    <label>Cantidad</label>
                    <input type="text"/>
                </Form.ItemSmall>

                <Form.ItemSmall>
                    <label>Sets</label>
                    <input type="text"/>
                </Form.ItemSmall>

            </Form.Row>

            <div className="add-btn">
                <img src="/images/add_circle.svg" alt="Agregar"/>
            </div>

            <button className="cta">finalizar</button>

        </Form>
    )
}