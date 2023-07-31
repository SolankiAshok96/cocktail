import { configureStore } from "@reduxjs/toolkit";

import cocktailSlice  from "./features/coktailSlice";

export default configureStore({
     reducer:{
         app: cocktailSlice
     }
})