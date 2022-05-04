import React, { useState, useEffect } from "react";
import { Container, TextField, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function Main() {
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    // const [fileContent, setFileContent] = useState("");
    let navigate = useNavigate()

    useEffect(() => {
        console.log(file, fileName, fileContent);
    })

    function showFile(e) {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => { 
            navigate('/postUpload', {state: {file: file, fileName: fileName, fileContent: e.target.result}})
        };  
    }

    return(
        <Container maxWidth="sm">
            <TextField fullWidth label="filename" id="fileName" onChange={(e) => setFileName(e.target.value)}></TextField>
            <label htmlFor="upload-photo">
            <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="upload-photo"
                type="file" 
                onChange={(e) => setFile(e.target.files[0])}
            />

            <Button fullWidth variant="outlined" component="span">
                Upload button
            </Button>
            </label>
            <Button fullWidth variant="outlined" onClick={showFile}>
                Submit
            </Button>
        </Container>
    )
}