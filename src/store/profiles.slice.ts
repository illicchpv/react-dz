import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { loadState } from './storage'
import type { AppRootState } from './store'

export const PROFILES_PERSISTENT_STATE = 'profilesData'

export interface IProfileItem {
  name: string
  isLogined: boolean
}

export interface IProfilesState {
  profiles: IProfileItem[]
}

const initialState: IProfilesState = loadState<IProfilesState>(PROFILES_PERSISTENT_STATE) ?? {
  profiles: []
}

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<string>) => {
      state.profiles?.forEach(profile => profile.isLogined = false);
      const profile = state.profiles.find(profile => profile.name === action.payload);
      if (profile) {
        profile.isLogined = true;
      } else {
        state.profiles.push({ name: action.payload, isLogined: true });
      }
    },
    logoutAction: (state) => {
      state.profiles.forEach(profile => profile.isLogined = false);
    },
  }
})

export default profilesSlice.reducer
export const profilesActions = profilesSlice.actions

export const selectProfiles = (state: AppRootState) => state.profiles.profiles;
export const currentSelectedProfile = (state: AppRootState) => state.profiles.profiles.find(profile => profile.isLogined);


// usage:
// const profilesItems = useSelector(selectProfiles);
// const currentProfile = useSelector(currentSelectedProfile);
// const dispatch = useDispatch<AppDispatch>();
// dispatch(profilesActions.logoutAction());
// dispatch(profilesActions.loginAction(name));