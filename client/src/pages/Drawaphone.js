import CanvasFreeDrawing from 'canvas-free-drawing';
import React from 'react';
import ColoredDot from '../components/ColoredDot/ColoredDot'
import { Button, Dropdown, Menu } from 'antd';
import {
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import styled from 'styled-components';
import Modal from 'antd/lib/modal/Modal';

const ButtonFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const CanvasParent = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`

const MenuFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`

const TimerText = styled.span`
  font-weight: bold;
  height: 100%;
  margin-right: 10px;
`


class Drawaphone extends React.Component {

  cfd = null;

  COLORS = {
    red: [255, 0, 0],
    orange: [255, 127, 0],
    yellow: [255, 255, 0],
    green: [0, 255, 0],
    blue: [0, 0, 255],
    purple: [75, 0, 130],
    black: [0, 0, 0],
    white: [255, 255, 255],
  }

  state = {
    activeColor: [0, 0, 0],
    lineWidth: 5,
  }

  componentDidMount() {
    const size = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth;
    this.cfd = new CanvasFreeDrawing({
      elementId: "freeDraw",
      width: size * .85,
      height: size * .85,
    });
  }

  setColor = ({ key }) => {
    this.setState({
      activeColor: this.COLORS[key],
    })
    this.cfd.setDrawingColor(this.COLORS[key])
  }

  changeLineWidth = (amount) => {
    this.setState((state) => {
      const lineWidth = state.lineWidth + amount
      console.log(lineWidth)
      this.cfd.setLineWidth(lineWidth);
      return {
        lineWidth,
      }
    })
  }

  submitPicture = () => {
    const picture = this.cfd.save();
    
  }

  render () {

    const colorMenu = (
      <Menu onClick={this.setColor}>
        {Object.entries(this.COLORS).map(([name, color]) => (
          <Menu.Item key={name}>
            <ButtonFlex>
              <ColoredDot color={color} />&nbsp;{name}
            </ButtonFlex>
          </Menu.Item>
        ))}
      </Menu>
    )
     
    return (
      <div>
        <h1>Drawaphone</h1>
        <CanvasParent>
          <div>
            <MenuFlex>
              <div>
                <Button onClick={() => this.cfd.undo()}><UndoOutlined /></Button>
                <Button onClick={() => this.cfd.redo()}><RedoOutlined /></Button>
                <Button onClick={() => this.changeLineWidth(1)}>+</Button>
                <Button onClick={() => this.changeLineWidth(-1)}>-</Button>
                <Dropdown overlay={colorMenu}>
                  <Button>
                    <ButtonFlex>
                      <ColoredDot color={this.state.activeColor} /> &nbsp;Color
                  </ButtonFlex>
                  </Button>
                </Dropdown>
              </div>
              <div>
                <TimerText>
                  85s
                </TimerText>
                <Button onClick={() => this.submitPicture()}>Submit</Button>
              </div>
            </MenuFlex>
            <canvas id="freeDraw"></canvas>
          </div>
        </CanvasParent>
        <Modal visible={this.state.picture}>
          <img src={this.state.picture}/>
        </Modal>
      </div>
    )
  }
}

export default Drawaphone;