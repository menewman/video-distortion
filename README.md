This is an exercise in using the WebRTC `getUserMedia` API.

To get started, just serve the files locally. For example, you can run a simple web server using Python on OS X:
`python -m SimpleHTTPServer`

(If you're using a newer version of Python than 2.7, the API for running a simple HTTP might be a little different.)

Then, navigate to https://localhost:8000. Allow the browser to use your computer's webcam & microphone if it asks for permission.

When using the `getUserMedia` API, you should note that the feature will be disabled if you're not using a secure connection (https or localhost), or if you try to access a `file:///` link. So, simply opening the index.html file in your browser of choice won't work.
