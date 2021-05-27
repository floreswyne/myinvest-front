import { useState } from 'react';
import { render } from '@testing-library/react';

import "antd/dist/antd.css";
import { Table, Button, message } from 'antd';
import PageLayout from '../../components/PageLayout';

const { Column } = Table;

export default function ListarInvestimentos() {

    const [investimentos, setInvestimentos] = useState([]);

    let remove = (record: any) => {
        message.success('Investimento removido com sucesso!')
    };

    return (
        <PageLayout>
            <div className="site-layout-content">
                <h2>
                    Investimentos
                </h2>
                <Table dataSource={investimentos}>
                    <Column title="Código do ativo" dataIndex="codigoAtivo" key="codigoAtivo"></Column>
                    <Column title="Valor" dataIndex="valor" key="valor"></Column>
                    <Column title="Quantidade de cotas" dataIndex="quantidadeCotas" key="quantidadeCotas"></Column>
                    <Column title="Data da compra" dataIndex="dataCompra" key="dataCompra"></Column>
                    <Column title="Remover" key="remover"
                        render={(_, record) => (
                            <Button type="primary"
                                onClick={() => remove(record)}
                            >Remover</Button>
                        )}
                    ></Column>
                </Table>
            </div>
        </PageLayout>
    );
}
