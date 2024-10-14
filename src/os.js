import os from 'os';

export const getEOL = () => {
  return os.EOL;
}

export const getCpus = () => {
  const cpus = os.cpus();
  console.log(`Total CPUs: ${cpus.length}`);
  cpus.map((cpu, index) => {
    console.log(`${index+1}: ${cpu.model}, ${(cpu.speed / 1000).toFixed(2)} GHz`);
  })
}

export const getHomedir = () => {
  return os.homedir();
}

export const getUsername = () => {
  return os.userInfo().username;
}

export const getArchitecture = () => {
  return os.arch();
}
