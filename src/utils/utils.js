// DATE FORMATTING
const formatDate = inputSecs => {
  const timeToStrings = (time, ind) => {
    let tempStr = '';
    if (time === 0) {
      return tempStr;
    }
    tempStr += time;
    if (ind === 0) tempStr += ' year';
    if (ind === 1) tempStr += ' day';
    if (ind === 2) tempStr += ' hour';
    if (ind === 3) tempStr += ' minute';
    if (ind === 4) tempStr += ' second';

    if (time > 1) tempStr += 's';
    return tempStr;
  };
  if (inputSecs === undefined || inputSecs === 0) return '0 seconds';
  // array - years, days, hours, mins, secs
  const timeArr = [0, 0, 0, 0, 0];
  // YEARS
  timeArr[0] += Math.floor(inputSecs / 31536000);
  inputSecs = inputSecs % 31536000;
  // DAYS
  timeArr[1] += Math.floor(inputSecs / 86400);
  inputSecs = inputSecs % 86400;
  // HOURS
  timeArr[2] += Math.floor(inputSecs / 3600);
  inputSecs = inputSecs % 3600;
  // MINUTES
  timeArr[3] += Math.floor(inputSecs / 60);
  inputSecs = inputSecs % 60;
  // SECONDS
  timeArr[4] += inputSecs;

  const timeStrings = timeArr.map(timeToStrings).filter(el => el !== '');

  if (timeStrings.length === 1) return timeStrings[0];

  let finalString = '';
  for (let i = 0; i < timeStrings.length - 2; i++) {
    finalString += timeStrings[i] + ', ';
  }
  return `${finalString}${timeStrings[timeStrings.length - 2]} and ${
    timeStrings[timeStrings.length - 1]
  }`;
};

// ARTICLES

export const formatArticles = articlesArr => {
  const formattedArticles = articlesArr.map(articleObj => {
    const { created_at } = articleObj;
    const postTimeDifference = formatDate(
      Math.floor((Date.now() - Date.parse(created_at)) / 1000)
    );
    articleObj.postTimeDifference = postTimeDifference;
    return articleObj;
  });
  return formattedArticles;
};
