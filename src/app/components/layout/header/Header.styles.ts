import { SxProps, Theme } from "@mui/system";

export const headerContainer: SxProps<Theme> = {
  display: "flex",
  py: 0.1,
  justifyContent: "space-between",
  alignItems: "center",
  bgcolor: "primary.light",
  borderRadius : "0px 0px 20px 0px" ,
  backgroundImage: "linear-gradient(90deg,  #264A99 ,#407BFF)", // Gradient here
};

export const selectContainer: SxProps<Theme> = {
  bgcolor: "white",
  display: "flex",
  px: 2,
  gap: 1,

  alignContent: "center",
  borderRadius: 2,
  alignItems: "center",
  border: "1 gray solid",
};

export const selectElement: SxProps<Theme> = {
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
};

export const selectElementIteme: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  px: 2,
  gap: 1,
  alignContent: "center",
  justifyContent: "center",
};

export const logoContainer: SxProps<Theme> = {
  width: "20%",
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
};

export const navigationContainer: SxProps<Theme> = {
  width: "80%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 2,

};

export const linksContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const linkStyle: SxProps<Theme> = {
  textDecoration: "none",
  fontSize: "1rem",
  color: "white",
};

export const userContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
};
