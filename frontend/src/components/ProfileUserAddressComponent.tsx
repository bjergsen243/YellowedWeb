import {Avatar, Typography} from "@mui/material";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";

export default function ProfileUserAddressComponent() {
  return (
      <div
          id="profile-user-with-address"
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
        <div id="profile-user-address">
          <Typography>Nguyen Quynh Anh</Typography>
          <Typography>Ha Noi</Typography>
        </div>
      </div>
  );
}