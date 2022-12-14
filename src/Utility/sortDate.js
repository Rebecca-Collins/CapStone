function sortByDate(comments) {
    return comments.sort((a, b) => {
      // Compare the timestamps of the comments
      if (a.timestamp < b.timestamp) {
        return -1;
      } else if (a.timestamp > b.timestamp) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  