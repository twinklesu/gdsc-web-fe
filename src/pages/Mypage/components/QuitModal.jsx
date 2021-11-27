import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import axios from "axios";

const quitModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "calc(100% - 32px)",
    maxWidth: "420px",
    overflow: "hidden",
    padding: "0px",
    border: "none",
    outline: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

const ModalContent = styled.div`
  padding: 20px 20px 20px 20px;
  .quit-choice {
    float: right;
    margin-top: 20px;
    button {
      margin-left: 10px;
      margin-bottom: 20px;
      color: ${COLORS.red};
    }
  }
`;

const QuitModal = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const onClickOk = async () => {
    const writeResult = await axios({
      method: "DELETE",
      url: "/api/user",
      data: {},
    });
    if (writeResult.data.success) {
      // 성공
      window.location.reload();
    }
  };

  return (
    <div>
      <button onClick={openModal}>{text}</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        contentLabel="탈퇴 모달"
        style={quitModalStyle}
      >
        <ModalContent>
          <p>
            탈퇴 후, 귀하의 정보는 폐기되며 복구가 불가능합니다. 정말로
            탈퇴하시겠습니까?
          </p>
          <div className="quit-choice">
            <button onClick={() => setIsOpen(false)}>취소</button>
            <button onClick={onClickOk}>확인</button>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default QuitModal;
