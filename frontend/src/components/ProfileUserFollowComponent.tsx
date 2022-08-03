import React from "react";
import {Avatar, Icon, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";
import {ReactComponent as IconTickCircle} from "../assets/icon-tick-circle.svg";
import {ReactComponent as IconCloseCircle} from "../assets/icon-close-circle.svg";

export default function ProfileUserFollowComponent() {
  return (
      <div
          id="profile-user-follow"
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
          }}
      >
        <div id="profile-user-avatar">
          <Avatar>
            <AvatarProfile/>
          </Avatar>
        </div>
        <div id="profile-user-follow">
          <Typography>Nguyen Quynh Anh</Typography>
          <Icon>
            <SvgIcon component={IconTickCircle} inheritViewBox/>
          </Icon>
          <Icon>
            <SvgIcon component={IconCloseCircle} inheritViewBox/>
          </Icon>
        </div>
      </div>
  )
}