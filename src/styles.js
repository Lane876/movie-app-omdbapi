import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  bannerText: {
    textAlign: "center",
    fontSize: "2rem",
    padding: "2rem",
  },
  homeResult: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  loadMoreBtn: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  },
  loadBtn: {
    width: "200px",
    height: "40px",
  },
  // movieDetail:{
  //   display:'flex',
  //   justifyContent:'center',
  //   alignItems:'center',
  //   flexWrap:'wrap',
  //   width:'90%',
  //   margin:'1rem auto'
  // },
}));
