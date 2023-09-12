import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav nav" "aside main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <Navbar></Navbar>
        </GridItem>
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
