import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors"
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import {ReactComponent as IconPasswordInput } from "../assets/icon-password-input.svg";
import { SvgIcon } from '@mui/material';
import {useLogin } from "../hooks/useLogin"
export default function SignIn() {

    const {
        email,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleOnClickShowPassword,
        showPassword,
      } = useLogin();
    return(
        <div 
            className="signIn-page" 
            style={{
                display: "flex",
                backgroundColor: "white",
                flexDirection:"row",
                height: "100vh",
            }}
        >
            <div 
                style={{
                    flex: 1,
                }}
            >
                <img 
                    src="bg.png" 
                    alt="background" 
                    style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        marginTop: "80px",
                    }}
                />
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
                        margin: "77px", 
                    }}
                    variant="outlined"
                >
                    <div
                        style={{
                            alignItems: "center",
                            margin: "35px",
                        }}
                    >
                        <Typography 
                            fontSize={39}
                            style={{
                                alignItems: "center",
                                fontWeight: "600",
                            }}
                        >
                            Sign In
                        </Typography>
                        <Typography 
                            fontSize={14} 
                            color={blue}
                        >
                            Don't have an account?{" "}
                        <Link 
                            href="/sign-up" 
                            underline="none"
                        >
                            Sign up
                        </Link>
                        </Typography>
                        <br />
                        <Typography fontSize={14} fontWeight={600}>
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
                            value={email}
                            onChange={handleOnChangeEmail}
                        />
                        <br />
                        <br />
                        <Typography fontSize={14} fontWeight={600}>
                            Password
                        </Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            name="password"
                            label="*******"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            onChange={handleOnChangePassword}
                            InputProps={{
                                endAdornment:  
                                    <Button onClick={handleOnClickShowPassword} style={{height: 25, width: 25}}>
                                        <SvgIcon component={IconPasswordInput} inheritViewBox/>
                                    </Button>
                            }}
                        />
                        <br></br>
                        <br></br>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style=
                            {{
                                backgroundColor: "#C18FF5",
                                textTransform: "none"
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
                                fontWeight={600}
                            >
                                Forgot your password?
                            </Link>
                        </Typography>
                    </div>
                </Paper>
            </div>
        </div>
    ) 
}