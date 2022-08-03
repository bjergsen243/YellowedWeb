import {Button, Icon, Paper, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as IconHandShake} from "../assets/icon-handshake.svg";
import SocialTabFollowComponent from "./SocialTabFollowComponent";
import {ReactComponent as IconBirthdayCake} from "../assets/icon-birthdaycake.svg";
import UserInformationComponent from "./UserInformationComponent";
import React from "react";

/**
 * component social tab cua trang post hien thi nhung thong tin xa hoi cua nguoi dung.
 * @constructor
 */
export default function SocialTab () {
  return(
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
              <SocialTabFollowComponent name="Nguyen Minh Anh"/>
              <SocialTabFollowComponent name="Marrie Lane"/>
              <SocialTabFollowComponent name="Jane Johnson"/>
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
                <UserInformationComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                <UserInformationComponent name="Nguyen Quynh Anh" address="Hanoi"/>
                <UserInformationComponent name="Nguyen Quynh Anh" address="Hanoi"/>
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
  )
}