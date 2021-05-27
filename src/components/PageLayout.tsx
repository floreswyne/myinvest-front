import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

type Props = {
    children: any
}

export default function PageLayout(props: Props) {

    const { children } = props;

    return (
        <div className="container">
            <Layout className="layout">
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item key="1">
                            <Link to="/investimentos/cadastrar">
                                Cadastrar Investimento
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/investimentos">
                                Listar Investimentos
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    { children }
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    My Invest 2021
                </Footer>
            </Layout>
        </div>
    );
}
