import React, {useCallback, useEffect, useState} from 'react';
import MenuAppBar from '@/components/MenuAppBar';
import PostComponent from '@/components/post/PostComponent';
import {Box} from '@mui/material';
import {useGetReportView} from '@/fetchApi/postRequest/useGetAllPost';
import {Post} from '../../../prisma/Models';
import Headers from '@/components/headers';

const usePostView = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getAllPost = useCallback(useGetReportView(), []);
    const [allPost, setAllPost] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPost().then(response => response.json());
                setAllPost(data);
            } catch (err) {
                alert('error al cargar los datas: ' + err)
                console.error(err);
            }
        }
        fetchData();
    }, [getAllPost]);

    return {
        allPost,
    };
};
const handleFaKeLike = async ()=>{}

const MemoizedPostComponent = React.memo(PostComponent);

const PostView: React.FC = () => {
    const postView = usePostView();
    return (
        <>
            <Headers
                title="cityhoy "
                description="ciudadanos infirmando"
                image="cityhoy"
                url="cityhoy.com"
            />
            <MenuAppBar/>
            <Box display="flex" flexDirection="column" paddingTop={5}>
                {postView.allPost &&
                    postView.allPost.map((post, index) => (
                        <MemoizedPostComponent
                            key={index}
                            id={post.city}
                            content={post.content}
                            date={post.createdAt.toString().slice(11, 16)}
                            tag={post.tag}
                            city={post.city}
                            likes={post.likes}
                            handleLike={handleFaKeLike}
                            region={post.region}
                            name={post.author.name}
                            image={post.author.image}
                        />
                    ))}
            </Box>
        </>
    );
};

export default PostView;
