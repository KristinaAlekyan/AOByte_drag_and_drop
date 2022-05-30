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
    lastDropedIndex: -1,
    modalIsOpen: false
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
        dragEnd: (state) => {
            return {
                dragElement: ""
            }
        },
        openModal: (state) =>{
            return {
                modalIsOpen: true
            }
        }
    }
});

export const {
    dragStart,
    drop,
    dragEnd,
    openModal
} = dragAndDropSlice.actions;

export const draggableSelector = state => state.dragAndDropSlice.draggable;
export const dragElementSelector = state => state.dragAndDropSlice.dragElement;
export const modalIsOpenSelector = state => state.dragAndDropSlice.modalIsOpen;

export default dragAndDropSlice.reducer;