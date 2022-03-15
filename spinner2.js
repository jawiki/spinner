const spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

for (let i = 0; i < spins.length; i += 1) {
  setTimeout(()=>{
    process.stdout.write(spins[i]);
  }, i * 150);
}