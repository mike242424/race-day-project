let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;

let runnerAge = 34;

if (runnerAge >= 18 && earlyRegistration === true) {
  raceNumber += 1000;
}

if (runnerAge >= 18 && earlyRegistration === true) {
  console.log(`Racer #${raceNumber}, the race starts at 9:30 am.`);
} else if (runnerAge >= 18 && earlyRegistration === false) {
  console.log(`Racer #${raceNumber}, the race starts at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Racer #${raceNumber}, the race starts at 12:30 pm.`);
}
