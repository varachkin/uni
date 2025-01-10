import { createSlice } from "@reduxjs/toolkit";
import { IactionGlobalStateConfigurationMachine } from "../../interfaces";

const initialState: IactionGlobalStateConfigurationMachine = {
  isMobileDevice: true,
  language: "pl",
  // serial: null,
  serial: 'EXA01-01-01',
  hasCart: false,
  emailConfirmation: true,
  isCheckingTechBreak: false,
  technical_break: false,
  devMode: false,
  QRCodeMode: true,
  animatedQR: true,
  employeeMode: true,
  mobileAppMode: false,
  discountCodeMode: true,
  discountCodeValue: "",
  terminal_preauthorization_payment: true,
  checkTechnicalBreakTimeout: 30000,
  clientTimeoutIdle: 3 * 10 * 1000,
  qrTimeoutIdle: 6 * 10 * 1000,
  terminalTimeoutIdle: 6 * 10 * 1000,
  serviceTimeoutIdle: 4 * 60 * 1000,
  // languages: ['pl', 'en', 'de', 'fr', 'esp', 'be', 'ua', 'ita' ],
    languages: ['pl', 'en'],
  currency: 'zł',
  swiperSettings: {
    effect: 'cube',
    loop: false,
    cardsPerSlide: 4,
  }
};
export const configurationSlice = createSlice({
  name: "configuration",
  initialState: initialState,
  reducers: {
    changeLanguage: (state, actions) => {
      state.language = actions.payload;
    },
    setSerialOfMachine: (state, actions) => {
      state.serial = actions.payload;
    },
    changeCartMode: (state) => {
      state.hasCart = !state.hasCart;
    },
    changeEmailConfirmationMode: (state) => {
      state.emailConfirmation = !state.emailConfirmation;
    },
    changeDevMode: (state) => {
      state.devMode = !state.devMode;
    },
    changeEmployeeMode: (state) => {
      state.employeeMode = !state.employeeMode;
    },
    changePreAuthorizationTerminal: (state) => {
      state.terminal_preauthorization_payment =
        !state.terminal_preauthorization_payment;
    },
    changeQRCodeMode: (state) => {
      state.QRCodeMode = !state.QRCodeMode;
    },
    changeDiscountCodeMode: (state) => {
      state.discountCodeMode = !state.discountCodeMode;
    },
    setDiscountCodeValue: (state, actions) => {
      state.discountCodeValue = actions.payload;
    },
    changeMobileAppMode: (state) => {
      state.mobileAppMode = !state.mobileAppMode;
    },
    setTechBreak: (state, actions) => {
      state.technical_break = actions.payload;
    },
    setCheckingTechnicalBreak: (state, actions) => {
      state.isCheckingTechBreak = actions.payload;
    },
    changeSwiperEffect: (state, actions) => {
      state.swiperSettings.effect = actions.payload;
    },
    changeSwiperLoop: (state) => {
      state.swiperSettings.loop = !state.swiperSettings.loop;
    },
    incrementSwiperProductsPerSlide: (state) => {
      state.swiperSettings.cardsPerSlide = state.swiperSettings.cardsPerSlide < 4 ? state.swiperSettings.cardsPerSlide + 1 : state.swiperSettings.cardsPerSlide;
    },
    decrementSwiperProductsPerSlide: (state) => {
      state.swiperSettings.cardsPerSlide = state.swiperSettings.cardsPerSlide > 1 ? state.swiperSettings.cardsPerSlide - 1 : state.swiperSettings.cardsPerSlide;
    },
    changeAnimatedQR: (state) => {
      state.animatedQR = !state.animatedQR;
    },
  },
});

export const {
  changeLanguage,
  setSerialOfMachine,
  changeCartMode,
  changeEmailConfirmationMode,
  changeDevMode,
  setTechBreak,
  setCheckingTechnicalBreak,
  changeQRCodeMode,
  changeMobileAppMode,
  changeEmployeeMode,
  changePreAuthorizationTerminal,
  changeDiscountCodeMode,
  setDiscountCodeValue,
  changeSwiperEffect,
  changeSwiperLoop,
  incrementSwiperProductsPerSlide,
  decrementSwiperProductsPerSlide,
  changeAnimatedQR
} = configurationSlice.actions;
export default configurationSlice.reducer;
