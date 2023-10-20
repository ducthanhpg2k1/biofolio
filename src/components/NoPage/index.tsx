import { PlusOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import ButtonCustom from '@components/UI/ButtonCustom';

import styles from './index.module.scss';

interface IProps {
  handleCreateNewPage: () => void;
}

const NoPage = (props: IProps) => {
  const { handleCreateNewPage } = props;
  const { t } = useTranslation('home');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src='/static/icons/NoPage.svg' alt='icons' width={550} height={580} />
        <p className={styles.title}>{t('title_no_page')}</p>
        <p className={styles.description}>{t('description_no_page')}</p>
        <ButtonCustom
          onClick={handleCreateNewPage}
          className={styles.btnCreateNewPage}
          type='primary'
          icon={<PlusOutlined rev={undefined} />}
        >
          {t('btn_create_new_page')}
        </ButtonCustom>
      </div>
    </div>
  );
};
export default NoPage;
