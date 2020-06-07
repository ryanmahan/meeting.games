import React from 'react';
import styled from 'styled-components';
import { lightPurple, purple } from '../utils/colors'
import { Row, Col } from 'antd';
import GameCard from '../components/GameCard/GameCard';

const Background = styled.div`
  background: linear-gradient(${lightPurple}, ${purple});
  height: 100%;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
  padding: 5% 0%;
`
const H1 = styled.h1`
  color: ${props => props.color || "#333333"};
  font-weight: bold;
  font-size: 2.5em;
`
const H3 = styled.h3`
  font-weight: 200;
`
const CenterCol = styled(Col)`
  width: 50vw;
  margin: auto;
`

const Footer = styled.div`
  background: rgba(0, 0, 0, .2);
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 5px;
`;

class Landing extends React.Component {

  games = [
    {
      actions: [{link: "/drophone", name: "Play"}],
      title: "Drophone",
      description: "A game of telephone, but drawing! Each player draws an image, and the next player has to guess what it is."
    },
    {
      actions: [{link: "/whereami", name: "Play"}],
      title: "Where am I?",
      description: "We'll show you a photo taken somewhere on Earth, and you have to guess where from!",
      beta: true,
    },
    {
      actions: [{link: "/trivia", name: "Play"}, {link: "/trivia/create", name: "Create"}],
      title: "Trivia",
      description: "Make a trivia for your team, or play one that another user has created! User-created trivias are not garunteed to be safe for work.",
      beta: true
    }
  ]

  render() {
    return (
      <Background>
        <CenterCol>
          <Row justify="left">
            <H1 color="white">Welcome to</H1>
            <H1>&nbsp;meeting</H1>
            <H1 color="white">.</H1>
            <H1>games</H1>
            <H3>
              Bring energy to your meeting with a quick warmup game to get
              everyone fired up. By taking 5 minutes for a short game you can
              increase your meetings energy and get people to look forward to
              recurring meetings. Get people interested and engaged with meeting
              games.
            </H3>
          </Row>
          <br />
          <Row justify="center">
            {this.games.map(game => (
              <GameCard game={game} key={game.title}/>
            ))}
          </Row>
        </CenterCol>
        <Footer>
          <p>Built by Ryan Mahan and Stephen Dzialo. View this project on&nbsp;
            <a style={{color: "white"}} href="http://github.com/ryanmahan/meeting.games">github.</a>
          </p>
        </Footer>
      </Background>
    );
  };
}

export default Landing;
