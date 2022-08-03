import {Avatar, Typography} from "@mui/material";
import {ReactComponent as AvatarProfile} from "../assets/profile-avatar.svg";
interface IProfileUserAddressComponent {
  name: string;
  address: string;
}

/**
 * component nay de tao 1 div voi ten + dia chi cua nguoi dung.
 *
 * @param name ten nguoi dung
 * @param address dia chi nguoi dung
 * @constructor interface cua ham.
 */
export default function UserInformationComponent({name, address}: IProfileUserAddressComponent) {
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