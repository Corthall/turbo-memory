/*
// FIXME: Script eats CPU and memory :/
*/

function turbo() {
  for(let i = 0; i < 100000; i++){
    console.log("MURMERY is now optimized");
    console.log("Memory now optimized");
  }
  return turbo();
}


turbo();
