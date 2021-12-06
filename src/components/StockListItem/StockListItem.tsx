import { Flex, IconButton, Text } from "@chakra-ui/react";
import { BsPlusSquare } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addStockToPortfolio } from "../../state/stocks/stocks.actionCreators";
import { Stock } from "../../types/stocks";

interface StockListItemProps {
  stock: Stock;
}

export const StockListItem: React.FC<StockListItemProps> = ({ stock }) => {
  const dispatch = useDispatch();

  const addToPortfolio = () => {
    dispatch(addStockToPortfolio(stock));
  };

  return (
    <Flex
      justifyContent="space-between"
      _notLast={{
        marginBottom: 2,
      }}
    >
      <Text>{`${stock["1. symbol"]} - ${stock["2. name"]}`}</Text>
      <IconButton
        onClick={addToPortfolio}
        aria-label="Add to portfolio"
        icon={<BsPlusSquare />}
        fontSize="3xl"
        color="gray.700"
        variant="link"
        _hover={{ color: "gray.500" }}
        _active={{ color: "gray.700" }}
      />
    </Flex>
  );
};
