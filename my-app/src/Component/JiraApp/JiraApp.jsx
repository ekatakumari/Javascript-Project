import "./JiraApp.css"
import { useState,useEffect } from "react"
export const JiraApp=()=>{
    const [data,setData]=useState([
        {
            "bucket":"abc",
            "bucketId":"1234",
            "task":[{
                "taskid":"1",
                "taskname":"a",
                "userEmail":"ekata123@xyz"
            }]
        },
        {
            "bucket":"xyz",
            "bucketId":"124",
            "task":[{
                "taskid":"1",
                "taskname":"a",
                "userEmail":"ekata123@xyz",
                "createdat":new Date()
            }]
        },
        {
            "bucket":"abc",
            "bucketId":"123",
            "task":[{
                "taskid":"1",
                "taskname":"a",
                "userEmail":"ekata123@xyz"
            }]
        }
    ])
    return <div>

    </div>
}