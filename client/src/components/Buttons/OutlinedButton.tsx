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
			contrastText: "#006e90"
		}
	},
});

const OutlinedButtonTheme = styled(Button)(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	borderRadius: theme.shape.borderRadius,
	fontSize: '16px',
	textTransform: 'capitalize',
    height: '52x',
	padding: '18px 32px'
  }));

const OutlinedButton = (props:any) => {
	const {text} = props;
	return (
	  <ThemeProvider theme={theme}>
		<OutlinedButtonTheme variant="outlined">{text}</OutlinedButtonTheme>
	  </ThemeProvider>
	);
  }

export default OutlinedButton;
