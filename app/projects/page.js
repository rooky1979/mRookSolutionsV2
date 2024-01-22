"use client"
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { projectdetails } from "projectdetails";
import projectstyles from "../styles/Project.module.css"

export default function projects() {

    return (
        <>
        <Navbar isHomepage={true} />
        <div >
            Projects page
        </div>
        </>
      );

}