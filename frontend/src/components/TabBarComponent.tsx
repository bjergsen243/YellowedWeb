import { Button, Link, SvgIcon } from "@mui/material";
import { ReactComponent as IconHomePage } from "../assets/icon-home-page.svg";

interface ITabBarFeatureComponent {
  div_id: string;
  hrefLink: string;
  featureDisplay: string;
}
export default function TabBarComponent({
  div_id,
  hrefLink,
  featureDisplay,
}: ITabBarFeatureComponent) {
  return (
    <div id={div_id} style={{ marginRight: 38 }}>
      <Button>
        <SvgIcon component={IconHomePage} inheritViewBox />
      </Button>
      <Link
        underline="none"
        href={hrefLink}
        color="inherit"
        style={{
          fontWeight: 600,
          fontSize: 14,
          lineHeight: "150%",
          fontFamily: "Poppins",
          fontStyle: "normal",
        }}
      >
        {featureDisplay}
      </Link>
    </div>
  );
}
