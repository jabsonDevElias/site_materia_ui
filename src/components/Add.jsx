import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import { Add as AddIcon, EmojiEmotions, PersonAdd, VideoCameraBack,Image, DateRange } from "@mui/icons-material/";
import { useState } from "react";
import styled from "styled-components";

const StyleModal = styled(Modal)({
    display:'flex',
    alignItems:"center",
    justifyContent:"center"
})

const UserBox = styled(Box)({
    display:'flex',
    alignItems:"center",
    gap:'10px',
    marginBottom:"20px"
})

function Add() {
    const [open,setOpen] = useState(false);
    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={()=>setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyleModal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                  <Typography variant="h6" color='gray' textAlign='center'>Create Post</Typography>
                  <UserBox>
                  <Avatar sx={{ width: 30, height: 30, bgcolor: 'orange' }}>J</Avatar>
                  <Typography fontWeight={500} variant="span"> Jonh Doe</Typography>
                </UserBox>
                <TextField
                    sx={{width:"100%"}}
                    multiline
                    rows={3}
                    placeholder="Whats's on your mind?"
                    variant="standard"
                    />
                <Stack direction="row" gap={1} mt={2} mb={3}>
                    <EmojiEmotions/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>

                <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{widht:'10px'}}>
                        <DateRange/>
                    </Button>
                </ButtonGroup>

                </Box>

            </StyleModal>
        </>
    )
}

export default Add;