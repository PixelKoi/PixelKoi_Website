import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const theme = createTheme({
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true
			}
		}
	},
	palette: {
		primary: {
			main: "#006e90",
			contrastText: "#FFFFFF"
		}
	},
});

const ContainedButtonTheme = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	backgroundColor: theme.palette.primary.main,
	borderRadius: theme.shape.borderRadius,
	fontSize: '16px',
	textTransform: 'capitalize',
	width: '150px',
	padding: '18px 32px'
  }));

const ContainedButton = (props:any) => {
	const {text} = props;
	return (
	  <ThemeProvider theme={theme}>
		<ContainedButtonTheme variant="contained">{text}</ContainedButtonTheme>
	  </ThemeProvider>
	);
  }

export default ContainedButton;
