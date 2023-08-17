import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let arr;
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    arr = {
      photo,
      user,
    };
  } catch (err) {
    arr = {
      photo: null,
      user: null,
    };
  }
  return arr;
}
