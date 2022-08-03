import {Paper} from "@mui/material";

/**
 * tao ra 1 Paper de tao cac truong thong tin mong muon.
 *
 * @constructor interface cua class.
 */
export default function SocialTabComponent() {
  return (
      <Paper
          elevation={3}
          variant="outlined"
          style={{
            alignItems: "center",
            backgroundColor: "white",
            textAlign: "left",
            margin: 50,
          }}
      >
      </Paper>
  )
}