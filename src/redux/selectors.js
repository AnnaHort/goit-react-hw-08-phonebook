export const getTasks = state => state.contacts.contacts;// весь зміст стейту

export const selectItems = state => state.contacts.contacts.items;// масив об'єктів з контактами та даними

export const selectIsLoading = state => state.contacts.contacts.isLoading;// стан завантаження

export const selectError = state => state.contacts.contacts.error;// стан помилки

export const selectFilter = state => state.contacts.filter;// стан фільтру