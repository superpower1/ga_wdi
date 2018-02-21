const dateConvert = num => {
  var ones = num % 10,
      tens = num % 100;

  if (ones == 1 && tens != 11) {
      return num + "st";
  }
  if (ones == 2 && tens != 12) {
      return num + "nd";
  }
  if (ones == 3 && tens != 13) {
      return num + "rd";
  }
  return num + "th";
}

const makeFriendlyDates = (dateRange) => {
  const begin = dateRange[0];
  const end = dateRange[1];

  const [beginYear, beginMonth, beginDate] = begin.split('-');
  const [endYear, endMonth, endDate] = end.split('-');

  const monthLookup = "Jan,Feb,Mar,Apr,May,June,July,Aug,Sep,Oct,Nov,Dec".split(',');

  const friendlyBeginMonth = monthLookup[Number(beginMonth)-1];
  const friendlyBeginDate = dateConvert(Number(beginDate));

  const friendlyEndMonth = monthLookup[Number(endMonth)-1];
  const friendlyEndDate = dateConvert(Number(endDate));

  let friendlyBegin = "";
  let friendlyEnd = "";

  const currentYear = (new Date()).getFullYear();

  if (currentYear == beginYear) {
    friendlyBegin += `${friendlyBeginMonth} ${friendlyBeginDate}`;
  } else {
    friendlyBegin += `${friendlyBeginMonth} ${friendlyBeginDate}, ${beginYear}`;
  }

  if (beginYear != endYear) {
    friendlyEnd += `${friendlyEndMonth} ${friendlyEndDate}, ${endYear}`;
  } else {
    if (beginMonth != endMonth) {
      friendlyEnd = `${friendlyEndMonth} ${friendlyEndDate}`
    } else {
      friendlyEnd = friendlyEndDate;
    }
  }

  return [friendlyBegin, friendlyEnd];

}

console.log(makeFriendlyDates(["2016-07-01", "2016-08-04"]));
console.log(makeFriendlyDates(["2016-07-01", "2018-07-04"]));
