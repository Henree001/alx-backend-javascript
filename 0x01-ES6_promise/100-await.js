import { uploadPhoto, createUser } from '../utils';

export default async function asyncUploadUser() {
  let arr;
  try {
    const result = await Promise.all([uploadPhoto(),
      createUser()]);
    arr = {
      photo: result[0],
      user: result[1],
    };
  } catch (err) {
    arr = {
      photo: null,
      user: null,
    };
  }
  return arr;
}
