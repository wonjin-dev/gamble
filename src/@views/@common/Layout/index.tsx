import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div``;
