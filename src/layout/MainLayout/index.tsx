import { Layout } from 'antd';
import dynamic from 'next/dynamic';

import styles from './index.module.scss';

const MainHeader = dynamic(() => import('../components/MainHeader'));
const MainFooter = dynamic(() => import('../components/MainFooter'));

const { Content } = Layout;

const MainLayout = ({ children }: any) => {
  return (
    <Layout className={styles.containerLayout}>
      <div className={styles.mainHeaderLayout}>
        <MainHeader />
      </div>
      <Content className={styles.contentLayout}>{children}</Content>
      <div className={styles.footer}>
        <MainFooter />
      </div>
    </Layout>
  );
};

export default MainLayout;
