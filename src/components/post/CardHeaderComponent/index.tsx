import * as React from "react";
import {useContext} from "react";
import {useReportPost} from "@/fetchApi/postRequest/useReportPost";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Menu, Typography} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useDeletePost} from "@/fetchApi/postRequest/useDeletePost";
import {UIContext} from "@/context/UIContext";

const CardHeaderComponent = ({id, image, region, city, date, name}:
                                 {
                                     id: string,
                                     image: string | null,
                                     region: string,
                                     city: string,
                                     date: string,
                                     name: string
                                 }) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const deletePost = useDeletePost();
    const reportPost = useReportPost();
    const {setAlertState} = useContext(UIContext);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event: any) => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = async (buttonString: string) => {
        if (buttonString == "report") {
            await reportPost({id: id})
                .then(res => res.json());
            setAlertState({
                type: 'CHANGE',
                payload: {type: 'success', message: 'mensaje reportado con exito', visible: true}
            })
        } else if (buttonString == "follow") {
            setAlertState({
                type: 'CHANGE',
                payload: {type: 'warning', message: 'Si el comentario es tuyo sera eliminado en los proximos minutos', visible: true}
            })
            await deletePost(id)
                .then(res => res.json());

        }
        setAnchorEl(null);
    };

    return (<>
            <CardHeader
                avatar={
                    <Avatar sx={{backgroundColor:'transparent'}} aria-label="recipe" src={image ?? undefined}>
                        {name.slice(0, 1)}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={name}
                subheader={date}
            />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => handleMenuItemClick("report")}>Report Comment</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick("follow")}>Delete</MenuItem>
            </Menu>
            <Typography variant={"overline"} sx={{pl:2}}>{'desde '+region + ' : ' + city}</Typography>

        </>
    )
}
export default CardHeaderComponent