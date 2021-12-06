import { useEffect } from "react";
import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { fetchStocksRequest } from "../../state/stocks/stocks.actionCreators";

interface SearchInputProps {
  label?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ label }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    value !== "" && dispatch(fetchStocksRequest(value));
  }, [dispatch, value]);

  return (
    <>
      {label && <Text mb={1}>{label}</Text>}
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<FiSearch color="gray" />}
        />
        <Input
          type="text"
          placeholder="Example: Apple"
          borderColor="gray.600"
          borderRadius="3xl"
          value={value}
          onChange={handleChange}
          _hover={{
            borderColor: "gray.600",
          }}
          _focus={{
            borderColor: "gray.900",
          }}
        />
      </InputGroup>
    </>
  );
};
