import React, { useState, useEffect } from 'react'

import './Details.css'

export default function Details() {
    const project = {
        id: 1,
        name: "Chores",
        categories: [
            {
                id: 11,
                name: "To-do",
                tasks: [
                    {
                        id: 111,
                        desc: "Clean window"
                    },
                    {
                        id: 112,
                        desc: "Wash dishes ansd nlskqgnlk jdasdas ddsaddsa dsadsad sdn sdnflgan fsod fsdf jsd fjisoidf sd fps dfksd opfs"
                    },
                    {
                        id: 113,
                        desc: "Wash dishes ansd nlskqgnlk jdasdas ddsaddsa dsadsad sdn sdnflgan fsod fsdf jsd fjisoidf sd fps dfksd opfs"
                    }
                ]
            }, 
            {
                id: 12,
                name: "Finished",
                tasks: [
                    {
                        id: 121,
                        desc: "Take dogs out"
                    }
                ]
            }
        ]
    }

    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(project.categories)
    }, [])

    return (
        <div id="det">
            <div className="det-header">
                <h1 className="det-title">{project.name}</h1>
            </div>
            <div className="det-col-cont">
                {categories.map(cat => {
                    return (
                        <div className="det-col" key={cat.id}>
                            <div className="det-col-title-cont">
                                <h3 className="det-col-title">{cat.name}</h3>
                            </div>
                            <div className="det-card-cont">
                                {cat.tasks.map(task => {
                                    return (
                                        <div className="det-card" key={task.id}>
                                            <p className="det-card-desc">{task.desc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}