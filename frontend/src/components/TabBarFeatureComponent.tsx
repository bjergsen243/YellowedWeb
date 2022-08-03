import {Button, Link, SvgIcon} from "@mui/material";
import {ReactComponent as IconHomePage} from "../assets/icon-home-page.svg";
import {ReactComponentElement} from "react";
interface ITabBarFeatureComponent {
  div_id: string;
  // componentIcon: string;
  hrefLink: string;
  featureDisplay: string;
}
export default function TabBarFeatureComponent({div_id, hrefLink, featureDisplay}: ITabBarFeatureComponent) {
  return(
      <div id={div_id}>
        <Button>
          <SvgIcon component={IconHomePage} inheritViewBox/>
        </Button>
        <Link
            underline="none"
            href={hrefLink}
            color="inherit"
            style={{
              fontWeight: 600,
            }}
        >
          {featureDisplay}
        </Link>
      </div>
  )
}