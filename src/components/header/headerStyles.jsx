import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  /* we we have common css properties, we use this method */
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  /* when we have to style special 
component, we use this method coponent as a argument to styled function */
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLinkContainer = styled(Link)`
  ${OptionContainerStyles} /* and kinda pasting */
`;
export const OptionDivContainer = styled.div`
  ${OptionContainerStyles} /* and kinda pasting */
`;
