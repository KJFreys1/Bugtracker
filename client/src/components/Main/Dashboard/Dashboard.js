import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"

import './Dashboard.css'

export default function Dashboard({ userInfo, history }) {
    const [name, setName] = useState("")
    const [user, setUser] = useState(userInfo.email ? userInfo : {
        projects: [
            {
                name: "project 1",
                id: 1
            }, {
                name: "project 2",
                id: 2
            }
        ]
    })
    const [projList, setProjList] = useState(user.projects)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (projList.length) setProjects(projList.map(proj => addProject(proj)))
    }, [projList])

    const addProject = proj => {
        return (
            <div className="dash-proj" key={proj.id}>
                <h1>{proj.name}</h1>
                <span className="spacer"></span>
                <button onClick={() => handleViewProject(proj.id)}>View</button>
                <button onClick={() => handleDeleteProject(proj.id)}>Delete</button>
            </div>
        )
    }

    const handleViewProject = id => {
        history.push(`/project/${id}`)
    }

    const handleDeleteProject = id => {
        setProjList(prevProj => {
            return prevProj.filter(proj => proj.id !== id)
        })
    }

    const handleAddProject = () => {
        setProjList(prevList => [...prevList, { name, id: uuidv4() }])
        setProjects(projList.map(proj => addProject(proj)))
    }

    const handleSubmit = e => {
        e.preventDefault()
        handleAddProject()
        setName("")
    }

    return (
        <div id="dash">
            <h1 className="dash-title">My Projects</h1>
            <form className="dash-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    className="dash-input"
                    value={name}
                    placeholder="project name"
                    onChange={e => setName(e.target.value)}
                ></input>
                <button className="dash-btn" type="submit">Add Project</button>
            </form>
            {projects}
        </div>
    )
}