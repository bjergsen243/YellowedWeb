import {Icon, SvgIcon, Typography} from "@mui/material";
import {ReactComponent as IconInsta} from "../assets/icon-insta.svg";

interface ISocialNetworkComponent {
  divId: string;
  socialNetworkId: string;
}

export default function SocialNetworkComponent({divId, socialNetworkId}: ISocialNetworkComponent) {
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