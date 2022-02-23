import { Box } from "@mui/material";

const ButtonControlPanel = (props) => {

    const { inputIcon, nameButton, position } = props;

    const border = {
        first: "20px 5px 5px 5px",
        center: "5px 5px 5px 5px",
        last: "5px 20px 5px 5px",
    }

    return (
        <Box style={{
            width: '100%',
            margin: '15px 0px',
        }}>
            <Box
                sx={{
                    border: "solid 1px firebrick",
                    borderRadius: `${border[position]}`,
                    backgroundColor: 'beige',
                    fontSize: "12px",
                    width: '15vh',
                    height: '5vh',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    '&:active': {
                        backgroundColor: 'lightgreen',
                    },
                }}>
                {inputIcon}
                {/* <CottageOutlinedIcon sx={{
                        marginRight: "20px",
                    }} /> */}
                <h3>{nameButton}</h3>
            </Box>
        </Box >
    )
};
export default ButtonControlPanel;