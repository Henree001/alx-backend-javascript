import { uploadPhoto, createUser } from '../utils';

export default function handleProfileSignup() {
  return (Promise.all([uploadPhoto(), createUser()])
    .then(([Image, User]) => {
      console.log(`${Image.body} ${User.firstName} ${User.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    }));
}
