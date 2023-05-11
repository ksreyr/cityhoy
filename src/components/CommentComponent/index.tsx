import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import * as React from 'react';
import {CommentType} from '../../../prisma/Models';
import {Divider} from '@mui/material';

export const CommentComponent = ({comment}: { comment: CommentType }) => {
    return (<React.Fragment>

        <Divider sx={{p: 0}}></Divider>
        <CardHeader
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            avatar={
                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={comment.author.image ?? undefined}>
                    {comment.author.name}
                </Avatar>
            }
            title={comment.author.name}
            subheader={comment.createdAt.toString().slice(11, 16)}
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {comment.content}
            </Typography>
        </CardContent>
    </ React.Fragment>)
}