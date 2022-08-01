import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors"
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

export default function SignIn() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        
      });
      const handleChange = (prop: any) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
      };
    return(
        <div 
            className="signIn-page" 
            style={{
                display: "flex",
                backgroundColor: "#E58F7E",
                flexDirection:"row",
                height: "100vh",
                // backgroundImage: url() -> error chua them duoc background la anh
            }}
        >
            <div 
                style={{
                    flex: 1,
                }}
            >
                <img 
                    src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" 
                    alt="background" 
                    style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "100%",
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
                        marginTop: "100px",
                        marginLeft: "77px",
                        marginRight: "77px",
                        marginBottom: "77px"
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
                            href="https://facebook.com" 
                            target={"_blank"}
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
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            InputProps={{
                                endAdornment:   
                                    <InputAdornment position="end"> Show password
                                        {/* <IconButton
                                            //onClick={handleClickShowPassword}
                                            //onMouseDown={handleMouseDownPassword}
                                            //edge="end"
                                        >
                                           //{values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton> */}
                                    </InputAdornment>  
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