import React, {useContext} from "react";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {HiOutlinePaperAirplane} from "react-icons/hi2";
import {useSession} from 'next-auth/react'
import {useCreatePost} from "@/fetchApi/postRequest/useCreatePost";
import {useRouter} from "next/router";
import PickerByGoogle from "@/components/PickerByGoogle";
import {UIContext} from "@/context/UIContext";
import TagComponent from "@/components/Tag";
import {StyledPaper} from "../StyledCard";


export type LocationState = {
    country: string,
    region: string,
    city: string,
};

const INITIAL_LOCALTION_STATE: LocationState = {
    country: '',
    region: '',
    city: ''
}

type PostRequest = {
    tag: string,
    content: string,
    city: String,
    region: String,
    authorId: String
}


const PostCreation = () => {

    const router = useRouter()
    const [locationState, setLocationState] = React.useState<LocationState>(INITIAL_LOCALTION_STATE);
    const {data: session} = useSession();
    const createPost = useCreatePost();
    const {setAlertState} = useContext(UIContext)
    const [value, setValue] = React.useState<string | null>('');
    const [inputValue, setInputValue] = React.useState('');

    const handleClick = async (event: { preventDefault: () => void, currentTarget: HTMLFormElement | undefined; }) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const content = formData.get('content')?.toString()
        if (content && inputValue && locationState && session?.user?.email) {
            const postToSave: PostRequest = {
                city: locationState.city,
                region: locationState.region,
                authorId: session?.user?.email!,
                content: content,
                tag: inputValue
            }
            await createPost(postToSave)
                .then(res => res.json())
                .then(res => {
                    setLocationState(INITIAL_LOCALTION_STATE);
                    setAlertState({
                        type: 'CHANGE',
                        payload: {type: 'success', message: 'tu post fue creado con exito', visible: true}
                    })
                    router.push('/post')
                })
                .catch(err => alert(err));
        } else {
            setAlertState({
                type: 'CHANGE',
                payload: {type: 'error', message: 'llena los datos requeridos', visible: true}
            })
        }
    }

    return (
        <StyledPaper sx={{my:3, py:5}}>
            <Box component="form" onSubmit={handleClick}>
                <Grid item xs={12} sm={12} lg={12} sx={{ mx:4}}>
                    <Typography variant={"h5"}>Escribe tu post</Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} sx={{ mt:2, mx:4}}>
                    <PickerByGoogle setLocationState={setLocationState}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} sx={{ mt:2, mx:4}}>
                    <TagComponent value={value} setValue={setValue} inputValue={inputValue}
                                  setInputValue={setInputValue}/>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} sx={{ mt:2, mx:4}}>
                    <TextField id="outlined-basic"
                               label="Message"
                               name="content"
                               multiline
                               rows={4}
                               variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} sx={{ mt:2, mx:4}}>
                    <Button
                        variant="contained"
                        type="submit"
                        sx={{py: 2, mb:1}}
                        endIcon={<HiOutlinePaperAirplane/>}
                        fullWidth>
                        Crear Post
                    </Button>

                </Grid>
            </Box>
        </StyledPaper>
    );
};


export default PostCreation;

