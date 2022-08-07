import { Avatar, Button, Link, SvgIcon, TextField } from "@mui/material";
import { ReactComponent as IconLogo } from "../assets/logo-news-feed.svg";
import { ReactComponent as IconLookup } from "../assets/icon-lookup.svg";
import TabBarComponent from "./TabBarComponent";
import { ReactComponent as AvatarProfile } from "../assets/profile-avatar.svg";
import React from "react";

/**
 * component tab bar cua trang post co nhung chuc nang chuyen den cac trang khac.
 * @constructor
 */
export default function TabBar() {
  return (
    <div
      id="tab-bar"
      style={{
        position: "absolute",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        marginLeft: 15,
        padding: 20,
      }}
    >
      <div
        id="logo-page-and-search-field"
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          id="logo-page"
          style={{
            marginTop: 10,
            marginRight: 19,
          }}
        >
          <Button size="large">
            <SvgIcon component={IconLogo} inheritViewBox />
          </Button>
        </div>
        <div
          id="search-field"
          style={{
            boxSizing: "border-box",
            justifyContent: "center",
            borderRadius: 20,
          }}
        >
          <TextField
            id="outlined-search"
            type="search"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <Button>
                  <SvgIcon component={IconLookup} inheritViewBox />
                </Button>
              ),
            }}
          ></TextField>
        </div>
      </div>
      <div
        id="features"
        style={{
          flex: 2,
          flexDirection: "row",
          display: "flex",
        }}
      >
        <TabBarComponent
          div_id="home-page-button"
          hrefLink="/post"
          featureDisplay="Home page"
        />
        <TabBarComponent
          div_id="watch-button"
          hrefLink="/watch"
          featureDisplay="Watch"
        />
        <TabBarComponent
          div_id="market-button"
          hrefLink="/market"
          featureDisplay="Market"
        />
        <TabBarComponent
          div_id="groups-button"
          hrefLink="/groups"
          featureDisplay="Groups"
        />
      </div>
      <div
        id="button-my-profile"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div id="profile-button">
          <Button>
            <Avatar>
              <AvatarProfile />
            </Avatar>
          </Button>
          <Link
            underline="none"
            href="/me"
            color="inherit"
            style={{
              fontWeight: 600,
            }}
          >
            {"Nguyen Quynh Anh"}
          </Link>
        </div>
      </div>
    </div>
  );
}
