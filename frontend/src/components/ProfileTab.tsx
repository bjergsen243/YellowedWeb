import {Button, Icon, Paper, SvgIcon, Typography} from "@mui/material";
import UserInformationComponent from "./UserInformationComponent";
import {ReactComponent as IconLike} from "../assets/icon-like.svg";
import {ReactComponent as IconView} from "../assets/icon-view.svg";
import ProfileTabNetworkComponent from "./ProfileTabNetworkComponent";
import React from "react";

/**
 * component tab profile cua trang post hien thi thong tin ca nhan cua nguoi dung.
 * @constructor
 */
export default function ProfileTab() {
  const [open, setOpen] = React.useState(false);
  const handleOpenEditProfile = () => setOpen(true);
  const handleCloseEditProfile = () => setOpen(false);
  return(
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
            <UserInformationComponent name="Nguyen Quynh Anh" address="Hanoi"/>
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
                <ProfileTabNetworkComponent
                    divId="instagram-linked"
                    socialNetworkId="quynh_anh700"
                />
                <ProfileTabNetworkComponent
                    divId="linkedin-linked"
                    socialNetworkId="quynh_anh800"
                />
              </div>
              <div id="edit-my-page-button">
                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleOpenEditProfile}
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
  )
}