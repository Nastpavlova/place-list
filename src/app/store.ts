import { configureStore } from '@reduxjs/toolkit';

// Создаем dummy reducer
const dummyReducer = (state = { value: 0 }) => state;

export const store = configureStore({
    reducer: {
        dummy: dummyReducer, // ✅ Теперь валидный reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;