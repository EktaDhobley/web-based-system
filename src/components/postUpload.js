import React from "react";
import "../css/postUpload.css";
import { Container, Button, Card, CardContent} from "@mui/material";
import {useNavigate, useLocation} from 'react-router-dom'


export default function PostUpload() {
    const navigate = useNavigate();
    const location = useLocation();

    const downloadTxtFile = () => {
        const lines = location.state.fileContent.split("\n");
        const newLines = new Array(lines.length);
        for(let i=0; i < lines.length-1; i++){
          newLines[i] = lines[i+1];
          newLines[i+1] = lines[i];
          i++;
        }
        const element = document.createElement("a");
        console.log(newLines.join("\n"))
        const file = new Blob([newLines.join("\n")], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = location.state.fileName+".txt";
        document.body.appendChild(element);
        element.click();
    };

    const handleBack = () => {
        navigate('/')
    }
    return (
        <Container maxWidth="sm">
            <Card sx={{ minWidth: 275 }}>
                <CardContent className="Card">
                    <label><strong>Choosen file name:</strong> {location.state.fileName}</label><br></br>
                    <label><strong>Original file name:</strong> {location.state.file.name}</label><br></br>
                    <label><strong>File type:</strong> {location.state.file.type}</label><br></br>
                    <label><strong>File size:</strong> {location.state.file.size} bytes</label>
                </CardContent>
            </Card>
            <Button className="button" fullWidth variant="outlined" component="span" onClick={downloadTxtFile}>
                Download Transposed File
            </Button>
            <Button className="button" fullWidth variant="outlined" component="span" onClick={handleBack}>
                Go Back
            </Button>
        </Container>

    )
}