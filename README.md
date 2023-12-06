# goit-js-hw-08

## Tasks

### 1. Task 1 SimpleLightbox library
   
Perform this task in files 01-gallery.html and 01-gallery.js. Break it down into several subtasks:
- Add the SimpleLightbox library as a project dependency using npm (the CDN link from your previous work is no longer needed).
- Use your JavaScript code from the previous homework, but refactor it to take into account that the library was installed via npm (import/export syntax).

In order to connect the CSS code of the library to the project, it is necessary to add one more import, in addition to the one described in the documentation.
```javascript
// Described in the documentation
import SimpleLightbox from "simplelightbox";
// Additional import of styles
import "simplelightbox/dist/simple-lightbox.min.css";
```

### 2. Task 2 Video player

The HTML contains an <iframe> with a video for the Vimeo player. Write a script that will save the current video playback time to local storage and, after reloading the page, continue playing the video from that time.
```javascript
<iframe
   id="vimeo-player"
   src="https://player.vimeo.com/video/236203659"
   width="640"
   height="360"
   frameborder="0"
   allowfullscreen
   allow="autoplay; encrypted-media"
></iframe>
```

Perform this task in the files 02-video.html and 02-video.js. Break it down into several subtasks:
- Check out the Vimeo player library documentation.
- Add the library as a project dependency via npm.
- Initialize the player in the script file as described in the pre-existing player section, but note that you have the player added as an npm package, not via CDN.
- Study the documentation of the on() method and start monitoring the timeupdate event - the playback time update.
- Save playback time to local storage. Let the key for the repository be the string "videoplayer-current-time".
- When reloading the page, use the setCurrentTime() method to resume playback from the saved position.
- Add the lodash.throttle library to the project and make the playback time update in the repository no more than once per second.
  
### 3. Task 3 Feedback form

HTML contains form markup. Write a script that will save field values to local storage when the user types something.

```html
<form class="feedback-form" autocomplete="off">
   <label>
     Email
     <input type="email" name="email" autofocus />
   </label>
   <label>
     Message
     <textarea name="message" rows="8"></textarea>
   </label>
   <button type="submit">Submit</button>
</form>
```

Perform this task in the files 03-feedback.html and 03-feedback.js. Break it down into several subtasks:
- Track the input event on the form, and each time write an object with the email and message fields to the local storage, in which you store the current values of the form fields. Let the key for the repository be the string "feedback-form-state".
- When loading the page, check the status of the storage, and if there is data saved there, fill the form fields with it. Otherwise, the fields should be left blank.
- When submitting the form, clear the storage and form fields, and output to the console an object with the email, message fields and their current values.
- Make sure that the repository is updated no more often than once every 500 milliseconds. To do this, add to the project and use the lodash.throttle library.
