import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchClima } from "../helper/pronosticoData";

const dataPronostico = createAsyncThunk(
  'pronostico/dataPronostico',
  async (ciudad, { rejectWithValue }) => {
    try {
      if (ciudad !== "") {
        const response = await fetchClima(ciudad);
        return response;
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pronosticoSlice = createSlice({
  name: "pronostico",
  initialState: {
    ciudad: '',
    data: null,
    error: null,
    status: 'idle'
  },
  reducers: {
    setCiudadE: (state, action) => {
      state.ciudad = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataPronostico.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(dataPronostico.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(dataPronostico.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { setCiudadE } = pronosticoSlice.actions;
export { dataPronostico };
export default pronosticoSlice.reducer;