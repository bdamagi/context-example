import './App.css';
import React from 'react'

import { Header } from './components'
import  ThemeContext  from './context'

const themes = {
  default: {
    backgroundColor:"green",
    color: "#000"
  },
  spring: {
    backgroundColor: "orange",
    color: "#fff"
  },
  summer: {
    backgroundColor: "#ffffff",
    color: "#000"
  },
  autmn: {
    backgroundColor: "#ff000",
    color: "#fff"
  },
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <ThemeContext.ThemeProvider>
            <ThemeContext.ThemeConsumer>
            {context => {
              return (
                <>
                  <button onClick={() =>context.changeTheme('default')}>Default</button>
                  <button onClick={() =>context.changeTheme('spring')}>Spring</button>
                  <div style={{display: 'flex',alignItems:'center',justifyContent:'center',height:300, width:500,...themes[context.theme]}}>
                    Click Something
                  </div>
                </>
              )
            }}
            </ThemeContext.ThemeConsumer>
        </ThemeContext.ThemeProvider>
      </div>
    )
  }
}

export default App;