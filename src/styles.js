import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  resultItem: {
    maxWidth: "100%",
    maxHeight: "500px",
    borderRadius: "3px",
    webkitBoxShadow: " 0px 0px 20px 0px rgba(218,91,247,1)",
    mozBoxShadow: " 0px 0px 20px 0px rgba(218,91,247,1)",
    boxShadow: "0px 0px 20px 0px rgba(218,91,247,1)",
  },

  moviesDetailsImage: {
    webkitBoxShadow: " 0px 0px 20px 0px rgba(218,91,247,1)",
    mozBoxShadow: " 0px 0px 20px 0px rgba(218,91,247,1)",
    boxShadow: "0px 0px 20px 0px rgba(218,91,247,1)",
  },

  bannerText: {
    textAlign: "center",
    padding: "2rem",
    color: "white",
    fontWeight: "900",
    fontSize: "2rem",
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
    maxWidth: "90%",
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
    height:"100%",
    marginTop:"2rem",
    margin: "0 auto",
    justifyContent: "center",
    alignItems:"center"
  },
  movieDetailsInfo: {
    flex: "2",
    height:'400px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "1rem auto",
    alignItems: "center",
  },
  searchInput: {
    minWidth: "300px",
    height: "40px",
    padding: "5px",
    border: "1px solid lightblue",
    outlineColor: "#F93E73",
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
    outlineColor: "#F93E73",
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
    outlineColor: "#F93E73",
    borderColor: "lightblue",
    fontSize: "1rem",
    color: "gray",
  },
  searchBtn: {
    height: "40px",
    width: "100px",
    margin: "3px",
  },
}));
