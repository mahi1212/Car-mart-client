import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    // Set email to state
    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.target.value = ''
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data)
                }

            })
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make New Admin</h2>
            <form onSubmit={handleAdminSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <TextField id="outlined-basic"
                    label="Admin Email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="outlined"
                    style={{ width: '75vw' }} />
                <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made admin sucessfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;