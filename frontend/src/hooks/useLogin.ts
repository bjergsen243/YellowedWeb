import React from "react";
import { useEffect } from "react";

export const useLogin = (): any => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);

    const handleOnChangeEmail = (event: any) => {
        setEmail(event.target.value);
    }
    const handleOnChangePassword =  (event: any) => {
        setPassword(event.target.value);
    }
    const handleOnChangeCurrentPassword = (event: any) => {
        setCurrentPassword(event.target.value);
    }

    const handleOnClickShowPassword = (event: any) => {
        setShowPassword(!showPassword);
    }
    const handleOnClickShowCurrentPassword = (event: any) => {
        console.log(showCurrentPassword);
        
        setShowCurrentPassword(!showCurrentPassword);
    }

    useEffect(() => {
        console.log("email", email);
    }, [email])
    useEffect(() => {
        console.log('password', password);
    }, [password])
    useEffect(() => {
        console.log('current password', currentPassword);
    }, [currentPassword])
    return {
        email,
        password,
        handleOnChangeEmail,
        handleOnChangePassword,
        handleOnChangeCurrentPassword,
        handleOnClickShowPassword,
        handleOnClickShowCurrentPassword,
        showPassword,
        setShowPassword,
        showCurrentPassword
    }
}