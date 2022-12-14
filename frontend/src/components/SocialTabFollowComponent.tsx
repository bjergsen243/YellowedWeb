import React from "react";
import {Avatar, Button, Icon, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";
import {ReactComponent as IconTickCircle} from "../assets/icon-tick-circle.svg";
import {ReactComponent as IconCloseCircle} from "../assets/icon-close-circle.svg";
interface IProfileUserFollowComponent {
  name: string;
}

/**
 * component de hien thi ten cua nguoi theo doi cung nhu 2 nut chap nhan hoac khong chap nhan theo doi.
 *
 * @param name ten cua nguoi theo doi.
 * @constructor
 */
export default function SocialTabFollowComponent({name}: IProfileUserFollowComponent) {
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
          <Button>
            <Avatar>
              <AvatarProfile/>
            </Avatar>
          </Button>

        </div>
        <div id="profile-user-follow">
          <Typography>{name}</Typography>
          <Button>
            <SvgIcon component={IconTickCircle} inheritViewBox sx={{fontSize: 20}}/>
          </Button>
            <Button>
              <SvgIcon component={IconCloseCircle} inheritViewBox sx={{fontSize: 20}}/>
            </Button>
        </div>
      </div>
  )
}