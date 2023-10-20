import { useRouter } from 'next/router';

import NoPage from '@components/NoPage';
import { ROUTE_PATH } from '@utils/common';

function Home() {
  const router = useRouter();
  const handleCreateNewPage = () => {
    router.push(ROUTE_PATH.CREATE_PAGE);
  };

  return <NoPage handleCreateNewPage={handleCreateNewPage} />;
}

export default Home;
