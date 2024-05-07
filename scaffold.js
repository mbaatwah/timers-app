const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

const directoryStructure = {
  components: {
    Timer: ['Timer.jsx', 'TimerControls.jsx', 'TimerDisplay.jsx'],
    Pomodoro: ['PomodoroTimer.jsx', 'BreakTimer.jsx'],
    Countdown: ['CountdownTimer.jsx'],
    Stopwatch: ['Stopwatch.jsx'],
    Notifications: ['NotificationManager.js', 'NotificationSound.js'],
    Settings: ['SettingsModal.jsx', 'SettingsProvider.js'],
  },
  screens: ['HomeScreen.jsx', 'PomodoroScreen.jsx', 'CountdownScreen.jsx', 'StopwatchScreen.jsx', 'SettingsScreen.jsx'],
  hooks: ['useTimer.js', { tests: ['useTimer.test.js'] }],
  utils: ['formatTime.js', 'constants.js', { tests: ['formatTime.test.js'] }],
  navigation: ['AppNavigator.js', { tests: ['AppNavigator.test.js'] }],
  __tests__: {
    components: {
      Timer: ['Timer.test.jsx', 'TimerControls.test.jsx', 'TimerDisplay.test.jsx'],
      Pomodoro: ['PomodoroTimer.test.jsx', 'BreakTimer.test.jsx'],
      Countdown: ['CountdownTimer.test.jsx'],
      Stopwatch: ['Stopwatch.test.jsx'],
      Notifications: ['NotificationManager.test.js', 'NotificationSound.test.js'],
      Settings: ['SettingsModal.test.jsx', 'SettingsProvider.test.js'],
    },
    screens: ['HomeScreen.test.jsx', 'PomodoroScreen.test.jsx', 'CountdownScreen.test.jsx', 'StopwatchScreen.test.jsx', 'SettingsScreen.test.jsx'],
  },
};

function createDirectories(dirPath, structure) {
  Object.keys(structure).forEach((key) => {
    const currentPath = path.join(dirPath, key);
    fs.mkdirSync(currentPath, { recursive: true });

    const value = structure[key];
    if (Array.isArray(value)) {
      value.forEach((file) => {
        fs.writeFileSync(path.join(currentPath, file), '');
      });
    } else if (typeof value === 'object') {
      createDirectories(currentPath, value);
    }
  });
}

// Create the src directory
fs.mkdirSync(srcDir, { recursive: true });

// Create the project structure
createDirectories(srcDir, directoryStructure);

console.log('Project structure scaffolded successfully!');