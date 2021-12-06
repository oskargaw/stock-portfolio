import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getFetchedStocks } from "../../state/stocks/stocks.selectors";
import { Stock } from "../../types/stocks";
import { StockListItem } from "../StockListItem";

interface StockListProps {
  label?: string;
}

export const StockList: React.FC<StockListProps> = ({ label }) => {
  const { pending, error, stockList } = useSelector(getFetchedStocks);

  return (
    <>
      {label && <Text mb={1}>{label}</Text>}
      {pending ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : stockList.length !== 0 ? (
        stockList.map((stock: Stock) => (
          <Box
            key={stock["1. symbol"]}
            borderWidth="1px"
            borderRadius="sm"
            borderColor="gray.600"
            padding={2}
          >
            <StockListItem stock={stock} />
          </Box>
        ))
      ) : (
        <Text>No results</Text>
      )}
    </>
  );
};
