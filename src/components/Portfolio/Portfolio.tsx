import { Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getStocksInPortfolio } from "../../state/stocks/stocks.selectors";
import { PortfolioTable } from "../PortfolioTable";

export const Portfolio: React.FC = () => {
  const stocksInPortfolio = useSelector(getStocksInPortfolio);

  return stocksInPortfolio.length !== 0 ? (
    <>
      <Text marginBottom={2}>Your portfolio</Text>
      <PortfolioTable stocksInPortfolio={stocksInPortfolio} />
    </>
  ) : (
    <Flex justifyContent="center">
      <Text fontSize="3xl">No stocks in portfolio yet!</Text>
    </Flex>
  );
};
