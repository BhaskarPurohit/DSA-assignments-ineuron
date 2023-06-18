function sqrt(x) {
    if (x === 0 || x === 1) {
      return x;
    }
  
    let start = 1;
    let end = Math.floor(x / 2);
    let result = 0;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (mid * mid === x) {
        return mid;
      }
  
      if (mid * mid < x) {
        start = mid + 1;
        result = mid;
      } else {
        end = mid - 1;
      }
    }
  
    return result;
  }
  