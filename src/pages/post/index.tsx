import React, {useCallback, useEffect, useState} from 'react';
import MenuAppBar from '@/components/MenuAppBar';
import PostComponent from '@/components/post/PostComponent';
import {Box, Container, Grid, Grow} from '@mui/material';
import {useGetAllPost, useGetPostByCity, useGetPostByCityOrTag} from '@/fetchApi/postRequest/useGetAllPost';
import {Post} from '../../../prisma/Models';
import Headers from '@/components/headers';
import Copyright from "@/components/Copyright/index.";
import {LocationState} from "@/components/post/PostCreation";
import AlerComponent from "../../components/AlertComponent";
import FilterComponent from "@/components/FilterComponent/index.";
import {useLikesPost} from "@/fetchApi/postRequest/useLikesPost";
import BasicSpeedDial from "@/components/BasivSpeedDial";

const INITIAL_LOCATION_STATE: LocationState = {
    country: '',
    region: '',
    city: ''
}


const usePostView = () => {
    const getAllPost = useCallback(useGetAllPost(), []);
    const getAllPostByCity = useCallback(useGetPostByCity(), []);
    const getPostByCityOrTag = useCallback(useGetPostByCityOrTag(), []);
    const [allPost, setAllPost] = useState<Post[]>([]);
    const [locationState, setLocationState] = useState<LocationState>(INITIAL_LOCATION_STATE);
    const [tag, setTag] = useState<string>('')

    const likePost = useLikesPost();
    const handleLike = async (id: string) => {
        await likePost(id)
        await fetchData()
    }
    const fetchData = async () => {
        try {
            const data = await getAllPost().then(response => response.json());
            setAllPost(data);
        } catch (err) {
            alert('error al cargar los datas: ' + err)
            console.error(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, [getAllPost]);

    const filterByLocation = async (event: any) => {
        event.preventDefault()
        if (locationState && locationState.city && tag) {
            const filterData = await getPostByCityOrTag(locationState.city, tag ?? '').then(res => res.json());
            setAllPost(filterData);
        } else if (locationState && locationState.city) {
            const data = await getAllPostByCity(locationState.city).then(response => response.json());
            setAllPost(data);
        } else if (tag) {
            const data = await getPostByCityOrTag("", tag).then(response => response.json());
            setAllPost(data);
        }
    }

    return {
        tag,
        setTag,
        handleLike,
        allPost,
        setLocationState,
        filterByLocation: filterByLocation
    };
};

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
            <Container maxWidth="lg">
                    <FilterComponent
                        handleClick={postView.filterByLocation}
                        setLocationState={postView.setLocationState}
                        setTag={postView.setTag}
                        tag={postView.tag}/>

                    <Grow
                        in={!!postView}
                        style={{transformOrigin: '0 0 0'}}
                        {...(postView ? {timeout: 1000} : {})}
                    >
                        <Box display="flex" flexDirection="column" style={{transformOrigin: '0 0 0'}}>
                            {postView.allPost &&
                                postView.allPost
                                    // @ts-ignore
                                    .sort((a: Post, b: Post) => new Date(a.createdAt) - new Date(b.createdAt))
                                    .map((post, index) => {
                                        const time = (new Date(post.createdAt).getTime() - new Date().getTime())
                                        const timeInHoras = (time / (1000 * 60 * 60))*-1
                                        return (<PostComponent
                                            key={index}
                                            id={post.id}
                                            likes={post.likes}
                                            content={post.content}
                                            date={timeInHoras.toString().slice(0,5).concat(' Horas')}
                                            tag={post.tag}
                                            city={post.city}
                                            region={post.region}
                                            name={post.author.name}
                                            image={post.author.image}
                                            handleLike={postView.handleLike}
                                        />)
                                    }).reverse()}
                        </Box>

                    </Grow>
                     <BasicSpeedDial/>
                    <AlerComponent/>
                    <Copyright/>
            </Container>
        </>
    );
};

export default PostView;
