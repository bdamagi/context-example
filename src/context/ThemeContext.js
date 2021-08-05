import React from 'react'

const ThemeContext = React.createContext({
    theme:'default',
    changeTheme: () => null
})

class ThemeProvider extends React.Component {
    state = {
        theme: 'default'
    }

    changeTheme = theme => {
        this.setState({theme})
    }

    render(){
        return (
            <ThemeContext.Provider value={{theme:this.state.theme,changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

const ThemeConsumer = ThemeContext.Consumer

export {ThemeProvider,ThemeConsumer}