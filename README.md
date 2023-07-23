# ChatGPT-to-Markdown-for-Trello
Convert ChatGPT conversation text to Markdown for Trello.

https://github.com/changchiyou/ChatGPT-to-Markdown-for-Trello/assets/46549482/7a58f0c8-3e91-4ba2-a58a-05d889f138ba

It should be noted that Trello is sensitive to Markdown syntax. Sometimes, a minor variation in line breaks can cause display problems. 

This was particularly challenging since the existing Chrome Plugin for converting ChatGPT conversations into Markdown did not meet my requirements. Hence, I made the decision to develop my own solution.

> Despite the availability of the [built-in sharing conversation feature](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) in ChatGPT, there is still a need for selectively sharing specific fragments of conversations. As a result, this project will not be abandoned in the near future.


## Installation

1. Install [Tampermoneky](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) on your browser
2. Copy the script [chatgpt2markdown.js](/scripts/chatgpt2markdown.js)
   https://github.com/changchiyou/ChatGPT-to-Markdown-for-Trello/blob/3892a78244b298bc44e4be5c95800c7375beb185/scripts/chatgpt2markdown.js#L1-L96
3. Paste into Tampermonkey's editor, which can be opened by clicking the tampermonkey icon and select `Create a new script...` option.

## Usage

By clicking the `Markdown` button next to the `Regenerate response` button, the conversation would be convert to markdown syntax and storage in your clipboard.

You can test the feature with the ChatGPT conversation below:

- [ChatGPT - Random Code Demos](https://chat.openai.com/share/a06b46e1-f9f8-46fb-9deb-54ce4b75f78b)

<details>
  <summary>Converted Markdown from `ChatGPT - Random Code Demos`</summary>

  **User**: I want to have some random 5-10 lines html, javascript, css, python, java code for demo

  --------

  **ChatGPT**: Sure, here's a collection of random 5-10 lines of code snippets in HTML, JavaScript, CSS, Python, and Java:
  HTML:


  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Random HTML Demo</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a random demo.</p>
    <button onclick="alert('Button clicked!')">Click Me</button>
  </body>
  </html>
  ```
  JavaScript:


  ```javascript
  // Random JavaScript Demo
  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const randomNum = getRandomNumber();
  console.log(`Random number: ${randomNum}`);
  ```
  CSS:


  ```css
  /* Random CSS Demo */
  body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
  }

  h1 {
    color: #007bff;
  }
  ```
  Python:


  ```python
  # Random Python Demo
  def is_even(num):
      return num % 2 == 0

  random_number = 7
  if is_even(random_number):
      print(f"{random_number} is even.")
  else:
      print(f"{random_number} is odd.")
  ```
  Java:


  ```java
  // Random Java Demo
  import java.util.Random;

  public class RandomDemo {
      public static void main(String[] args) {
          Random random = new Random();
          int randomNumber = random.nextInt(10) + 1;
          System.out.println("Random number: " + randomNumber);
      }
  }
  ```
  These code snippets are simple and meant for demonstration purposes. You can use them to showcase basic functionality and concepts in each language. Feel free to modify and expand them as needed for your demo.

</details>
