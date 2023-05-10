import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { URL } from "../../helpers/url_helper";


const initialState={
    //This is related to information data
    userInfo: {
        name:""
    },
    token: "",
    //This is related to status
    loading:false,
    success: false,
    error: false,
    errorMsg:""
  }
export const userSignUp = createAsyncThunk(
  "sign-up",
  async(options)=>{
    const res = await fetch(`${URL}/api/auth/local/register`, options)
    const data = await res.json()
    //console.log("data------->", data)
    return data
  }
)
export const login = createAsyncThunk(
  "auth/login",
  async(payload)=>{
    let options = {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
    
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(payload), // body data type must match "Content-Type" header
    }
    const res = await fetch(`${URL}/api/auth/local`, options)
    const data = await res.json()
    localStorage.setItem("jwt_token",data.jwt)
    console.log("data------->", data)
    //return data
  }
)


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateToken : (state, action)=>{
      console.log("action.payload------>", action.payload)
      state.token = action.payload
    },
    userLogout:(state)=>{
      localStorage.clear()
      state.token = ""
    }
  },
  extraReducers: (builder)=>{
    builder
    .addCase(userSignUp.pending, (state, action)=>{
      console.log("Pending----->", action.payload)
      state.loading = true
    })
    .addCase(userSignUp.fulfilled, (state, action)=>{
      console.log("action.payload----->", action.payload)
      if(action.payload.data !== null){
        state.loading=false;
        state.success = true;
        state.error = false;
        state.errorMsg = "";
      }
      else{
        state.loading=false;
        state.success = false;
        state.error = true;
        state.errorMsg = action.payload.error.message
      }
    })
    .addCase(userSignUp.rejected, (state, action)=>{
      state.error = true;

    });
  builder
    .addCase(login.pending, (state, action)=>{
      console.log("Pending----->", action.payload)
      state.loading = true
    })
    .addCase(login.fulfilled, (state, action)=>{
      console.log("action.payload----->", action.payload)
      if(action.payload.data !== null){
        state.loading=false;
        state.success = true;
        state.error = false;
        state.errorMsg = "";
      }
      else{
        state.loading=false;
        state.success = false;
        state.error = true;
        state.errorMsg = action.payload.error.message
      }
    })
    .addCase(login.rejected, (state, action)=>{
      state.error = true;

    })
  },
});
//export const selectUserInfo=(state)=>state.auth

export const {updateToken, userLogout} = authSlice.actions
 

export default authSlice.reducer;