import i18n from "@/i18n";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  currentLang: string;
}

const initialState: LanguageState = {
  currentLang: "zh",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLang = action.payload;
      i18n.changeLanguage(action.payload); // 切換語言
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
