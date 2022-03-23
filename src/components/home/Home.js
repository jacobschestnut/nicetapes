import React from "react"
import "./Home.css"
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

export const Home = () => {

    return (
        <div className="container">
            <div className="greeting">
                WELCOME TO NICE TAPES
            </div>
        </div>
    )

}