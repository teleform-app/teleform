import styled from "styled-components";

export const SwitchWrapper = styled.div<{ checked: boolean }>`
  width: 50px;
  height: 30px;

  background: ${(props) =>
    props.checked ? "#007aff" : "rgb(118, 118, 128, 0.12)"};

  border-radius: 50px;

  display: flex;
  align-items: center;
  transition: background 0.3s ease-in-out;
`;

export const SwitchButton = styled.div<{ checked: boolean }>`
  width: 26px;
  height: 26px;

  background: #ffffff;

  border-radius: 50px;

  filter: drop-shadow(
      0px 2.961290121078491px 0.9870967864990234px rgba(0, 0, 0, 0.06)
    )
    drop-shadow(
      0px 2.961290121078491px 7.8967742919921875px rgba(0, 0, 0, 0.15)
    );

  transform: ${(props) =>
    props.checked ? "translateX(22px)" : "translateX(2px)"};

  transition: transform 0.3s ease-in-out;
`;
