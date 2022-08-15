import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Loader from "./Loader";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Avatar from "@mui/material/Avatar";

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    const [messages, loading] = useCollectionData(
        collection(firestore, 'messages')
    );

    const sendMessage = async () => {
        // collection(firestore, 'messages').set({
        //     uid: user.uid,
        //     displayName: user.displayName,
        //     photoURL: user.photoURL,
        //     text: value,
        //     // createdAt: '12-03-1993'
        // });

        const docRef = await addDoc(collection(firestore, "messages"), {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: serverTimestamp()
        });

        setValue('');
    };

    if (loading) {
        return <Loader/>;
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50, marginTop: '15px'}} alignItems="center" justifyContent="center">
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map(message =>
                        <div key={message.createdAt} style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                            marginLeft: user.uid === message.uid ? 'auto' : '10px',
                            width: 'fit-content',
                            padding: '5px'
                        }}>
                            <Grid container >
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container direction={'column'} alignItems={'flex-end'} style={{width: '80%'}}>
                    <TextField fullWidth rowmax={2} variant={'outlined'} style={{marginBottom: '5px'}} value={value} onChange={e => setValue(e.target.value)} />
                    <Button onClick={sendMessage} variant={'outlined'}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;