import React from "react";
import TabBar from "../components/TabBar";
import ProfileTab from "../components/ProfileTab";
import NewsFeedTab from "../components/NewsFeedTab";
import SocialTab from "../components/SocialTab";

export default function Post() {
  return (
    <div
      id="post-page"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
      }}
    >
      <TabBar />
      <div
        id="news-feed"
        style={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#C1C1C1",
        }}
      >
        <ProfileTab />
        <NewsFeedTab />
        <SocialTab />
      </div>
    </div>
  );
}
