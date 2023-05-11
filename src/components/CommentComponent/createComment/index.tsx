import {Box, Button, TextField} from '@mui/material'
import React, {useState} from 'react'
import {CommentTypeRequest} from '../../../../prisma/Models';
import {useSession} from "next-auth/react"
import {useCreateComment} from '@/fetchApi/commentsRequest/useCreateComments';


const CreateComment = ({postId, refreshData}: { postId: string, refreshData: () => void }) => {

    const {data: session} = useSession()

    const [commentData, setCommentData] = useState('')

    const createComment = useCreateComment()

    const handleChange = (event: { preventDefault: () => void; currentTarget: any }) => {
        event.preventDefault();
        const data = event.currentTarget.value
        setCommentData(data)

    }

    const handleSubmit = async (event: { preventDefault: () => void; currentTarget: any }) => {
        event.preventDefault();
        if (!session?.user?.email) {
            alert('Necesitas estar loggeado')

        } else {
            const data = new FormData(event.currentTarget)
            setCommentData(data.get('comment')?.toString() ?? '')
            const commentToSend: CommentTypeRequest = {
                content: commentData,
                createdAt: new Date(),
                postId: postId,
                authorId: session?.user?.email ?? "",
            }
            const response = await createComment(commentToSend)
                .then(res => res.json())
                .then(res => refreshData())
                .then(res => setCommentData(''))

        }
    }


    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{p: 2}}>
            <TextField
                id="standard-basic"
                label="deja tu comentario"
                variant="outlined"
                value={commentData}
                onChange={handleChange}
                fullWidth
                name="comment"/>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 1, mb: 2, py: 2}}
            >
                comentar
            </Button>
        </Box>
    )
}

export default CreateComment