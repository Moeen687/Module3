const express = require('express');

const mongoose = require('mongoose');



const connected = ()=>{
    mongoose.connect("mongodb+srv://Mohiddeen:Mohiddeen123@m3a2.lvkxqch.mongodb.net/loanCollection?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log("Error "+err);
    });
}

