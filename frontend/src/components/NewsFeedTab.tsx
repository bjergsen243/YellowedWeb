import {
  Avatar,
  Box,
  Button,
  Icon,
  Input,
  Modal,
  Paper,
  SvgIcon,
  TextField,
  Typography,
} from "@mui/material";
import { ReactComponent as IconLogo } from "../assets/logo-news-feed.svg";
import { ReactComponent as IconEmoji } from "../assets/icon-emoji.svg";
import { ReactComponent as IconImageUpload } from "../assets/icon-image-upload.svg";
import { ReactComponent as IconVideoUpload } from "../assets/icon-video-upload.svg";
import { ReactComponent as IconAttachmentUpload } from "../assets/icon-attachment-upload.svg";
import { ReactComponent as IconHashtagUpload } from "../assets/icon-hashtag-upload.svg";
import { ReactComponent as ProfileAvatar } from "../assets/profile-avatar.svg";
import { ReactComponent as IconLock } from "../assets/icon-lock.svg";
import { ReactComponent as IconShowMore } from "../assets/icon-show-more.svg";

import React from "react";
import NewPostComponent from "./NewPostComponent";
const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 20,
  p: 4,
};
/**
 * component news feed  cua trang post hien thi nhung bai dang cua nguoi dung va cua ban be.
 * @constructor none.
 */
export default function NewsFeedTab() {
  const [open, setOpen] = React.useState(false);
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
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
            borderRadius: 20,
          }}
        >
          <div
            style={{
              alignItems: "center",
              margin: "35px",
            }}
          >
            <Box component="div" id="post-status" display="flex">
              <Avatar src="profile-avatar.jpg" sx={{ marginTop: 1 }}></Avatar>
              <TextField
                placeholder="Share something..."
                variant="outlined"
                fullWidth={true}
                onClick={handleOpenModal}
                sx={{
                  marginLeft: 2,
                  borderRadius: 20,
                }}
                InputProps={{
                  endAdornment: (
                    <Button>
                      <SvgIcon component={IconEmoji} inheritViewBox />
                    </Button>
                  ),
                }}
              ></TextField>
              <Modal open={open} onClose={handleCloseModal}>
                <Paper sx={styleModal}>
                  <div id="edit-profile">
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: 700,
                        fontSize: 28,
                        lineHeight: "150%",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        color: "#29282B",
                      }}
                    >
                      Create post
                    </Typography>
                  </div>
                  <div style={{ display: "flex", marginTop: 25 }}>
                    <div style={{ marginTop: 10 }}>
                      <SvgIcon component={ProfileAvatar} inheritViewBox />
                    </div>
                    <div style={{ marginLeft: 18 }}>
                      <Typography>Nguyen Quynh Anh</Typography>
                      <Button
                        sx={{
                          backgroundColor: "#F5F5F5",
                          borderRadius: 6,
                          textTransform: "none",
                        }}
                      >
                        <SvgIcon
                          component={IconLock}
                          inheritViewBox
                          sx={{ marginRight: 0.75 }}
                        />
                        Only me
                        <SvgIcon
                          component={IconShowMore}
                          inheritViewBox
                          sx={{
                            marginLeft: 1,
                          }}
                        />
                      </Button>
                    </div>
                  </div>
                  <div id="status">
                    <Input
                      disableUnderline={true}
                      placeholder="What's on you mind?"
                      sx={{
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 24,
                        lineHeight: "150%",
                        marginTop: 2,
                      }}
                    ></Input>
                  </div>
                  <Paper
                    sx={{
                      borderRadius: 10,
                      border: 1,
                      display: "flex",
                      marginTop: 9,
                    }}
                  >
                    <div
                      style={{
                        margin: 15,
                        display: "flex",
                      }}
                    >
                      <Input
                        placeholder="Add to your post"
                        fullWidth={true}
                        disableUnderline={true}
                        sx={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: 16,
                          lineHeight: "150%",
                          marginTop: 0.5,
                          marginLeft: 1,
                        }}
                      />
                      <div
                        id="upload-image-video"
                        style={{ marginLeft: 60, display: "flex" }}
                      >
                        <Button component="label" style={{ color: "#FFFFFF" }}>
                          <input hidden accept="image/*" multiple type="file" />
                          <SvgIcon component={IconImageUpload} inheritViewBox />
                          <Typography
                            style={{
                              color: "#29282B",
                              textTransform: "none",
                              marginRight: 10,
                            }}
                          >
                            {" "}
                            Image
                          </Typography>
                        </Button>

                        <Button component="label" style={{ color: "#FFFFFF" }}>
                          <input hidden accept="video/*" multiple type="file" />
                          <SvgIcon component={IconVideoUpload} inheritViewBox />
                          <Typography
                            style={{
                              color: "#29282B",
                              textTransform: "none",
                              marginRight: 10,
                            }}
                          >
                            {" "}
                            Video
                          </Typography>
                        </Button>
                      </div>
                    </div>
                  </Paper>
                  <Button
                    fullWidth
                    sx={{
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "17px 22px",
                      gap: 10,
                      marginTop: 3,
                      backgroundColor: "#C18FF5",
                      textTransform: "none",
                    }}
                  >
                    Post
                  </Button>
                </Paper>
              </Modal>
            </Box>
            <div
              id="upload-things"
              style={{
                marginTop: 24,
              }}
            >
              <Button component="label" style={{ color: "#FFFFFF" }}>
                <input hidden accept="image/*" multiple type="file" />
                <SvgIcon component={IconImageUpload} inheritViewBox />
                <Typography
                  style={{
                    color: "#29282B",
                    textTransform: "none",
                    marginRight: 26,
                  }}
                >
                  {" "}
                  Image
                </Typography>
              </Button>

              <Button component="label" style={{ color: "#FFFFFF" }}>
                <input hidden accept="video/*" multiple type="file" />
                <SvgIcon component={IconVideoUpload} inheritViewBox />
                <Typography
                  style={{
                    color: "#29282B",
                    textTransform: "none",
                    marginRight: 26,
                  }}
                >
                  {" "}
                  Video
                </Typography>
              </Button>

              <Button component="label" style={{ color: "#FFFFFF" }}>
                <input hidden accept="/*" multiple type="file" />
                <SvgIcon component={IconAttachmentUpload} inheritViewBox />
                <Typography
                  style={{
                    color: "#29282B",
                    textTransform: "none",
                    marginRight: 26,
                  }}
                >
                  {" "}
                  Attachment
                </Typography>
              </Button>

              <Button component="label" style={{ color: "#FFFFFF" }}>
                <input hidden accept="/*" multiple type="file" />
                <SvgIcon component={IconHashtagUpload} inheritViewBox />
                <Typography
                  style={{
                    color: "#29282B",
                    textTransform: "none",
                    marginRight: 26,
                  }}
                >
                  {" "}
                  Hashtag
                </Typography>
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
            borderRadius: 20,
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
  );
}
