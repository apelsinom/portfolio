import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}
export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'20'} height={'20'}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  margin: 10px;
  border: 1px solid ${theme.colors.font};
  
`
const SkillTitle = styled.h3`
  display: inline;
  margin-left: 5px;
  vertical-align: top;
  word-wrap: break-word;
  padding: 3px;
`
const SkillText = styled.p`
  border-top: 1px solid ${theme.colors.font};
  line-height: 1.5;
  padding: 5px;
`