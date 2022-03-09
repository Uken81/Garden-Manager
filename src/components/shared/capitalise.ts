const capitalise: Function = (str: string) => {
  if (typeof str === 'string') {
    return str.replace(/^\w/, (c) => c.toUpperCase());
  } else {
    return '';
  }
};

export default capitalise;
