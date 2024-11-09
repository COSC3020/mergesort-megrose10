function mergesort(array) {
  
  let lo = 0;
  let hi = array.length - 1;
  if(lo>=hi) {
    return array;
  }
  while(lo<hi) {
    let mid = Math.floor((hi+lo)/2);
    hi = mid;
  }
  
    return array;
}
