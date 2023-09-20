import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //? Varsayım:
      //? action.payload === { name: "abc", cost: 111}
      state.data.push({
        id: nanoid(), //! Rasgele sayılar alabilmek adına redux toolkitin bize sağladığı bir özellik. Yukarıda import ettik aynı zamanda
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action) {
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload; //? action.payload.id olması gerekmez miydi?
      });
      state.data = updatedCars;
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
