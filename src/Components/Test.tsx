import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
const Test = () => {
  const [num, changeNum] = useState(0);
  return (
    <div>
      <h1> Number : {num}</h1>
      <Button onClick={() => changeNum(num + 1)}>Test-State</Button>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
};

export default Test;
