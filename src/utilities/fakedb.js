const addToLocalStorage = (time) => {
  const breakTime = getStoredBreakTime();

  localStorage.setItem('breakTime', time);
};

const getStoredBreakTime = () => {
  let breakTime = 0;

  //* get breakTime from localStorage
  const storedBreakTime = localStorage.getItem('breakTime');
  if (storedBreakTime) {
    breakTime = JSON.parse(storedBreakTime);
  }
  return breakTime;
};

export { addToLocalStorage, getStoredBreakTime };
