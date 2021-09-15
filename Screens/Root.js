import React from "react";
import { Stack } from "native-base";
import Home from "./Home";

function Root() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  };
  export default Root;