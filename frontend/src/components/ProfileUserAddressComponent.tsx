import {Avatar, Typography} from "@mui/material";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";
interface IProfileUserAddressComponent {
  name: string;
  address: string;
}
export default function ProfileUserAddressComponent({name, address}: IProfileUserAddressComponent) {
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
          <Typography>{name}</Typography>
          <Typography>{address}</Typography>
        </div>
      </div>
  );
}