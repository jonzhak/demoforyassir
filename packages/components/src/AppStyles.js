import * as React from 'react';
import { StyleSheet } from 'react-native';

const AppStyles = StyleSheet.create({
	  signup: {
		display: "flex",
		height: "90vh",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "100px",
		backgroundImage: "url('../public/images/img-8.jpg')",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		color: "#fff"
	  },
	  products: {
		display: "flex",
		height: "90vh",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "100px",
		backgroundImage: "url('../public/images/img-1.jpg')",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		color: "#fff"
	  },
	  services: {
		display: "flex",
		height: "90vh",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "100px",
		backgroundImage: "url('../public/images/img-2.jpg')",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		color: "#fff"
	  },
	  home: {
		display: "flex",
		height: "90vh",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "3rem"
	  },
	  
	  .btn: {
		  padding: "8px 20px;"
		  borderRadius: "2px;"
		  outline: "none;"
		  border: "none;"
		  cursor: "pointer;"
		}

		.btnPrimary: {
		  backgroundColor: "#fff;"
		  color: "#242424;"
		  border: "1px solid #fff;"
		}

		.btnOutline: {
		  backgroundColor: "transparent;"
		  color: "#fff;"
		  padding: "8px 20px;"
		  border: "1px solid #fff;"
		  transition: "all 0.3s ease-out;"
		}

		.btnMedium: {
		  padding: "8px 20px;"
		  font-size: "18px;"
		}

		.btnLarge: {
		  padding: "12px 26px;"
		  font-size: "20px;"
		}
	  
});

export default AppStyles;
