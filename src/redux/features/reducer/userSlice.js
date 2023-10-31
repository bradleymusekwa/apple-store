import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      city: "Cape Town",
      country: "South Africa",
      name: "Junaid Alexandra",
      province: "Western Cape",
      streetname: "386 Loop Street",
    },
    {
      city: "Cape Town",
      country: "South Africa",
      name: "Junaid Alexander",
      province: "Western Cape",
      streetname: "386 Loop Street",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
