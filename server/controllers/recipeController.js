const express =require("express")

/**
 * GET /
 * HomePage
 */

exports.homepage=async(req,res)=>{
    res.render("index")
}