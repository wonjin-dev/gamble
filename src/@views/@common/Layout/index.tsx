import styled from '@emotion/styled';
import {FC, Fragment, ReactNode} from 'react';
import {COLORS} from '@styles/theme';
import TextToast from '../Modals/TextToast';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <Fragment>
      <Container>
        {children}
        <TextToast />
      </Container>
      <NoLayer>
        <p>현재 해상도는 지원하지 않습니다</p>
      </NoLayer>
    </Fragment>
  );
};

export default Layout;

const Container = styled.div`
  @media (max-width: 340px) {
    display: none;
  }
`;

const NoLayer = styled.div`
  background-color: ${COLORS.WHITE};
  @media (min-width: 340px) {
    display: none;
  }
`;
