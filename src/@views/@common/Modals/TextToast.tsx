import styled from '@emotion/styled';
import {useEffect} from 'react';
import {COLORS, rem, Z_INDEX} from '@styles/theme';
import {slideIn} from '@styles/keyframe';
import {useToast} from '@hooks/useToast';

const TextToast = () => {
  const {toastMessages, hideAllToast} = useToast();

  useEffect(() => {
    const toastTimeOut = setTimeout(() => {
      hideAllToast();
    }, 1800);

    return () => clearTimeout(toastTimeOut);
  }, [hideAllToast, toastMessages]);

  return (
    <Container>
      <Wrapper>
        {toastMessages.map((toast, index) => {
          return (
            <ContentContainer key={index}>
              <Content>{toast}</Content>
            </ContentContainer>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default TextToast;

const Container = styled.section`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  width: calc(100% - ${rem(32)});
  z-index: ${Z_INDEX.TOAST};
  bottom: ${rem(26)};
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${rem(14)} ${rem(16)};
  border-radius: ${rem(8)};
  background-color: ${COLORS.MODAL_DIM};
  color: ${COLORS.WHITE};
  font-size: ${rem(15)};
  font-weight: 400;
  line-height: ${rem(22)};
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - ${rem(32)});
  animation: 0.8s ${slideIn};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
