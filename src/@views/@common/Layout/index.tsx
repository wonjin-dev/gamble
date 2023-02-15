import styled from '@emotion/styled';
import {FC, Fragment, ReactNode} from 'react';
import {COLORS} from '@styles/theme';
import useTranslate from '@hooks/useTranslate';
import TextToast from '../Modals/TextToast';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const {translate} = useTranslate();

  return (
    <Fragment>
      <Container>
        {children}
        <TextToast />
      </Container>
      <NoLayer>
        <h1>{translate('NO_APPLY_SCREEN')}</h1>
      </NoLayer>
    </Fragment>
  );
};

export default Layout;

const Container = styled.div`
  @media (max-width: 385px) {
    display: none;
  }
`;

const NoLayer = styled.div`
  background-color: ${COLORS.WHITE};
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 386px) {
    display: none;
  }
`;
