import React from 'react'
import Form, {
    SimpleItem,
    Label,
    RequiredRule,
    PatternRule
} from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import './Login.style.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useHistory } from "react-router";

const employee={
    email: '',
    password: ''
};



function Login() {
    let history = useHistory();

    const handleClick = () => {
        history.push({
            pathname: "/welcome",
          });
     }
    return (
        <div className="login"> 
        <h2>Login</h2>
        <FacebookIcon className="icons"/>
        <TwitterIcon className="icons" />
        <InstagramIcon className="icons" />
            <Form formData={employee} labelLocation="top" alignItemLabels>
                
         

                <SimpleItem dataField="email">
                    <RequiredRule
                        message="Email is required"
                    />
                    <PatternRule
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        message="Please enter valid email id"
                    />
                      <Label
                        alignment="left" />
                </SimpleItem>

                <SimpleItem dataField="password">
                    <RequiredRule
                        message="Password is required"
                    />
                    <PatternRule
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                        message="Please enter valid password"
                    />
                  <Label
                        alignment="left" />
                </SimpleItem>

          
            </Form>

            <Button
            className="submitbtn"
                text="Submit"
                type='success'
                onClick={handleClick}
                />
        </div>
    )
}

export default Login
