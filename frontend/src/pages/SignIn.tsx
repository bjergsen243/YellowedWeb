import React from "react"
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors"
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

export default function SignIn() {
    return(
        <div 
            className="signIn-page" 
            style={{
                display: "flex",
                backgroundColor: "green",
                flexDirection:"row",
                // backgroundImage: url() -> error chua them duoc background la anh
            }}
        >
            <div 
                style={{
                    flex: 1,
                }}
            >
                <h1>
                    Login Page Theme Side
                </h1>
            </div>
            <div 
                style={{
                    flex: 1,                    
                }}
            >
                <Paper 
                    elevation= {3}
                    style={{
                        alignItems: "center",
                        backgroundColor: "white",
                        textAlign: "left",
                        marginTop: "100px",
                        marginLeft: "77px",
                        marginRight: "77px",
                        marginBottom: "77px"
                    }}
                    variant="outlined"
                > 
                    <Typography fontSize={39}>
                        Sign In
                    </Typography>
                    <Typography 
                        fontSize={14} 
                        color={blue}
                    >
                        Don't have an account?{" "}
                    <Link 
                        href="https://facebook.com" 
                        target={"_blank"}
                        underline="none"
                    >
                        Sign up
                    </Link>
                    </Typography>
                    <br />
                    <Typography fontSize={14}>
                        Email Address
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="email"
                        label="adrian@gmail.com"
                        name="email"
                        autoFocus
                    />
                    <br />
                    <br />
                    <Typography fontSize={14}>
                        Password
                    </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        name="password"
                        label="*******"
                        type="password"
                        id="password"
                    />
                    <br></br>
                    <br></br>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        style=
                        {{
                            backgroundColor: "#C18FF5"
                        }}
                    >
                        Sign In
                    </Button>
                    <br></br>
                    <br></br>
                    <Typography fontSize={14}>
                        <Link
                            href="https://google.com"
                            underline="none"
                        >
                            Forgot your password?
                        </Link>
                    </Typography>
                </Paper>
                
            </div>
        </div>
    ) 
}