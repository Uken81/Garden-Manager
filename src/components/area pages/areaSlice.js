// import { createSlice } from '@reduxjs/toolkit';
// import store from '../../redux/store';

// export const areaSlice = createSlice({
//   name: 'area',
//   initialState: {
//     value: ''
//   },
//   reducers: {
//     addArea: (state, action) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value = action.payload;
//     }
//   }
// });

// console.log(areaSlice.actions.addArea());
// const newArea = areaSlice.reducer({ value: 'bad' }, areaSlice.actions.addArea());
// console.log('newArea: ', newArea);

// // const addArea = () => {
// //   return {
// //     type: 'addArea/addArea'
// //   };
// // };

// // export const addNewArea = areaSlice.actions;
// // export const selectArea = (state) => state.area.value;
// // console.log(selectArea);
// // console.log(addNewArea);

// const areaRed = areaSlice.reducer;

// export default areaRed;

// console.log('actions: ', areaSlice.actions);
