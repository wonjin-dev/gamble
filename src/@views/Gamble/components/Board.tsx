import {FC, Fragment} from 'react';
import {GambleProps} from '@hooks/gamble/useGamble';
import Result from './Result';
import GambleSection from './Section';

interface Props {
  isOver: boolean;
  gamble: GambleProps;
}

const GambleBoard: FC<Props> = ({isOver, gamble}) => {
  if (isOver) {
    return <Result />;
  }

  return (
    <Fragment>
      <GambleSection type={'positive1'} gamble={gamble} />
      <GambleSection type={'positive2'} gamble={gamble} />
      <GambleSection type={'negative'} gamble={gamble} />
    </Fragment>
  );
};

export default GambleBoard;
