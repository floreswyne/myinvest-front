import { Form, DatePicker, Input, InputNumber, Button, message } from "antd";

import PageLayout from "../../components/PageLayout";

export default function CadastrarInvestimento() {

    const layout = {
        labelCol: {
            span: 4, 
        },
        wrapperCol: {
            span: 3,
        }
    };

    const tailLayout = {
        wrapperCol: {
            offset: 4,
        }
    };

    const onFinish = (values: any) => {
        message.success("Investimento salvo com sucesso!");
    };
    const onFinishFailed = (error: any) => {
        message.error("Erro ao tentar salvar o investimento, tente novamente!");
        console.log('Failed: ', error);
    };

    return (
        <PageLayout>
            <div className="site-layout-content">
                <h2>
                    Cadastrar Investimento
                </h2>
                <Form {...layout}
                    name="basic"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Código do ativo"
                        name="codigoAtivo"
                        rules={[
                            {
                                required: true,
                                message: 'Insira o código do ativo!',
                            }
                        ]}
                    > <Input /> </Form.Item>
                    <Form.Item
                        label="Valor"
                        name="valor"
                        rules={[
                            {
                                required: true,
                                message: 'Insira o valor da cota!',
                            }
                        ]}
                    > <Input /> </Form.Item>
                    <Form.Item
                        label="Quantidade de cotas"
                        name="quantidadeCotas"
                        rules={[
                            {
                                required: true,
                                message: 'Insira a quantidade de cotas!',
                            }
                        ]}
                    > <InputNumber /> </Form.Item>
                    <Form.Item
                        label="Data da compra"
                        name="dataCompra"
                        rules={[
                            {
                                required: true,
                                message: 'Insira a data de compra!',
                            }
                        ]}
                    > <DatePicker /> </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </PageLayout>
    );
}
