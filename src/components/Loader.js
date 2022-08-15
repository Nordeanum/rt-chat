import React from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Loader = () => {
    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 50}} alignItems="center" justifyContent="center">
                <Grid container alignItems="center" direction={"column"}>
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;