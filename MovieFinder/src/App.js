import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer'
  }
}

export default (props) => {
    return (
       <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
         <div className="main-app">
           <AppBar
             style={{backgroundColor: '#455A64'}}
             title={<span style={styles.title}>OMDb Project</span>}
             onTitleTouchTap={()=>props.router.push('/')}
           />
           <main className="main-content">
             <SearchBar />
             {props.children}
           </main>
         </div>
       </MuiThemeProvider>
    );
  }
