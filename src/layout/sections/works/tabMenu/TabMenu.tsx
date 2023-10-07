import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 3%;
  ul {
    display: flex;
    gap: 5%;
    justify-content: flex-end;
    width: 100%;
    
    @media screen and (max-width: 400px) {
      justify-content: center;
      gap: 3%;
    }
  }
`
const ListItem = styled.li`

`