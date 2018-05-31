import React, { Component } from 'react'

import ExampleComponent from 'react-breath-placeholder'

const style = {
  container:{
    padding: 20,
  },
  box1: {
    width: 130,
    height: 10,
    marginBottom: 10
  },
  box2: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginRight: 20
  },
  ph: {
    display: "flex",
    alignItems: "center",
    marginBottom: 40
  },
  box3: {
    width: 200,
    height: 100
  },
  box4: {
    width: 40,
    height: 10
  },
  box5: {
    height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginRight: 10
  }
};

export default class App extends Component {
  render() {
    return (
      <div style={style.container}>
        <div style={style.ph}>
          <ExampleComponent style={style.box2} />
          <div>
            <ExampleComponent style={style.box1} />
            <ExampleComponent style={style.box1} />
          </div>
        </div>
        <div style={style.ph}>
          <div style={style.box5}>
            <ExampleComponent style={style.box4} />
            <ExampleComponent style={style.box4} />
            <ExampleComponent style={style.box4} />
            <ExampleComponent style={style.box4} />
          </div>
          <ExampleComponent style={style.box3} />
        </div>
      </div>
    )
  }
}
