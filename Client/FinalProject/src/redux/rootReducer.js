import axios from "axios";

export const initialMovieState = {
  movies: [],
};
export const initialMemberState = {
  members: [],
};
export const initialSubsState = {
  subs: [],
};

const loadAllData = async () => {
  try {
    const moviesResponse = await axios.get("http://localhost:3000/movies");
    const membersResponse = await axios.get("http://localhost:3000/members");
    const subsResponse = await axios.get("http://localhost:3000/subs");

    initialMovieState.movies = moviesResponse.data;
    initialMemberState.members = membersResponse.data;
    initialSubsState.subs = subsResponse.data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
};


loadAllData();

// Movies Reducer
export const moviesReducer = (state = initialMovieState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "LOAD_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "DEL_MOVIE": {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.reduxMovieID !== action.payload),
      };
    }
    case "UPDATE_MOVIE":
      return {
        ...state,
        movies: state.movies.map((movie) => (movie.reduxMovieID === action.payload.reduxMovieID ? { ...movie, ...action.payload } : movie)),
      };
    default:
      return state;
  }
};

// Members Reducer
export const membersReducer = (state = initialMemberState, action) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case "LOAD_MEMBERS":
      return {
        ...state,
        members: action.payload,
      };
    case "DEL_MEMBER": {
      console.log(action.payload);
      return {
        ...state,
        members: state.members.filter((member) => member.reduxMemberID !== action.payload),
      };
    }
    case "UPDATE_MEMBER":
      return {
        ...state,
        members: state.members.map((member) => (member.reduxMemberID === action.payload.reduxMemberID ? { ...member, ...action.payload } : member)),
      };
    default:
      return state;
  }
};

// Subs Reducer
export const subsReducer = (state = initialSubsState, action) => {
  switch (action.type) {
    case "ADD_SUB":
      return {
        ...state,
        subs: [...state.subs, action.payload],
      };
    case "LOAD_SUBS":
      return {
        ...state,
        subs: action.payload,
      };
    case "DEL_SUB":
      return {
        ...state,
        subs: state.subs.filter((sub) => sub.id !== action.payload.id),
      };
    case "UPDATE_SUB":
      return {
        ...state,
        subs: state.subs.map((sub) => (sub.id === action.payload.id ? { ...sub, ...action.payload } : sub)),
      };
    default:
      return state;
  }
};
