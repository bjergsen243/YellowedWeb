import {Button, Icon, Paper, SvgIcon, TextField, Typography} from "@mui/material";
import {ReactComponent as IconLogo} from "../assets/logo-news-feed.svg";
import {ReactComponent as IconEmoji} from "../assets/icon-emoji.svg";
import {ReactComponent as IconImageUpload} from "../assets/icon-image-upload.svg";
import {ReactComponent as IconVideoUpload} from "../assets/icon-video-upload.svg";
import {ReactComponent as IconAttachmentUpload} from "../assets/icon-attachment-upload.svg";
import {ReactComponent as IconHashtagUpload} from "../assets/icon-hashtag-upload.svg";
import React from "react";
import NewPostComponent from "./NewPostComponent";

/**
 * component news feed  cua trang post hien thi nhung bai dang cua nguoi dung va cua ban be.
 * @constructor none.
 */
export default function NewsFeedTab () {
  return(
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
  )
}