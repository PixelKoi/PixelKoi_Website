import { SET_COPYWRITE, SET_AUTHOR, SET_IMAGE } from '../constants';



export const setImage = (img: any) => ({
	type: SET_IMAGE,
	payload: img
});

export const setAuthor = (text: string) => ({
	type: SET_AUTHOR,
	payload: text
});

export const setCopywrite = (text: string) => ({
	type: SET_COPYWRITE,
	payload: text
});
