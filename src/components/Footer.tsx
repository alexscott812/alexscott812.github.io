/** @jsxImportSource theme-ui */
import { Flex, Text } from "theme-ui";

const Footer = () => {
  return (
    <Flex as="footer" sx={{ justifyContent:'center' }} mb={6}>
      <Text as="p">Alex Scott • © 2022</Text>
    </Flex>
  );
};

export default Footer;