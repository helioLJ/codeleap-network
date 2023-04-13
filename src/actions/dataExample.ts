import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchInitialData = createAsyncThunk(
  'posts/fetchInitialData',
  async () => {
    const response = await axios.get('https://dev.codeleap.co.uk/careers/?format=json');
    return response.data.results;
  }
);