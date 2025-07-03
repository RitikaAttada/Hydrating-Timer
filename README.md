# Hydrating Timer
#### A simple web countdown timer that reminds you to drink water by playing an alarm sound and showing an alert. Built using **HTML**, **CSS**, and **JavaScript**.

> ![image](https://github.com/user-attachments/assets/9d87bfed-a835-45a0-b1af-f4c28e25ec08)


### 💡 Features

* Countdown timer with hours, minutes, and seconds
* Start, Stop, and Resume controls
* Plays alarm sound 4 times in a row when timer reaches zero
* Visual button style changes on start/stop
* Alerts user to drink water when timer ends

### 🛠️ Tech Stack

* **HTML** – page structure
* **CSS** – styling and layout
* **JavaScript** – timer logic, event handling, audio playback

### 🚀 How to Use

1. Clone this repo:

   ```bash
   git clone https://github.com/yourusername/drink-water-reminder.git
   ```
2. Place your `alarm_sound.wav` file in the project folder (same directory as your HTML).
3. Open `index.html` in your browser.
4. Set the timer (hh\:mm\:ss) in the UI (modify HTML or implement input if you want).
5. Click **Start** to begin countdown.
6. When timer ends, alarm plays 4 times and alert pops up.
7. Use **Stop** to pause and **Resume** to continue.

### 📚 What I Learned

* Implementing countdown timers in JavaScript
* Handling button events and UI updates dynamically
* Playing audio programmatically with the `Audio` API
* Controlling interval timers (`setInterval`, `clearInterval`)
* Formatting time strings with `padStart`
