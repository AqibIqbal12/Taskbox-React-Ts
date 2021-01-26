declare const tasksSlice: import("@reduxjs/toolkit").Slice<import("@bit/state/dist/stateType").TaskType[], {
    addTask: (state: import("immer/dist/internal").WritableDraft<import("@bit/state/dist/stateType").TaskType>[], action: {
        payload: any;
        type: string;
    }) => any[];
    removeTask: (state: import("immer/dist/internal").WritableDraft<import("@bit/state/dist/stateType").TaskType>[], action: {
        payload: any;
        type: string;
    }) => import("immer/dist/internal").WritableDraft<import("@bit/state/dist/stateType").TaskType>[];
}, "tasks">;
declare const store: import("@reduxjs/toolkit").EnhancedStore<import("@bit/state/dist/stateType").TaskType[], import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<import("@bit/state/dist/stateType").TaskType[], import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<import("@bit/state/dist/stateType").TaskType[], import("redux").AnyAction, undefined>]>;
export declare const addTask: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>, removeTask: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export { tasksSlice, store };
