import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    blogs: [],
    blogData: {},
};

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload.blogs;
        },
        setIndividualBlog: (state, action) => {
            state.blogData = action.payload.blog;
        },
    } ,
});

export const {setBlogs, setIndividualBlog} = blogSlice.actions;

export const AllBlogs = state => state.blog.blogs;
export const BlogData = state => state.blog.blogData;

export default blogSlice.reducer;