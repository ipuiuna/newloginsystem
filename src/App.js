import React from 'react';
import {
  Grid,
  ThemeProvider,
  AppBar,
  Toolbar,
  Typography,
  Link,
  Container,
  Fab,
  Box
} from '@material-ui/core';
import { shadows } from '@material-ui/system';

import logo from './assets/img/logo-white.png';
import muitheme from './theme';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={muitheme}>
        <Grid container direction='column'>
          <Grid item direction='row' justify='space-between'>
            <AppBar
              bgcolor='primary.main'
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
              position='static'
            >
              <Container>
                <Toolbar style={{ justifyContent: 'flex-end', flexGrow: 1 }}>
                  <Fab variant='extended' size='small' className='login-buton'>
                    <div className='login-label'>Entrar</div>
                  </Fab>
                </Toolbar>
              </Container>
            </AppBar>
          </Grid>
          <Grid item>
            <Link edge='start' aria-label='inicio'>
              <img alt='ta na mao logo' src={logo} />
            </Link>

            <Typography variant='h4' color='secondary'>
              E aí, bora fazer
            </Typography>
            <Typography variant='h4' color='secondary'>
              um churras?
            </Typography>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: muitheme.palette.secondary.main,
              height: 64
            }}
          >
            ir para o topo
          </Grid>
          <Grid item style={{ backgroundColor: '#fff' }}>
            <Grid container direction='row' justify='center' spacing={10}>
              <Grid item>
                <Grid container direction='column'>
                  <Typography variant='h6'>INSTITUCIONAL</Typography>
                  <Link>marca</Link>
                  <Link>quem somos</Link>
                  <Link>fale conosco</Link>
                  <Link></Link>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Typography variant='h6'>MINHA CONTA</Typography>
                  <Link>conta</Link>
                  <Link>pedidos</Link>
                  <Link>carrinho</Link>
                  <Link>editar conta</Link>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction='column'>
                  <Typography variant='h6'>AJUDA</Typography>
                  <Link>pagamentos</Link>
                  <Link>entrega</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
