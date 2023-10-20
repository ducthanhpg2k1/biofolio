import { ReactElement } from 'react';

import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MainLayout from '@layout/MainLayout';

const CreateProfile = dynamic(() => import('@components/CreateProfile'), {
  ssr: false,
});
const CreateProfilePage = () => {
  return <CreateProfile />;
};

CreateProfilePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout activeTab={1}>
      <>{page}</>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'create-profile'])),
      // Will be passed to the page component as props
    },
  };
}

export default CreateProfilePage;
