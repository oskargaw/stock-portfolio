import { Box, Flex } from "@chakra-ui/react";
import { Portfolio } from "../Portfolio";
import { SearchInput } from "../SearchInput";
import { StockList } from "../StockList";

export const Dashboard: React.FC = () => (
  <Flex
    flexDirection={["column", "column", "column", "row"]}
    justifyContent={["none", "none", "none", "space-around"]}
    alignItems={["center", "center", "center", "flex-start"]}
    padding={[0, 5, 10, 20]}
    marginTop={[5, 0]}
  >
    <Box width={["90%", "90%", "90%", "30%"]}>
      <Box marginBottom={7}>
        <SearchInput label="Company Name" />
      </Box>
      <StockList label="Search results" />
    </Box>
    <Box width={["90%", "90%", "90%", "50%"]} marginTop={[20, 20, 20, 0]}>
      <Portfolio />
    </Box>
  </Flex>
);
