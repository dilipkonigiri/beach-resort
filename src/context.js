import React, { Component } from 'react'

const RoomContext = React.createContext() // contains two components (Provider, Consumer)
// <RoomContext.Provider value={'hello}


class RoomProvider extends Component {
    constructor() {
        super()
        this.state = {
            greeting: "hello",
            name: "john"
        }
    }
    render() {
        return (
            <RoomContext.Provider value={{ ...this.state }}>
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext };
