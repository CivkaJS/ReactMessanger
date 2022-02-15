import ButtonAddChat from "./ButtonAddChat";

const ButtonAddChatContainer = (props) => {

  const { handleOpen } = props;

  return (
    <ButtonAddChat
      handleOpen = {handleOpen}
    />
  );
};

export default ButtonAddChatContainer;