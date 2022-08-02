import { Button, Link, SvgIcon, TextField } from "@mui/material";
import { ReactComponent as IconLogo } from "../assets/logo-news-feed.svg";
import {ReactComponent as IconLookup} from "../assets/icon-lookup.svg";
import {ReactComponent as IconHomePage} from "../assets/icon-home-page.svg";
import {ReactComponent as IconWatch} from "../assets/icon-watch.svg";
export default function Post() {
    return(
        <div
            id="post-page"
            style={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div
                id="tab-bar"
                style={{
                    position: "absolute",
                    width: "100%",
                    top: 20,
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <div id="logo-page-and-search-field"
                    style={{
                        flex: 2,
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <div
                        id="logo-page"
                    >
                        <Button>
                            <SvgIcon component={IconLogo} inheritViewBox/>
                        </Button>
                    </div>
                    <div
                        id="search-field"
                    >
                        <TextField 
                            id="outlined-search"
                            type="search"
                            label="Search"
                            InputProps={{
                                startAdornment:
                                    <Button>
                                        <SvgIcon component={IconLookup} inheritViewBox/>
                                    </Button>
                            }}
                        >
                        </TextField>
                    </div>
                </div>
                
                <div 
                    id="features"
                    style={{
                        flex: 2,
                        flexDirection: "row",
                        display: "flex"
                    }}
                >
                    <div id="home-page-button" >
                        <Button>
                            <SvgIcon component={IconHomePage} inheritViewBox/>
                        </Button>
                        <Link 
                        underline="none" 
                        href="/post"
                        color="inherit"
                        style={{
                            fontWeight: 600,
                        }}>{"Home Page"}</Link>
                    </div>
                    <div id="home-page-button" >
                        <Button>
                            <SvgIcon component={IconHomePage} inheritViewBox/>
                        </Button>
                        <Link 
                        underline="none" 
                        href="/post"
                        color="inherit"
                        style={{
                            fontWeight: 600,
                        }}>{"Home Page"}</Link>
                    </div>
                    <div id="home-page-button" >
                        <Button>
                            <SvgIcon component={IconHomePage} inheritViewBox/>
                        </Button>
                        <Link 
                        underline="none" 
                        href="/post"
                        color="inherit"
                        style={{
                            fontWeight: 600,
                        }}>{"Home Page"}</Link>
                    </div>
                    <div id="home-page-button" >
                        <Button>
                            <SvgIcon component={IconHomePage} inheritViewBox/>
                        </Button>
                        <Link 
                        underline="none" 
                        href="/post"
                        color="inherit"
                        style={{
                            fontWeight: 600,
                        }}>{"Home Page"}</Link>
                    </div>
                </div>

                <div 
                    id="button-my-profile"
                    style={{
                        flex: 1
                    }}
                >
                </div>

            </div>
            <div
                id="news-feed"
                style={{
                    marginTop: "100px",
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "5000px",
                    backgroundColor: "#F5F5F5"
                }}
            >
                <div
                    id="profile-tab"
                    style={{
                        flex: 1,
                    }}
                >
                    <h1>Div duoi 1</h1>
                </div>
                <div
                    id="news-tab"
                    style={{
                        flex: 1,
                    }}
                >
                    <h1>Div duoi 2</h1>
                </div>
                <div
                    id="social-tab"
                    style={{
                        flex: 1,
                    }}
                >
                    <h1>Div duoi 3</h1>
                </div>
            </div>
        </div>
    )
}