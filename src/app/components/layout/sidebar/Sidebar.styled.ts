import { SxProps, Theme } from "@mui/system";

export const sidebarContainer: SxProps<Theme> = {
  width: 250,
  px: 2,
  py: 2,
  borderRadius: "19px",
  color: "white",
  height: "100vh",
  background:
    "linear-gradient(359.18deg, #FDF7F7 77.58%, rgba(64, 123, 255, 0.1) 103.38%)",

  boxShadow: "-14px 15px 13.1px 1px #00000040",
};

export const listContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
};

export const mainListItem: SxProps<Theme> = {
  px: 3,
  textAlign: "center",
  borderRadius: "16px",
  bgcolor: "#407BFF", // Default background color
};

export const CollapseButtonlist: SxProps<Theme> = {
  px: 3,
  mt: 2,
  ":hover": {
    bgcolor: "#407BF0",
    color: "white",
    fontWeight: "semibold",
  },
  bgcolor: "#407BFF",
  color: "black",
  borderRadius: "16px",
  transition: "all 0.3s ease", // Smooth transition effect
};

export const CollapselistItme: SxProps<Theme> = {
  px: 3,
  mt: "4px",
  ":hover": {
    bgcolor: "#407BF0",
    color: "white",
    fontWeight: "semibold",
  },
  bgcolor: "#407BFF",
  color: "black",
  borderRadius: "16px",
  transition: "all 0.3s ease", // Smooth transition effect
};
