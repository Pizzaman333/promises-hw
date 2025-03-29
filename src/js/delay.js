const delay = ms => {
    return new Promise((resolve, reject) => {
        const interval = setInterval(timerCount, ms);
        let count = 0;
        function timerCount() {
            count++
            if (count >= ms / 1000) {
                clearInterval(interval);
                resolve(ms);
            }
        }
    })
  };

  const logger = time => console.log(`Resolved after ${time}ms`);

  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms    