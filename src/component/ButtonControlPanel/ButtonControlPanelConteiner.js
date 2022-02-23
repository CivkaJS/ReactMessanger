import ButtonControlPanel from "./ButtonControlPanel";

const ButtonControlPanelContainer = (props) => {

    const { inputIcon, nameButton, position } = props;

    return (
        <ButtonControlPanel
            inputIcon={inputIcon}
            nameButton={nameButton}
            position={position}
        />
    );
};
export default ButtonControlPanelContainer;

// const linkAdress = '/'
// const inputIcon = < CottageOutlinedIcon sx={{ marginRight: "20px" }} />;