/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable jsx-a11y/alt-text */

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Row, Select, Space } from 'antd';
import { MenuProps } from 'antd/lib';

import ButtonCustom from '@components/UI/ButtonCustom';
import IconDarkMode from '@components/UI/Icons/IconDarkMode';

import styles from './index.module.scss';

const profileSettings: MenuProps['items'] = [
  {
    key: 'profile',
    label: <p>My Profile</p>,
    icon: <UserOutlined rev={undefined} />,
  },

  {
    key: 'log_out',
    label: <p>Log Out</p>,
    icon: <LogoutOutlined rev={undefined} />,
  },
];

const Header = () => {
  const onClickProfile: MenuProps['onClick'] = ({ key }) => {
    console.log(key);
  };
  return (
    <Row align='middle' justify='space-between' className={styles.mainHeader}>
      <p className={styles.textHeader}>Biofolio</p>
      <Space size='middle'>
        <ButtonCustom className={styles.btnDarkMode} type='default' icon={<IconDarkMode />} />
        <Select
          className={styles.selectLanguage}
          options={[
            {
              label: 'English',
              value: 'en',
            },
            {
              label: 'Việt Nam',
              value: 'vn',
            },
          ]}
          defaultValue={'en'}
          size='large'
        />
        <Dropdown
          placement='bottomRight'
          arrow
          menu={{ items: profileSettings, onClick: onClickProfile }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size={48} src={'/static/icons/Oval.svg'} />
          </a>
        </Dropdown>
      </Space>
    </Row>
  );
};

export default Header;
