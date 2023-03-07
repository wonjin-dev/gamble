import {ReactElement} from 'react';
import GambleScreen from '@views/Gamble/index';
import {AbilityType} from '@hooks/gamble/useGamble';
import {abilitiesGenerator} from '@utils/generators';
import Layout from '@views/@common/Layout';
import GNB from '@views/@common/Layout/components/GNB';
import {NextLayoutPage} from 'pages/_app';

interface Props {
  abilities: AbilityType[];
}

const GamblePage: NextLayoutPage<Props> = ({abilities}) => <GambleScreen abilities={abilities} />;

GamblePage.layout = (page: ReactElement) => {
  return (
    <Layout>
      <GNB />
      {page}
    </Layout>
  );
};

GamblePage.getInitialProps = () => {
  const initData = abilitiesGenerator();

  return {
    abilities: initData,
  };
};

export default GamblePage;
