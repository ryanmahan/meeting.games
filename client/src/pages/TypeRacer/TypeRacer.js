    import React, {Fragment, Component} from 'react'
    import {Input} from 'antd'

    import DisplayTextPrompt from '../../components/DisplayTextPrompt'

    class TypeRacer extends Component {
        constructor(props){
            super(props)

            this.state = {
                username: '',
                message: '',
                messages: []
            }
        }

        render(){
            const container = {
                margin: "2rem auto",
                width: "80%",
                height: "40rem",
                border: "2px solid grey",
                borderRadius: "5px",
            }

            const textBar = {
                margin: "auto",
                display: "block",
                width: "80%",
            }

            return (
                <Fragment>
                    <div style={container}>
                        <DisplayTextPrompt />
                        {console.log(test)}
                        <br />
                        <Input value={this.state.message} placeholder="Begin Typing..." onChange={handleChange} style={textBar}/>
                    </div>
                </Fragment>
            )
        }
    }

export default TypeRacer