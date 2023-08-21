import React from 'react'
import {Button} from "react-bootstrap"
import {Link} from "react-router-dom"

const UpdateButton = ({userId}) => {
  return (
    <Link to={`/user/${userId}/edit`}>
        <Button>Update user</Button>
    </Link>
  )
}

export default UpdateButton