import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";

export default function SignUp() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        currentPassword: '',
        showCurrentPassword: false
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
            className="signUp-page" 
            style={{
                display: "flex",
                backgroundColor: "#E58F7E",
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
                            Sign Up
                        </Typography>
                        <Typography fontSize={14}> Have an account?{" "} 
                            <Link 
                                href="https://google.com"
                                underline="none"
                                target="_blank"
                            >
                                Sign in
                            </Link>
                        </Typography>
                        <br />
                        <Typography fontSize={14} fontWeight={600}> Email Address </Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="email"
                            label=""
                            autoFocus
                        />
                        <Typography fontSize={14} fontWeight={600}> Password </Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="password"
                            autoFocus
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
                        <Typography fontSize={14} fontWeight={600}> Confirm Password </Typography>
                        <TextField
                            margin="normal"
                            fullWidth
                            required
                            id="confirm-password"
                            autoFocus
                            type={values.showCurrentPassword ? 'text' : 'password'}
                            value={values.currentPassword}
                            onChange={handleChange('currentPassword')}
                            InputProps={{
                                endAdornment:   
                                    <InputAdornment position="end"> Show current password
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
                        <FormControlLabel 
                            control={<Checkbox defaultChecked/>} 
                            label={ <Typography fontSize={14}>I accept the{" "}
                                        <Link underline="none">Terms & Conditions.</Link>
                                    </Typography>}></FormControlLabel>     
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            style=
                            {{
                                backgroundColor: "#C18FF5",
                                fontWeight: "700",
                                textTransform: "none"
                            }}
                        >   
                            Create Account
                        </Button>
                    </div>
                </Paper>
            </div>
        </div>
    )
}