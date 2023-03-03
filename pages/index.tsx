import {ReactElement} from 'react';
import Layout from '@views/@common/Layout';
import GNB from '@views/@common/Layout/components/GNB';
import HomeScreen from '@views/Home';
import {NextLayoutPage} from './_app';

const HomePage: NextLayoutPage = () => <HomeScreen />;

HomePage.layout = (page: ReactElement) => {
  return (
    <Layout>
      <GNB />
      {page}
    </Layout>
  );
};

export default HomePage;
