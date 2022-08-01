import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link";
import React from "react"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

export default function SignUp() {
    return(
        <div 
            className="signUp-page" 
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "yellow"
            }}
        >
            <div
                style={{
                    flex: 1,
                }}
            >
                <h1>
                    Sign Up Theme Side
                </h1>
            </div>
            <div
                style={{
                    flex: 1
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
                    <Typography
                        fontSize={39}
                    >
                        Sign Up
                    </Typography>
                    <Typography
                        fontSize={14}
                    >
                        Have an account?{" "} 
                            <Link 
                                href="https://google.com"
                                underline="none"
                                target="_blank"
                            >
                                Sign in
                            </Link>
                    </Typography>
                    <br />
                    <Typography fontSize={14}> Email Address </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="email"
                        label=""
                        autoFocus
                    />
                    <Typography fontSize={14}> Password </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="password"
                        label=""
                        autoFocus
                    />
                    <Typography fontSize={14}> Confirm Password </Typography>
                    <TextField
                        margin="normal"
                        fullWidth
                        required
                        id="confirm-password"
                        label=""
                        autoFocus
                    />             
                    <FormControlLabel 
                        control={<Checkbox defaultChecked/>} 
                        label={ <Typography fontSize={14}>I accept the{" "}
                                    <Link>Term & Conditions</Link>
                                </Typography>}></FormControlLabel>     
                    <Button 
                         type="submit"
                         fullWidth
                         variant="contained"
                         style=
                         {{
                             backgroundColor: "#C18FF5"
                         }}
                    >   
                        Create Account
                    </Button>
                </Paper>
            </div>
        </div>
    )
}