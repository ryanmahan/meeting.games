import { Card, Tag } from "antd";
import styled from "styled-components";
import React from "react";
import { ivory } from "../../utils/colors"

const StyledCard = styled(Card)`
  margin-top: 1vh;
  width: 100%;
  background-color: ${ivory};
`

const betaTag = (title) => (
  <>
    <span>{title}&nbsp;</span>
    <Tag color="volcano">Beta</Tag>
  </>
);

const GameCard = ({ game }) => (
  <StyledCard
    actions={game.actions.map(action => (
      <a href={action.link}>{action.name}</a>
    ))}
    title={game.beta ? betaTag(game.title) : game.title}
    bordered={false}>
    <p>{game.description}</p>
  </StyledCard>
)

export default GameCard