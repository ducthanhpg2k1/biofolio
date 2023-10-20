import { RightOutlined } from '@ant-design/icons';
import { Card, Space } from 'antd';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import ButtonCustom from '../ButtonCustom';

interface IProps {
  nextStep: () => void;
  prevStep: () => void;
  activeStep: number;
}

const StepsCustom = (props: IProps) => {
  const { nextStep, prevStep, activeStep } = props;
  const { t } = useTranslation('common');

  const steps = [
    {
      label: t('set_up_page'),
      step: 1,
    },
    {
      label: t('select_template'),
      step: 2,
    },
    {
      label: t('customize'),
      step: 3,
    },
  ];

  return (
    <Card className={styles.card}>
      <div className={styles.container}>
        <ButtonCustom
          disabled={activeStep === 1}
          onClick={prevStep}
          className={styles.btn}
          type='text'
        >
          {t('btn_back')}
        </ButtonCustom>

        <Space size='middle'>
          {steps?.map((item) => {
            return (
              <div key={item?.step}>
                <Card
                  className={classNames(styles.cardStep, {
                    [styles.activeCardStep]: item?.step === activeStep,
                  })}
                >
                  <Space>
                    <div className={styles.step}>{item?.step}</div>
                    <p>{item?.label}</p>
                  </Space>
                </Card>
              </div>
            );
          })}
        </Space>
        <ButtonCustom
          disabled={activeStep === 3}
          onClick={nextStep}
          className={styles.btn}
          type='primary'
        >
          <Space>
            {t('btn_next')}
            <RightOutlined rev={undefined} />
          </Space>
        </ButtonCustom>
      </div>
    </Card>
  );
};
export default StepsCustom;
