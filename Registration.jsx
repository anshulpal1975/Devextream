import React from 'react'
import Form, {
    SimpleItem,
    Label,
    RequiredRule,
    PatternRule
} from 'devextreme-react/form';
import { Button } from 'devextreme-react/button';
import './Registration.style.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const employee = {
    email: '',
    password: ''
};
function Registration() {

    return (
        <div className="registration">
            <h2>Registration</h2>

            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <InstagramIcon className="icons" />
            <Form formData={employee} labelLocation="top" alignItemLabels>

                <SimpleItem dataField="name">
                    <RequiredRule
                        message="Name is required"
                    />
                    <PatternRule
                        pattern="^[a-zA-Z]+$"
                        message="Please enter valid name"
                    />
                    <Label
                        alignment="left" />
                </SimpleItem>

                <SimpleItem dataField="mobile">
                    <RequiredRule
                        message="Mobile no is required"
                    />
                    <PatternRule
                        pattern="^[7-9]{1}[0-9]{9}$"
                        message="Please enter valid mobile number "
                    />
                    <Label
                        alignment="left" />
                </SimpleItem>

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

                <SimpleItem dataField="confirm password">
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
            />
        </div>
    )
}

export default Registration