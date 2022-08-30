export function removeEmptyValueObject(obj: any) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key] === 'object' && obj[key].length !== 0) {
      removeEmptyValueObject(obj[key]);
    }
    // recurse
    else if (obj[key] == null || obj[key] === '' || obj[key].length === 0)
      delete obj[key]; // delete
  });

  return obj;
};