import {
  Avatar,
  Button,
  Icon,
  Link,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import {ReactComponent as IconLogo} from "../assets/logo-news-feed.svg";
import {ReactComponent as IconLookup} from "../assets/icon-lookup.svg";
import {ReactComponent as IconHomePage} from "../assets/icon-home-page.svg";
import {ReactComponent as IconWatch} from "../assets/icon-watch.svg";
import {ReactComponent as IconMarket} from "../assets/icon-market.svg";
import {ReactComponent as IconGroups} from "../assets/icon-groups.svg";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";
import {ReactComponent as IconLike} from "../assets/icon-like.svg";
import {ReactComponent as IconView} from "../assets/icon-view.svg";
import {ReactComponent as IconInstagram} from "../assets/icon-insta.svg";
import {ReactComponent as IconLinkedin} from "../assets/icon-linkedin.svg";
import {ReactComponent as IconHandShake} from "../assets/icon-handshake.svg";
import {ReactComponent as IconBirthdayCake} from "../assets/icon-birthdaycake.svg";
import {ReactComponent as IconEmoji} from "../assets/icon-emoji.svg";
import {ReactComponent as IconHeartLikePost} from "../assets/icon-heart-like-post.svg";
import {ReactComponent as IconCommentPost} from "../assets/icon-comment-post.svg";
import {ReactComponent as IconImageUpload} from "../assets/icon-image-upload.svg";
import {ReactComponent as IconVideoUpload} from "../assets/icon-video-upload.svg";
import {ReactComponent as IconAttachmentUpload} from "../assets/icon-attachment-upload.svg";
import {ReactComponent as IconHashtagUpload} from "../assets/icon-hashtag-upload.svg";
import {ReactComponent as IconThreeDots} from "../assets/icon-three-dots.svg";
import ProfileUserFollowComponent from "../components/ProfileUserFollowComponent";
import ProfileUserAddressComponent from "../components/ProfileUserAddressComponent";
import TabBarFeatureComponent from "../components/TabBarFeatureComponent";
import SocialNetworkComponent from "../components/SocialNetworkComponent";
import NewPostComponent from "../components/NewPostComponent";


export default function Post() {
  return (
      <div
          id="post-page"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
      >
        <div
            id="tab-bar"
            style={{
              position: "absolute",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              marginLeft: 15,
              padding: 20,
            }}
        >
          <div
              id="logo-page-and-search-field"
              style={{
                flex: 2,
                display: "flex",
                flexDirection: "row",
              }}
          >
            <div
                id="logo-page"
                style={{
                  marginTop: 10,
                }}
            >
              <Button>
                <SvgIcon component={IconLogo} inheritViewBox/>
              </Button>
            </div>
            <div id="search-field">
              <TextField
                  id="outlined-search"
                  type="search"
                  label="Search"
                  InputProps={{
                    startAdornment: (
                        <Button>
                          <SvgIcon component={IconLookup} inheritViewBox/>
                        </Button>
                    ),
                  }}
              ></TextField>
            </div>
          </div>
          <div
              id="features"
              style={{
                flex: 2,
                flexDirection: "row",
                display: "flex",
              }}
          >
            <TabBarFeatureComponent div_id="home-page-button" hrefLink="/post"
                                    featureDisplay="Home page"/>
            <TabBarFeatureComponent div_id="watch-button" hrefLink="/watch" featureDisplay="Watch"/>
            <TabBarFeatureComponent div_id="market-button" hrefLink="/market"
                                    featureDisplay="Market"/>
            <TabBarFeatureComponent div_id="groups-button" hrefLink="/groups"
                                    featureDisplay="Groups"/>
          </div>
          <div
              id="button-my-profile"
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
              }}
          >
            <div id="profile-button">
              <Button>
                <Avatar>
                  <AvatarProfile/>
                </Avatar>
              </Button>
              <Link
                  underline="none"
                  href="/groups"
                  color="inherit"
                  style={{
                    fontWeight: 600,
                  }}
              >
                {"Nguyen Quynh Anh"}
              </Link>
            </div>
          </div>
        </div>

        <div
            id="news-feed"
            style={{
              marginTop: "100px",
              display: "flex",
              flexDirection: "row",
              marginBottom: "5000px",
              backgroundColor: "#F5F5F5",
            }}
        >
          <div
              id="profile-tab"
              style={{
                flex: 1,
              }}
          >
            <Paper
                id="profile-information"
                elevation={3}
                variant="outlined"
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  textAlign: "left",
                  margin: 50,
                }}
            >
              <div
                  style={{
                    alignItems: "center",
                    margin: "35px",
                  }}
              >
                <ProfileUserAddressComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                <div id="icon-line">
                  {/* <Icon> <SvgIcon component={IconLine}/> </Icon> */}
                  <hr/>
                </div>
                <div
                    id="profile-status"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                >
                  <div
                      id="like-and-following"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 5,
                      }}
                  >
                    <div
                        id="profile-like"
                        style={{
                          marginBottom: 5,
                        }}
                    >
                      <Typography>
                        <Icon>
                          <SvgIcon component={IconLike} inheritViewBox/>
                        </Icon>{" "}
                        10K Follows
                      </Typography>
                    </div>
                    <div id="profile-following">
                      <Typography>
                        <Icon>
                          <SvgIcon component={IconView} inheritViewBox/>
                        </Icon>{" "}
                        600 Following
                      </Typography>
                    </div>
                  </div>
                  <div id="profile-introduce">
                    <Typography>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking at
                      its layout
                    </Typography>
                  </div>
                </div>
                <div>
                  <hr/>
                </div>
                <div id="profile-social">
                  <div id="my-pages">
                    <Typography>MY PAGES</Typography>
                  </div>
                  <div
                      id="social-linked"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: 5,
                      }}
                  >
                    <SocialNetworkComponent
                        divId="instagram-linked"
                        socialNetworkId="quynh_anh700"
                    />
                    <SocialNetworkComponent
                        divId="linkedin-linked"
                        socialNetworkId="quynh_anh800"
                    />
                  </div>
                  <div id="edit-my-page-button">
                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                          textTransform: "none",
                        }}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <div
              id="news-tab"
              style={{
                flex: 2,
              }}
          >
            <div id="status">
              <Paper
                  id="status-information"
                  elevation={3}
                  variant="outlined"
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "left",
                    margin: 50,
                  }}
              >
                <div
                    style={{
                      alignItems: "center",
                      margin: "35px",
                    }}
                >
                  <div id="post-status">
                    <Icon><SvgIcon component={IconLogo} inheritViewBox/></Icon>
                    <TextField
                        label="Share something..."
                        variant="filled"
                        InputProps={{
                          endAdornment:
                              <Button>
                                <SvgIcon component={IconEmoji} inheritViewBox/>
                              </Button>
                        }}
                    ></TextField>
                  </div>
                  <hr/>
                  <div
                      id="upload-things"
                      style={{
                        flexDirection: "row",
                        display: "flex",
                      }}
                  >
                    <Button component="label" style={{color: "#FFFFFF"}}>
                      <input hidden accept="image/*" multiple type="file"/>
                      <SvgIcon component={IconImageUpload} inheritViewBox/>
                      <Typography
                          style={{color: "#29282B", textTransform: "none"}}>{" "}Image</Typography>
                    </Button>

                    <Button component="label" style={{color: "#FFFFFF"}}>
                      <input hidden accept="video/*" multiple type="file"/>
                      <SvgIcon component={IconVideoUpload} inheritViewBox/>
                      <Typography
                          style={{color: "#29282B", textTransform: "none"}}>{" "}Video</Typography>
                    </Button>

                    <Button component="label" style={{color: "#FFFFFF"}}>
                      <input hidden accept="/*" multiple type="file"/>
                      <SvgIcon component={IconAttachmentUpload} inheritViewBox/>
                      <Typography style={{
                        color: "#29282B",
                        textTransform: "none"
                      }}>{" "}Attachment</Typography>
                    </Button>

                    <Button component="label" style={{color: "#FFFFFF"}}>
                      <input hidden accept="/*" multiple type="file"/>
                      <SvgIcon component={IconHashtagUpload} inheritViewBox/>
                      <Typography style={{
                        color: "#29282B",
                        textTransform: "none"
                      }}>{" "}Hashtag</Typography>
                    </Button>
                  </div>
                </div>
              </Paper>
            </div>

            <div id="news-post">
              <Paper
                  id="news-information"
                  elevation={3}
                  variant="outlined"
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "left",
                    margin: 50,
                  }}
              >
                <NewPostComponent
                    statusPost="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                    imageData="logo"
                    profileName="Nguyen Quynh Anh"
                    likeInPost={16}
                    commentInPost={18}
                    timePosted="2 hours ago"
                    imageSource="bg.png"
                />
                <NewPostComponent
                    statusPost="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
                    imageData="logo"
                    profileName="Nguyen Quynh Anh"
                    likeInPost={14}
                    commentInPost={14}
                    timePosted="3 hours ago"
                    imageSource="bg.png"
                />
              </Paper>
            </div>
          </div>

          <div
              id="social-tab"
              style={{
                flex: 1,
              }}
          >
            <div id="friend-request-div">
              <Paper
                  elevation={3}
                  variant="outlined"
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "left",
                    margin: 50,
                  }}
              >
                <div
                    style={{
                      alignItems: "center",
                      margin: "35px",
                    }}
                >
                  <div>
                    <Typography>
                      <Icon>
                        <SvgIcon component={IconHandShake} inheritViewBox/>
                      </Icon>{" "}
                      FRIEND REQUEST
                    </Typography>
                  </div>
                  <hr/>
                  <ProfileUserFollowComponent name="Nguyen Minh Anh"/>
                  <ProfileUserFollowComponent name="Marrie Lane"/>
                  <ProfileUserFollowComponent name="Jane Johnson"/>
                  <div>
                    <Button style={{
                      textTransform: "none",
                    }}>View all</Button>
                  </div>
                </div>
              </Paper>
            </div>
            <div id="birthday-div">
              <Paper
                  id="birthday-paper"
                  elevation={3}
                  variant="outlined"
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "left",
                    margin: 50,
                  }}
              >
                <div
                    style={{
                      alignItems: "center",
                      margin: "35px",
                    }}
                >
                  <div>
                    <Typography>
                      <Icon>
                        <SvgIcon component={IconBirthdayCake} inheritViewBox/>
                      </Icon>{" "}
                      BIRTHDAY
                    </Typography>
                  </div>
                  <hr/>
                  <div id="birthday-list">
                    <ProfileUserAddressComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                    <ProfileUserAddressComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                    <ProfileUserAddressComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                  </div>
                  <div>
                    <Button style={{
                      textTransform: "none",
                    }}>View all</Button>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
  );
}
