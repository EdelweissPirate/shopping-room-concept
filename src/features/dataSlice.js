import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dataService from './dataService'

const initialState = {
    activeRoom: null,
    activeViewer: null,
    activeItem: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Set room
export const setRoom = createAsyncThunk(
    'data/setRoom', 
    async (arg, thunkAPI) => {
        try {
            return await dataService.setRoom(arg)
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
        
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Set viewer
export const setViewer = createAsyncThunk(
    'data/setViewer', 
    async (arg, thunkAPI) => {
        try {
            return await dataService.setViewer(arg)
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
        
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Set active item
export const setItem = createAsyncThunk(
    'data/setItem', 
    async (arg, thunkAPI) => {
        try {
            return await dataService.setItem(arg)
        } catch (error) {
            const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
        
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            //
            .addCase(setRoom.pending, (state) => {
                state.isLoading = true
            })
            .addCase(setRoom.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activeRoom = action.payload
            })
            .addCase(setRoom.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //
            .addCase(setViewer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(setViewer.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activeViewer = action.payload
            })
            .addCase(setViewer.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            //
            .addCase(setItem.pending, (state) => {
                state.isLoading = true
            })
            .addCase(setItem.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.activeItem = action.payload
            })
            .addCase(setItem.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }   
})

export const { reset } = dataSlice.actions
export default dataSlice.reducer