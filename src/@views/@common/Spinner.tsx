import {FC, useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {IMAGES} from '@constants/image';
import {spin} from '@styles/keyframe';
import useEffectOnce from '@hooks/useEffectOnce';
import {rem} from '@styles/theme';

interface SpinnerProps {
  timer?: boolean;
  conditionFlag?: boolean;
  size?: number;
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

const Spinner: FC<SpinnerProps> = ({timer = false, conditionFlag = false, size}) => {
  const [flag, setFlag] = useState<boolean>(timer);

  useEffect(() => {
    if (timer && conditionFlag) {
      throw new Error('timer와 conditionFlag는 동시에 사용할 수 없습니다');
    }

    if (!timer && !conditionFlag) {
      throw new Error('timer와 conditionFlag 둘 중 하나는 반드시 포함되어야 합니다');
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
      <Container size={size}>
        <SpinnerImg src={IMAGES.SPINNER} />
      </Container>
    );
  }

  return null;
};

export default Spinner;

const Container = styled.div<{size?: number}>`
  width: ${({size}) => (size ? rem(size) : '100vw')};
  height: ${({size}) => (size ? rem(size) : '100vh')};
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const SpinnerImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${spin} 2s linear infinite;
`;
