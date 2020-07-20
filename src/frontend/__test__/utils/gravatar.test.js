import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'hrramegan@gmail.com';
  const gravatarUrl = 'https://gravatar.com/avatar/bc7214bbd5a3a1840f3a8a8954ad8482';

  expect(gravatarUrl).toEqual(gravatar(email));
});