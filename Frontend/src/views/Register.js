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



export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',   
            email: '',
            password: '',
            username: '',
        };
    }



    handleEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleFirstName = event => {
        this.setState({ firstName: event.target.value });
    }

    handleLastName = event => {
        this.setState({ lastName: event.target.value });
    }
    handlePassword = event => {
        this.setState({ password: event.target.value });
    }
    handelUsername = event => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        let user = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
        };

        axios.post('http://localhost:8000/api/auth/register', user)
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('token_type', res.data.token_type);
                localStorage.setItem('isLogged', true);
                localStorage.setItem('user_id', res.data.user_id); 
            
            });
    };
    handleLogin = e => {
        this.props.history.push('/')
    }

    render() {
        var useStyles = makeStyles(theme => ({
            paper: {
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            avatar: {
                margin: theme.spacing(1),
                backgroundColor: theme.palette.secondary.main,
            },
            form: {
                width: '100%', // Fix IE 11 issue.
                marginTop: theme.spacing(3),
            },
            submit: {
                margin: theme.spacing(3, 0, 2),
            },
        }));
        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={useStyles.paper}>
                <img  src='/logo.png' alt=""></img>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <br></br>
                <form className={useStyles.form} noValidate onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="username"
                                name="Username"
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                autoFocus
                                onChange={this.handelUsername}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange={this.handleFirstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange={this.handleLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={this.handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.handlePassword}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={useStyles.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link  variant="body2" onClick={this.handleLogin}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
        );
    }


}