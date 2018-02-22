const toggleJars = (jars, skip) => {
  jars.forEach((jar, index)=>{
    if ((index+1)%skip === 0) {
      jars[index] = !jar;
    }
  })
}

const honeyJar = () => {
  let honeyJars = new Array(100).fill(false);

  for (let i = 0; i < 100; i++) {
    toggleJars(honeyJars, i+1);
  }

  return honeyJars;
}

module.exports = honeyJar;

console.log(honeyJar());
