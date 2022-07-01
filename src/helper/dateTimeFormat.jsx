export const dateTimeFormatter = (rawDate) => {
  // let check = rawDate?.replace(" ", "T");
  // let wow = new Date(Date.parse(rawDate));
  let wow = new Date();

  const day = wow.getDate();
  const month = wow.getMonth();
  console.log(month)

  const year = wow.getFullYear();
  let stringedMonth;

  switch (month) {
    case 0:
      stringedMonth = "Jan";
      break;
    case 1:
      stringedMonth = "Feb";
      break;
    case 2:
      stringedMonth = "Mar";
      break;
    case 3:
      stringedMonth = "Apr";
      break;
    case 4:
      stringedMonth = "May";
      break;
    case 5:
      stringedMonth = "Jun";
      break;
    case 6:
      stringedMonth = "Jul";
      break;
    case 7:
      stringedMonth = "Aug";
      break;
    case 8:
      stringedMonth = "Sep";
      break;
    case 9:
      stringedMonth = "Oct";
      break;
    case 10:
      stringedMonth = "Nov";
      break;
    case 11:
      stringedMonth = "Dec";
      break;
    default:
      stringedMonth = "";
  }

  let time = wow.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    formatedDay: checkDate(day),
    formatedMonth: stringedMonth,
    formattedYear: year,
    formattedTime: time,
  };
};

export const setTime = (i) => {
  const { formatedDay, formatedMonth, formattedYear } = dateTimeFormatter(i);
  return `${formatedMonth} ${formatedDay}, ${formattedYear}`;
};

const checkDate = (date) => {
  let stringDate = date.toString();
  if (stringDate.slice(-1) === "1") {
    return `${date}st`;
  } else if (stringDate.slice(-1) === "2") {
    return `${date}nd`;
  } else if (stringDate.slice(-1) === "3") {
    return `${date}rd`;
  } else if (stringDate ==="11"){
     return `${date}th`;
  }else {
    return `${date}th`;
  }
};

export const FulldateTimeFormatter = (rawDate) => {
  let check = rawDate?.replace(" ", "T");
  let wow = new Date(Date.parse(check));

  const day = wow.getDay();
  const month = wow.getMonth();
  const year = wow.getFullYear();
  let stringedMonth;

  switch (month) {
    case 1:
      stringedMonth = "January";
      break;
    case 2:
      stringedMonth = "February";
      break;
    case 3:
      stringedMonth = "March";
      break;
    case 4:
      stringedMonth = "April";
      break;
    case 5:
      stringedMonth = "May";
      break;
    case 6:
      stringedMonth = "June";
      break;
    case 7:
      stringedMonth = "July";
      break;
    case 8:
      stringedMonth = "August";
      break;
    case 9:
      stringedMonth = "September";
      break;
    case 10:
      stringedMonth = "October";
      break;
    case 11:
      stringedMonth = "November";
      break;
    case 12:
      stringedMonth = "December";
      break;
    default:
      stringedMonth = "";
  }

  let time = wow.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    formatedDay: checkDate(day),
    formatedMonth: stringedMonth,
    formattedYear: year,
    formattedTime: time,
  };
};

export const FullsetTime = (i) => {
  const { formatedDay, formatedMonth, formattedYear } = dateTimeFormatter(i);
  return `${formatedMonth} ${formatedDay}, ${formattedYear}`;
};

// export const getArrOfYears = (startYear:any) =>{
// const currentYear = new Date().getFullYear();
// const range = (start:any) =>
//   Array.from({ length: (2022 - start) / step + 1 }, (_, i) => start + i * step);

// }



export const complexDateTimeFormatter = (rawDate) => {
  let check = rawDate?.replace(" ", "T");
  let wow = new Date(Date.parse(rawDate));


  const day = wow.getDate();
  const month = wow.getMonth();
  console.log(month)

  const year = wow.getFullYear();
  let stringedMonth;

  switch (month) {
    case 0:
      stringedMonth = "Jan";
      break;
    case 1:
      stringedMonth = "Feb";
      break;
    case 2:
      stringedMonth = "Mar";
      break;
    case 3:
      stringedMonth = "Apr";
      break;
    case 4:
      stringedMonth = "May";
      break;
    case 5:
      stringedMonth = "Jun";
      break;
    case 6:
      stringedMonth = "Jul";
      break;
    case 7:
      stringedMonth = "Aug";
      break;
    case 8:
      stringedMonth = "Sep";
      break;
    case 9:
      stringedMonth = "Oct";
      break;
    case 10:
      stringedMonth = "Nov";
      break;
    case 11:
      stringedMonth = "Dec";
      break;
    default:
      stringedMonth = "";
  }

  let time = wow.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return {
    formatedDay: checkDate(day),
    formatedMonth: stringedMonth,
    formattedYear: year,
    formattedTime: time,
  };
};