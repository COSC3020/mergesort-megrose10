function mergesort(array) {
  //iterative - cannot be recursive
  //in-place - cannot use temp-arrays
  //starting this sort, we assume we are at the step of all elements are in "single element arrays", which allows us to not need recursion in separating array into temp arrays

  
  /*let lo = 0;
  let hi = array.length - 1;
  if(lo >= hi) {
    return array;
  }
  while(lo < hi) {
    let mid = Math.floor((hi+lo)/2);
    let a = lo, b = mid + 1;
    for(let i = lo; i <= hi; i++) {
    if(a <= mid && (b > hi || array[a] < array[b])) {
      let tmp = array[a++];
      array[i] = tmp;
    } 
    else {
      let tmp = array[b++];
      array[i] = tmp;
    }
  
    for(let i = lo; i <= hi; i++) {
      array[i] = tmp[k];
    }
  }

  }*/
    return array;
}

//array = [3, 1, 2, 4];
//console.log(mergesort(array));
