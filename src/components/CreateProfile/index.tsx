import { useState } from 'react';

import { Form } from 'antd';

import StepsCustom from '@components/UI/StepsCustom';

import styles from './index.module.scss';
import SetupPage from './SetupPage';

const CreateProfile = () => {
  const [form] = Form.useForm();

  const [activeStep, setActiveStep] = useState(1);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const renderComponent = (activeStep: number) => {
    if (activeStep === 1) {
      return <SetupPage />;
    }
  };

  return (
    <Form form={form} layout='vertical'>
      <div className={styles.container}>
        <StepsCustom activeStep={activeStep} prevStep={prevStep} nextStep={nextStep} />
        {renderComponent(activeStep)}
      </div>
    </Form>
  );
};
export default CreateProfile;
