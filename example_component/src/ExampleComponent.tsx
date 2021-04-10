import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
  title: string;
  danger?: boolean;
};

const StyledTitle = styled.div<Props>`
  color: ${(props) => (props.danger ? 'red' : 'unset')};
`;

export const ExampleComponent: React.FC<Props> = (props) => {
  const { children, title } = props;
  return (
    <div>
      <StyledTitle {...props}>{title}</StyledTitle>
      {children && React.Children.map(children, (child) => <div style={{ marginLeft: 10 }}>{child}</div>)}
    </div>
  );
};
