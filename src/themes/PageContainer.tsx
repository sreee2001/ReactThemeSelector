import styled from "styled-components";
import { type ITheme } from "./ITheme";

const PageContainer = styled.div<{ theme: ITheme }>`
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  min-height: 100vh;
`;

export default PageContainer;
