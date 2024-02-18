import { createAction, props } from "@ngrx/store";

export const updateCountry = createAction('[Demo Component] updateCountry', props<{ country: any }>())