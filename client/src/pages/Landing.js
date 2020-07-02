import React from 'react';
import styled from 'styled-components';
import { ivory, purple, notBlack } from '../utils/colors'
import { Row, Col } from 'antd';
import GameCard from '../components/GameCard/GameCard';
import GoodTeam from '../assets/good_team.svg';

const Background = styled.div`
  background: ${purple};
  height: 100%;
  min-height: 100vh;
  padding: 0px;
  margin: 0px;
`
const H1 = styled.h1`
  color: ${notBlack};
  font-weight: bold;
  font-size: 2.5em;
  width: 100%;
  margin-bottom: 0;
`
const H3 = styled.h3`
  margin-top: 0;
  color: ${notBlack}
`
const CenterCol = styled(Col)`
  width: 50vw;
  margin: auto;
`
const Footer = styled.div`
  display: flex;
  align-items: center;
  background: ${ivory};
  position: absolute;
  bottom: 0;
  width: 100vw;
  padding: 1em;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${ivory};
  width: 100%;
  height: 25vh;
  clip-path: polygon(0 0, 100% 0, 100% 92%, 52.5% 90%, 50% 100%, 47.5% 90%, 0% 92%);
  padding: 5% 10%;
`;
const PageSplit = styled.div`
  position: absolute;
  height: 28vh;
  background: #8855DD;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 91%);
  z-index: 1;
`;
const TeamImage = styled.img`
  width: auto;
  height: 100%;
`

class Landing extends React.Component {

  games = [
    {
      actions: [{link: "/drophone", name: "Play"}],
      title: "drophone",
      description: "A game of telephone, but drawing! Each player draws an image, and the next player has to guess what it is."
    },
    {
      actions: [{link: "/whereami", name: "Play"}],
      title: "where am I?",
      description: "We'll show you a photo taken somewhere on Earth, and you have to guess where from!",
      beta: true,
    },
    {
      actions: [{link: "/trivia", name: "Play"}, {link: "/trivia/create", name: "Create"}],
      title: "trivia",
      description: "Make a trivia for your team, or play one that another user has created! User-created trivias are not garunteed to be safe for work.",
      beta: true
    }
  ]

  render() {
    return (
      <Background>
        <PageSplit/>
        <Header>
          <div>
            <H1>meeting.games</H1>
            <H3>team bonding, meeting sparking, fun games to get everyone's energy up.</H3>
          </div>
          <TeamImage src={GoodTeam} alt="good teamwork"></TeamImage> 
        </Header>
        <CenterCol>
          <br />
          <Row justify="center">
            {this.games.map(game => (
              <GameCard game={game} key={game.title}/>
            ))}
          </Row>
        </CenterCol>
        <Footer>
          <p>Built by Ryan Mahan and Stephen Dzialo. View this project on&nbsp;
            <a href="http://github.com/ryanmahan/meeting.games">github.</a>
          </p>
        </Footer>
      </Background>
    );
  };
}

export default Landing;
