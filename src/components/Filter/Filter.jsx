import React, { Component } from "react";
import { Input,Button,Finder } from "./Filter.styled";

export const Filter = ({ value, OnChange, Onclick }) => {
    return ( <form action="">
        <Finder>Find contacts by name</Finder>
        <Input type="text"
        value={value}
        onChange={OnChange}
        />
        <Button onClick={Onclick} >Clear</Button>
   </form> )
    
}