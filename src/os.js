import os from 'os';

export const getEOL = () => {
  return os.EOL;
}

export const getCpus = () => {
  const cpus = os.cpus();
  const totalCPUs = cpus.length;
  const cpuDetails = cpus.map((cpu, index) => {
    return `CPU ${index + 1}: Model - ${cpu.model}, Speed - ${(cpu.speed / 1000).toFixed(2)} GHz`;
  }).join('\n');
  return `Total CPUs: ${totalCPUs}\n${cpuDetails}`;
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
