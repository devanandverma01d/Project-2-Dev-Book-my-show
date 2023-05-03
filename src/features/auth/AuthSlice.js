import { createSlice} from "@reduxjs/toolkit";


const initialState={
    //This is related to information data
    userInfo: {
        name:"Devanand Verma"
    },
    token: "",
    //This is related to status
    loading:"",
    success: "",
    error: "",
  }
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
  },
  extraReducers: {
    
  },
});
export const selectUserInfo=(state)=>state.auth.userInfo.name 
 

export default authSlice.reducer;