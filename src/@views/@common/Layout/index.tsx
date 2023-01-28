import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';
import TextToast from '../Modals/TextToast';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <Container>
      {children}
      <TextToast />
    </Container>
  );
};

export default Layout;

const Container = styled.div``;
