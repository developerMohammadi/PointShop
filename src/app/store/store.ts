import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

// ذخیره استیت در localStorage
function saveStateToLocalStorage(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("productState", serializedState);
  } catch (e) {
    console.error("Error saving state:", e);
  }
}


function loadStateFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("productState");
    if (serializedState === null) {
      return undefined; // اگر چیزی نبود، استیت پیش‌فرض استفاده شود
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state:", e);
    return undefined;
  }
}

const preloadedState = loadStateFromLocalStorage();

const store = configureStore({
  reducer: { product: productReducer },
  preloadedState: { product: preloadedState }, // مقدار پیش‌فرض استیت
});

// ثبت listener برای ذخیره استیت
store.subscribe(() => {
  saveStateToLocalStorage(store.getState().product);
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
