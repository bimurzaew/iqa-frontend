import { configureStore } from '@reduxjs/toolkit';
import profile from '../features/profile/profileSlice';
import questions from '../features/questions/questionsSlice';
import tags from '../features/tags/tagsSlice';
import comments from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    profile,
    questions,
    tags,
    comments,
  },
});
