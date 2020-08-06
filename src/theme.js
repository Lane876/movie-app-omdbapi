import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  padding:'-20px',
  palette: {
    type: "dark",
    primary: { main: "#F93E73" },
    secondary: { main: "#320E3A" },
    background: {
      default: "#00000",
    },
  },
});

export default theme;
