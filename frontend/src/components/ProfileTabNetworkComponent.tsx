import {Icon, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as IconInsta} from "../assets/icon-insta.svg";

interface ISocialNetworkComponent {
  divId: string;
  socialNetworkId: string;
}

/**
 * ham de tao 1 div cho moi duong lien ket trang mang xa hoi.
 *
 * @param divId ten cua trang mang xa hoi.
 * @param socialNetworkId ten cua nguoi dung tren mang xa hoi do.
 * @constructor interface cua ham.
 */
export default function ProfileTabNetworkComponent({divId, socialNetworkId}: ISocialNetworkComponent) {
  return(
      <div
          id={divId}
          style={{
            marginBottom: 5,
          }}
      >
        <Typography>
          <Icon>
            <SvgIcon component={IconInsta} inheritViewBox/>
          </Icon>{" "}
          {socialNetworkId}
        </Typography>
      </div>
  )
}