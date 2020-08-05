import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  cinema: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // opacity:'.9',
    zIndex: "-1",
  },
  resultItem: {
    maxWidth: "100%",
    maxHeight: "500px",
    borderRadius: "3px",
    webkitBoxShadow: " 0px 0px 20px 0px rgba(13,28,227,1)",
    mozBoxShadow: " 0px 0px 20px 0px rgba(13,28,227,1)",
    boxShadow: "0px 0px 20px 0px rgba(13,28,227,1)",
  },

  moviesDetailsImage:{
    webkitBoxShadow: " 0px 0px 20px 0px rgba(13,28,227,1)",
    mozBoxShadow: " 0px 0px 20px 0px rgba(13,28,227,1)",
    boxShadow: "0px 0px 20px 0px rgba(13,28,227,1)",
  },

  bannerText: {
    textAlign: "center",
    fontSize: "2rem",
    padding: "2rem",
    color: "white",
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
    maxWidth: "400px",
    height: "40px",
  },
  homeNavigation: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "2rem",
    alignItems: "center",
    color: "white",
  },
  homeNavItems: {
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
  },
  movieDetailsContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "70%",
    margin: "2rem auto",
    padding: "0.5rem",
    justifyContent: "center",
  },
  movieDetailsInfo: {
    flex: "2",
    maxHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding:'1rem',
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "1rem auto",
    alignItems:'center'
  },
  searchInput: {
    minWidth: "300px",
    height: "40px",
    padding: "5px",
    border: "1px solid lightblue",
    outlineColor: "palegreen",
    alignItems: "center",
    fontSize: "1rem",
    textAlign: "center",
    borderRadius: "3px",
    margin: "2px",
  },
  searchYear: {
    width: "100px",
    height: "40px",
    padding: "5px",
    border: "1px solid lightblue",
    outlineColor: "palegreen",
    alignItems: "center",
    fontSize: "1rem",
    textAlign: "center",
    borderRadius: "3px",
    margin: "2px",
  },
  selectInfo: {
    height: "40px",
    margin: "2px",
    borderRadius: "3px",
    outlineColor: "palegreen",
    borderColor: "lightblue",
    fontSize: "1rem",
    color:"gray"
  },
  searchBtn: {
    height: "40px",
    width: "100px",
    margin: "3px",
  },
}));
