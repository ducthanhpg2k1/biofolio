import React from 'react';

import { Row, Space } from 'antd';

import styles from './index.module.scss';

const MainFooter = () => {
  return (
    <Row align='middle' justify='space-between' className={styles.mainFooter}>
      <p className={styles.textFooter}>Copyright © 2023 by Biofolio. All Rights Reserved.</p>
      <Space size='large' className={styles.actionFooter}>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
        <p>Contact Us</p>
      </Space>
    </Row>
  );
};

export default MainFooter;
