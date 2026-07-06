// ponytail: no runtime validation that listed files exist in src/assets/digital/.
// A typo or deleted file sends that photo to the bottom of the grid silently.
// If photo count grows, generate this from the filesystem via a build-time glob.

// Wedding gallery photos live in src/assets/digital/. Array order is the
// display order; filenames are matched against the glob in PhotoGrid.astro.
export const digital: string[] = [
  'photo-24.jpg',
  'photo-3.jpg',
  'photo-5.jpg',
  'photo-8.jpg',
  'photo-9.jpg',
  'photo-29.jpg',
  'photo-10.jpg',
  'photo-11.jpg',
  'photo-1.jpg',
  'photo-16.jpg',
  'photo-23.jpg',
  'photo-25.jpg',
  'photo-26.jpg',
  'photo-27.jpg',
  'photo-28.jpg',
  'photo-13.jpg',
  'photo-12.jpg',
  'photo-2.jpg',
  'photo-14.jpg',
  'photo-17.jpg',
  'photo-15.jpg',
  'photo-7.jpg',
  'photo-18.jpg',
  'photo-20.jpg',
  'photo-22.jpg',
  'photo-6.jpg',
  'photo-19.jpg',
  'photo-21.jpg',
  'photo-4.jpg',
];
