function uniqueArray(arrOfObjects = [], identifier) {
  const uniqueArray = arrOfObjects.filter((item, index, self) => {
    return index === self.findIndex(t => t[identifier] === item[identifier]);
  });
  return uniqueArray;
}
function dataMining(newData, oldData, resultData = []) {
  if (oldData.length < 1) {
    return newData;
  }
  for (const oldIndex in oldData) {
    let isOldValid = true;
    for (const newIndex in newData) {
      if (newData[newIndex].name === oldData[oldIndex].name) {
        isOldValid = false;
        newData[newIndex].priceUpdated = true;
        newData[newIndex].priceRaised =
          newData[newIndex].price > oldData[oldIndex].price ? true : false;
        newData[newIndex].last_updated_at = Date.now();
        resultData.push(newData[newIndex]);
        newData.splice(newIndex, 1);
        break;
      }
    }
    if (isOldValid) {
      oldData[oldIndex].priceUpdated = false;
      resultData.push(oldData[oldIndex]);
    }
  }
  resultData.push(...newData);
  return resultData;
}
function timeSince(date = Date.now()) {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export { uniqueArray, dataMining, timeSince };
