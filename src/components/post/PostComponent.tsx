import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {CommentType} from '../../../prisma/Models';
import {useGetCommentsByPost} from '@/fetchApi/commentsRequest/useGetCommentsByPostId';
import {CommentComponent} from '../CommentComponent';
import CreateComment from '@/components/CommentComponent/createComment';
import CardHeaderComponent from "@/components/post/CardHeaderComponent";
import {styled} from "@mui/material/styles";
import {Chip} from "@mui/material";
import {StyledPaper} from "../StyledCard";
import {useLikesPost} from "@/fetchApi/postRequest/useLikesPost";
import {pink, red} from "@mui/material/colors";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


export default function xRecipeReviewCard({content, tag,likes, date, name, image, id, city, region, handleLike}:
                                              {
                                                  content: string,
                                                  tag: string,
                                                  likes: number,
                                                  date: string,
                                                  city: string,
                                                  region: string,
                                                  name: string,
                                                  image: string | null,
                                                  id: string,
                                                  handleLike:(id:string)=>Promise<void>
                                              }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = React.useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [comments, setComments] = React.useState<CommentType[]>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const getCommentsByPostId = useGetCommentsByPost()

    const handleExpandClick = async () => {
        await refreshData();
        setExpanded(!expanded);
    };
    const refreshData = async () => {
        const commentsInPost = await getCommentsByPostId(id).then(res => res.json()).catch(err => alert(err));
        setComments(commentsInPost);
    }

    const likeHandle = async ()=>{
        handleLike(id)
    }

    return (
        <StyledPaper sx={{m: 1}}>
            <CardHeaderComponent
                image={image}
                city={city}
                region={region}
                date={date}
                name={name}
                id={id}
            />
            <CardContent>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
            <CardActions sx={{pl:2}}>
                <Chip label={tag}  color="secondary" variant="outlined"/>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </ExpandMore>
            </CardActions>
            <CreateComment postId={id} refreshData={refreshData}/>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {comments.map(comment => <CommentComponent key={comment.id}
                                                           comment={comment}></CommentComponent>).reverse()}
            </Collapse>
        </StyledPaper>
    );
}
