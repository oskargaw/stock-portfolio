import { Table, Tbody, Text, Thead, Tr } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteStockFromPortfolio } from "../../state/stocks/stocks.actionCreators";
import { Stock } from "../../types/stocks";
import { TbodyCell, TbodyCellLink, TbodyRow, TheadCell } from "./style";

interface PortfolioTableProps {
  stocksInPortfolio: Stock[];
}

const BASE_URL = "/companyDetails";

export const PortfolioTable: React.FC<PortfolioTableProps> = ({
  stocksInPortfolio,
}) => {
  const dispatch = useDispatch();

  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <TheadCell>Company name</TheadCell>
          <TheadCell>Symbol</TheadCell>
          <TheadCell>Actions</TheadCell>
        </Tr>
      </Thead>
      <Tbody>
        {stocksInPortfolio.map((stock: Stock, index: number) => (
          <TbodyRow key={index}>
            <TbodyCellLink to={`${BASE_URL}/${stock["1. symbol"]}`}>
              <TbodyCell>{stock["2. name"]}</TbodyCell>
            </TbodyCellLink>

            <TbodyCellLink to={`${BASE_URL}/${stock["1. symbol"]}`}>
              <TbodyCell>{stock["1. symbol"]}</TbodyCell>
            </TbodyCellLink>

            <TbodyCell>
              <Text
                cursor="pointer"
                onClick={() =>
                  dispatch(deleteStockFromPortfolio(stock["1. symbol"]))
                }
              >
                Remove
              </Text>
            </TbodyCell>
          </TbodyRow>
        ))}
      </Tbody>
    </Table>
  );
};
