import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            fisrtName: '',
            lastName: '',
        };
    }



    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:8000/api/auth/login', user)
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('token_type', res.data.token_type);
                localStorage.setItem('isLogged', true);
                localStorage.setItem('user_id', res.data.user_id); 
                this.props.history.push('/admin/dashboard')
            });
    };

    handleRegister = e => {
        this.props.history.push('/register')
    }

    render() {
        var useStyle = makeStyles(theme => ({
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(1),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },

        }));
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={useStyle.paper}>
                        <img src='/logo.png' alt=""></img>
                        <Typography component="h1" variant="h5">
                            Sign in
                    </Typography>
                        <form className={useStyle.form} noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleEmail}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type='password'
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handlePassword}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={useStyle.submit}
                            >
                                Sign In
                        </Button>
                            <Grid container>
                                <Grid item>
                                    <Link onClick={this.handleRegister} variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }


}











