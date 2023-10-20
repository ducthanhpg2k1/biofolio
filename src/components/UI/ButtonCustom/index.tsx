import { Button } from 'antd';
import classNames from 'classnames';

import styles from './index.module.scss';

interface IButtonCustom {
  children?: React.ReactNode | string;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
  type?: 'primary' | 'link' | 'text' | 'link' | 'dashed' | 'default';
  typeDisplay?: 'navbar';
  danger?: any;
  size?: any;
  shape?: any;
  id?: any;
  reopen?: boolean;
  ghost?: any;
  prefix?: React.ReactNode | string | null;
}

const ButtonCustom = (props: IButtonCustom) => {
  const {
    icon,
    disabled,
    htmlType,
    id,
    size,
    onClick,
    loading = false,
    reopen = false,
    children,
    className = '',
    type = 'primary',
    ghost,
    danger,
  } = props;
  return (
    <Button
      danger={danger}
      id={id}
      className={classNames(styles.btnCustom, {
        [className]: !!className,
        [styles[type]]: !!type,
        [styles.loading]: loading,
        [styles.reopen]: reopen,
      })}
      ghost={ghost}
      icon={icon}
      type={type}
      loading={loading}
      htmlType={htmlType}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default ButtonCustom;
