import { UploadOutlined } from '@ant-design/icons';
import { Col, Form, Mentions, Row, Space } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { UploadProps } from 'antd/lib';
import { useTranslation } from 'next-i18next';

import ButtonCustom from '@components/UI/ButtonCustom';
import IconUpload from '@components/UI/Icons/IconUpload';
import InputText from '@components/UI/InputText';

import styles from './index.module.scss';

const SetupPage = () => {
  const { t } = useTranslation('create-profile');
  const propsUpload: UploadProps = {
    name: 'file',
    accept: 'png, jpeg, jpg',
    showUploadList: false,
    beforeUpload(_, fileList) {
      console.log(fileList, 'fileList');
    },

    onRemove() {},
    multiple: true,
  };
  return (
    <Row justify='center'>
      <Col span={16}>
        <div className={styles.containerSetupPage}>
          <p className={styles.title}>{`👋🏻👋🏻 ${t('title_step_1')}`}</p>

          <Form.Item
            name='avatar'
            label={
              <Space direction='vertical'>
                <p className={styles.label}>{t('label_avatar')}</p>
                <p className={styles.description}>{t('description_avatar')}</p>
              </Space>
            }
          >
            <Dragger {...propsUpload} className={styles.dragger}>
              <div className={styles.btnUpload}>
                <ButtonCustom icon={<IconUpload />} className={styles.buttonUpload} size={'large'}>
                  {t('btn_upload_images')}
                </ButtonCustom>
                <p>{t('description_upload_image')}</p>
              </div>
            </Dragger>
          </Form.Item>

          <Form.Item
            name='site'
            label={
              <Space direction='vertical'>
                <p className={styles.label}>{t('label_site')}</p>
                <p className={styles.description}>{t('description_site')}</p>
              </Space>
            }
          >
            <Mentions
              defaultValue='@afc163'
              options={[
                {
                  value: 'afc163',
                  label: 'afc163',
                },
                {
                  value: 'zombieJ',
                  label: 'zombieJ',
                },
                {
                  value: 'yesmeck',
                  label: 'yesmeck',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            name='cover_image'
            label={
              <Space direction='vertical'>
                <p className={styles.label}>{t('label_cover_image')}</p>
                <p className={styles.description}>{t('description_cover_image')}</p>
              </Space>
            }
          >
            <Dragger {...propsUpload} className={styles.dragger}>
              <div className={styles.btnUpload}>
                <ButtonCustom icon={<IconUpload />} className={styles.buttonUpload} size={'large'}>
                  {t('btn_upload_images')}
                </ButtonCustom>
                <p>{t('description_upload_image')}</p>
              </div>
            </Dragger>
          </Form.Item>

          <Form.Item
            name='url'
            rules={[{ type: 'url', message: t('message_url') }]}
            label={
              <Space direction='vertical'>
                <p className={styles.label}>{t('label_url')}</p>
                <p className={styles.description}>{t('description_url')}</p>
              </Space>
            }
          >
            <InputText size='large' placeholder={t('placeholder_url')} />
          </Form.Item>
        </div>
      </Col>
    </Row>
  );
};
export default SetupPage;
