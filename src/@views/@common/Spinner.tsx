import {FC, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {IMAGES} from '@constants/image';
import {spin} from '@styles/keyframe';
import useEffectOnce from '@hooks/useEffectOnce';

interface SpinnerProps {
  timer?: boolean;
  conditionFlag?: boolean;
}

/**
 *
 * @param timer<boolean>
 * 기본적으로 Spinner 컴포넌트에서 제공하는 타이머를 이용하여 렌더링
 *
 * @param conditionFlag<boolean>
 * 외부에서 주입하는 스피너 렌더링 조건
 *
 * ! timer와 conditionFlag는 동시에 사용할 수 없음
 */

const Spinner: FC<SpinnerProps> = ({timer = false, conditionFlag}) => {
  const [flag, setFlag] = useState<boolean>(timer);

  useEffect(() => {
    if (timer && conditionFlag) {
      throw new Error('timer와 conditionFlag는 동시에 사용할 수 없습니다');
    }

    if (!timer && conditionFlag) {
      setFlag(conditionFlag);
    }
  }, [conditionFlag, timer]);

  const timeOut = () => {
    if (timer) {
      setTimeout(() => {
        setFlag(false);
      }, 1000);
    }
  };

  useEffectOnce(timeOut);

  if (flag) {
    return (
      <Container>
        <SpinnerImg src={IMAGES.SPINNER} />
      </Container>
    );
  }

  return null;
};

export default Spinner;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SpinnerImg = styled.img`
  position: absolute;
  left: 50%;
  bottom: 40%;
  animation: ${spin} 2s linear infinite;
`;
