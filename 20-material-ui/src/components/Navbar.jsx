import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Box,
    Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";
import { styled } from "@mui/material";

const Temp = styled("div")({
    abc: "2px solid black",
});

export default function Navbar() {
    return (
        <>
            <AppBar color="secondary">
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu" edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ flex: "1" }} variant="h6">
                        Masai School
                    </Typography>
                    <Box>
                        <IconButton color="inherit">
                            <GitHubIcon sx={{ marginRight: "5px" }} />
                            <Typography variant="h6" color="inherit">
                                Github
                            </Typography>
                        </IconButton>
                        <IconButton color="inherit">
                            <MessageIcon sx={{ marginRight: "5px" }} />
                            <Typography variant="h6" color="inherit">
                                Slack
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer open={true} variant="persistent" anchor="left">
                test
            </Drawer>
        </>
    );
}
