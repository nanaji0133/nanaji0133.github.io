import React from 'react';

import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: "I design responsive websites for clients from concept through deployment using ReactJs, NextJs, HTML5, CSS3, Bootstrap"
    },
    {
        icon: api,
        title: "API Development",
        about: ["I design and develop robust REST API using", <strong key={1}> django-rest-api </strong>]
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: "Handle database, server, api using and SQLlite",
    },
    
    {
        icon: algo,
        title: "Competitive Coder",
        about: "A daily problem solver in HackerRank and Leetcode"
    },
    // {
    //     icon: puzzle,
    //     title: "UI/UX designer",
    //     about: "minimalistic user interface designer using figma and  framer"
    // },
    {
        icon: computer,
        title: "Certification in Business and Entrepreneurship",
        about: "From the Conrad School of Entrepreneurship and Business in Operations and Supply Chain Management, Project Management and Leadership."
    },
]

export default skills;