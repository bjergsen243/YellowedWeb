import { Avatar, Button, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as AvatarProfile } from "../assets/profile-avatar.svg";
import { ReactComponent as IconThreeDots } from "../assets/icon-three-dots.svg";
import { ReactComponent as IconHeartLikePost } from "../assets/icon-heart-like-post.svg";
import { ReactComponent as IconCommentPost } from "../assets/icon-comment-post.svg";

interface INewPostComponent {
  profileName: string;
  timePosted: string;
  statusPost: string;
  imageSource: string;
  imageData: string;
  likeInPost: number;
  commentInPost: number;
}

/**
 * component de tao 1 bai viet moi.
 *
 * @param commentInPost so luong comment trong bai viet.
 * @param likeInPost so luong like trong bai viet.
 * @param timePosted khoi thoi gian da dang bai duoc.
 * @param statusPost noi dung cua bai dang.
 * @param imageData anh se hien thi thong tin khi khong load duoc.
 * @param imageSource source cua file anh.
 * @param profileName ten cua nguoi dung.
 * @constructor interface cua ham.
 */
export default function NewPostComponent({
  commentInPost,
  likeInPost,
  timePosted,
  statusPost,
  imageData,
  imageSource,
  profileName,
}: INewPostComponent) {
  return (
    <div
      id="a-post"
      style={{
        alignItems: "center",
        margin: "50px",
      }}
    >
      <div
        id="profile-user-in-post"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <div
          id="profile-user-avatar"
          style={{ marginRight: 10, marginBottom: 20 }}
        >
          <Avatar>
            <AvatarProfile />
          </Avatar>
        </div>
        <div id="profile-user-information">
          <Typography>{profileName}</Typography>
          <Typography>{timePosted}</Typography>
        </div>
        <div style={{ marginLeft: 300 }}>
          <Button>
            <SvgIcon component={IconThreeDots} inheritViewBox />
          </Button>
        </div>
      </div>
      <div style={{ marginBottom: 20 }}>
        <Typography>{statusPost}</Typography>
      </div>
      <div id="list-thing-post" style={{ marginBottom: 20 }}>
        <img src={imageSource} alt={imageData} />
      </div>
      <div
        id="like-comment"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Button>
          <SvgIcon component={IconHeartLikePost} inheritViewBox />
          <Typography> {likeInPost}</Typography>
        </Button>
        <Button style={{ color: "#FFFFFF" }}>
          <SvgIcon component={IconCommentPost} inheritViewBox />
          <Typography style={{ color: "#29282B" }}> {commentInPost}</Typography>
        </Button>
      </div>
    </div>
  );
}
