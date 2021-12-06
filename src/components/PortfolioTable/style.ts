import { chakra, Td, Tr } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const TheadCell = chakra("th", {
  baseStyle: {
    paddingTop: 7,
    paddingBottom: 7,
    border: "1px solid",
    borderColor: "gray.900",
    backgroundColor: "#9e9e9e",
    color: "white",
  },
});

export const TbodyRow = styled(Tr)`
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

export const TbodyCell = styled(Td)`
  display: block;
  text-align: center;
`;

export const TbodyCellLink = styled(Link)`
  display: table-cell;
`;
