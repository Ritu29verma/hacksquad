import React from 'react';
import styled from '@emotion/styled';

import { colors, Text, Title } from '../../../../design-system';

export function HeaderLayout({ children }: { children: React.ReactNode }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export const HeaderTitle = styled(Text)`
  height: 32px;
  font-size: 20px;
  color: ${colors.B40};

  display: flex;
  align-items: center;

  margin-bottom: 4px;
`;

export const HeaderSecondaryTitle = styled(Title)`
  height: 48px;
  font-size: 40px;
  color: ${colors.B40};

  display: flex;
  align-items: center;
`;

const StyledHeader = styled.div`
  height: 60px;
  padding: 20px 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
`;
