import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCompanyDetailsRequest } from "../../state/companyDetails/companyDetails.actionCreators";
import { getCompanyDetails } from "../../state/companyDetails/companyDetails.selectors";
import { CompanyDetailSubtitle } from "./style";

export const CompanyDetails: React.FC = () => {
  const dispatch = useDispatch();
  const urlParams = useParams();
  const { pending, error, companyDetails } = useSelector(getCompanyDetails);

  useEffect(() => {
    dispatch(fetchCompanyDetailsRequest(urlParams.stockSymbol || ""));
  }, []);

  return (
    <Box padding={20}>
      <Link to="/">
        <Button variant="outline" border="1px solid" borderColor="gray.900">
          Go back
        </Button>
      </Link>
      {pending ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : Object.keys(companyDetails).length !== 0 ? (
        <>
          <Text
            marginTop={5}
            fontSize="5xl"
            fontWeight="semibold"
            color="gray.900"
          >
            {companyDetails.name}
          </Text>
          <Flex marginTop={2}>
            <CompanyDetailSubtitle>Address:</CompanyDetailSubtitle>
            <Text>{companyDetails.address}</Text>
          </Flex>
          <Flex>
            <CompanyDetailSubtitle>Market Cap</CompanyDetailSubtitle>
            <Text>{companyDetails.marketCap}</Text>
          </Flex>
          <Text marginTop={10}>{companyDetails.description}</Text>
        </>
      ) : (
        <Text>No results</Text>
      )}
    </Box>
  );
};
