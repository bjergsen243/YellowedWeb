import {
  Avatar,
  Badge,
  Button,
  Input,
  Modal,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import UserInformationComponent from "./UserInformationComponent";
import { ReactComponent as IconLike } from "../assets/icon-like.svg";
import { ReactComponent as IconView } from "../assets/icon-view.svg";
import ProfileTabNetworkComponent from "./ProfileTabNetworkComponent";
import { ReactComponent as IconEditButton } from "../assets/icon-edit-button.svg";
import { ReactComponent as IconInstagram } from "../assets/icon-insta.svg";
import { ReactComponent as IconLinkedin } from "../assets/icon-linkedin.svg";
import { ReactComponent as IconAddCircle } from "../assets/icon-add-circle.svg";
import React from "react";
import { ReactComponent as IconUploadAvatar } from "../assets/icon-upload-avatar.svg";

/**
 * component tab profile cua trang post hien thi thong tin ca nhan cua nguoi dung.
 * @constructor
 */
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: 20,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ProfileTab() {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
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
          borderRadius: 20,
        }}
      >
        <div
          style={{
            alignItems: "center",
            margin: "35px",
          }}
        >
          <UserInformationComponent name="Nguyen Quynh Anh" address="Hanoi" />
          <hr />
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
                  <SvgIcon component={IconLike} inheritViewBox /> 10K Follows
                </Typography>
              </div>
              <div id="profile-following">
                <Typography>
                  <SvgIcon component={IconView} inheritViewBox /> 600 Following
                </Typography>
              </div>
            </div>
            <div id="profile-introduce">
              <Typography>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </Typography>
            </div>
          </div>
          <div>
            <hr />
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
                onClick={handleOpenModal}
                style={{
                  textTransform: "none",
                }}
              >
                Edit
              </Button>
              <Modal open={open} onClose={handleCloseModal}>
                <Paper sx={styleModal}>
                  <div id="edit-profile">
                    <Typography align="center">Edit Profile</Typography>
                  </div>
                  <div
                    id="edit-name-avtar"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 25,
                    }}
                  >
                    <div id="edit-avatar">
                      <Badge
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        badgeContent={
                          <Button
                            component="label"
                            style={{ color: "#FFFFFF" }}
                          >
                            <input
                              hidden
                              accept="image/*"
                              multiple
                              type="file"
                            />
                            <SvgIcon
                              component={IconUploadAvatar}
                              inheritViewBox
                            />
                          </Button>
                        }
                      >
                        <Avatar
                          alt="user-avatar"
                          src="../assets/profile-avatar.jpg"
                        />
                      </Badge>
                    </div>
                    <div id="edit-name" style={{ marginLeft: 40 }}>
                      <TextField
                        disabled
                        defaultValue="Nguyen Quynh Anh"
                        variant="standard"
                        fullWidth
                        InputProps={{ disableUnderline: true }}
                      />
                    </div>
                    <div id="button-edit-name" style={{ marginLeft: 100 }}>
                      <Button>
                        <SvgIcon component={IconEditButton} inheritViewBox />
                      </Button>
                    </div>
                  </div>
                  <div
                    id="edit-location"
                    style={{
                      marginTop: 25,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <div id="label-location">
                        <Typography>Location</Typography>
                      </div>
                      <div id="edit-location-field">
                        <TextField
                          disabled
                          defaultValue="Hanoi"
                          variant="standard"
                          InputProps={{ disableUnderline: true }}
                        />
                      </div>
                    </div>
                    <div
                      id="icon-edit-button"
                      style={{
                        marginLeft: 150,
                      }}
                    >
                      <Button>
                        <SvgIcon component={IconEditButton} inheritViewBox />
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div
                    id="edit-bio"
                    style={{
                      marginTop: 25,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div>
                      <div id="label-bio">
                        <Typography>Bio</Typography>
                      </div>
                      <div id="edit-bio-field">
                        <Input
                          disabled
                          fullWidth
                          disableUnderline={true}
                          defaultValue="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
                        />
                      </div>
                    </div>
                    <div
                      id="icon-edit-button"
                      style={{
                        marginLeft: 170,
                      }}
                    >
                      <Button>
                        <SvgIcon component={IconEditButton} inheritViewBox />
                      </Button>
                    </div>
                  </div>
                  <hr />
                  <div id="edit-my-pages">
                    <Typography>My pages</Typography>
                    <div id="my-pages-link">
                      <div
                        id="edit-instagram"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <div id="icon-button-instagram">
                          <Button>
                            <SvgIcon component={IconInstagram} inheritViewBox />
                          </Button>
                        </div>
                        <div id="edit-instagram-name">
                          <Input
                            placeholder="Placeholder"
                            disabled
                            defaultValue="quynh_anh700"
                            disableUnderline={true}
                          />
                        </div>
                        <div
                          id="edit-button-instagram"
                          style={{ marginLeft: 150 }}
                        >
                          <Button>
                            <SvgIcon
                              component={IconEditButton}
                              inheritViewBox
                            />
                          </Button>
                        </div>
                      </div>

                      <div
                        id="edit-linkedin"
                        style={{ display: "flex", flexDirection: "row" }}
                      >
                        <div id="icon-button-linkedin">
                          <Button>
                            <SvgIcon component={IconLinkedin} inheritViewBox />
                          </Button>
                        </div>
                        <div id="edit-linkedin-name">
                          <Input
                            placeholder="Placeholder"
                            disabled
                            defaultValue="quynh_anh800"
                            disableUnderline={true}
                          />
                        </div>
                        <div
                          id="edit-button-linkedin"
                          style={{ marginLeft: 150 }}
                        >
                          <Button>
                            <SvgIcon
                              component={IconEditButton}
                              inheritViewBox
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="icon-button-add-website"
                      style={{
                        marginTop: 10,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <div>
                        <Button component="label" style={{ color: "#FFFFFF" }}>
                          <SvgIcon component={IconAddCircle} inheritViewBox />
                        </Button>
                      </div>
                      <div>
                        <Button>
                          <Typography
                            style={{ color: "#8954C2", textTransform: "none" }}
                          >
                            {" "}
                            Add a website
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Modal>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
}
