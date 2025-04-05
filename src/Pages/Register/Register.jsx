import React from "react";
import "./Register.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { RadioGroup, Radio, HStack } from "@chakra-ui/react";

const Register = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" placeholder="Enter your Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="Text" placeholder="Enter Your Name" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Enter your password" />
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="password" placeholder="confirm your password" />
      </FormControl>
      <FormControl>
        <FormLabel>Contact</FormLabel>
        <Input type="number" placeholder="Enter your Number" />
        <FormHelperText>We'll never share your Number.</FormHelperText>
      </FormControl>

      <FormControl as="fieldset">
        <FormLabel as="legend">Type Of User</FormLabel>
        <RadioGroup defaultValue="Customer">
          <HStack spacing="24px">
            <Radio value="Customer">Customer</Radio>
            <Radio value="Chef">Chef</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Register;
