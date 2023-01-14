import {NextPage} from 'next';
import GambleScreen from '@views/Gamble/index';
import {AbilityType} from '@hooks/gamble/useGamble';
import {abilitiesGenerator} from '@utils/generators';

interface Props {
  abilities: AbilityType[];
}

const GamblePage: NextPage<Props> = ({abilities}) => <GambleScreen abilities={abilities} />;

GamblePage.getInitialProps = () => {
  const initData = abilitiesGenerator();

  return {
    abilities: initData,
  };
};

export default GamblePage;
