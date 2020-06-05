import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

import { Provider } from 'react-redux';
import store from './redux/store';


import Nav from './components/Nav'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { indigo, teal } from '@material-ui/core/colors';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: indigo[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: teal['A400'],
    },
  },
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Nav />
            <Router />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
