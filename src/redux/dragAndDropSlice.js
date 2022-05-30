import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    draggable: false,
    dragElement: "",
    dropElements: [ 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 1, 0, 0,
                    0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0,
                  ],
    lastDropedIndex: -1
};

export const dragAndDropSlice = createSlice({
    name: "dragAndDropSlice",
    initialState,
    reducers: {
        dragStart: (state, action) => {
            return {
                draggable: true,
                dragElement: action.payload
            }
        },

        /*drop: (state ,action)=>{
            
        },*/

        dragEnd: (state) => {
            return {
                dragElement: ""
            }
        }
    }
});

export const {
    dragStart,
    drop,
    dragEnd
} = dragAndDropSlice.actions;

export const draggableSelector = state => state.dragAndDropSlice.draggable;
export const dragElementSelector = state => state.dragAndDropSlice.dragElement;



export default dragAndDropSlice.reducer;