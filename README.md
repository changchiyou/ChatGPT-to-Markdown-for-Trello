# ChatGPT-to-Markdown-for-Trello
Convert ChatGPT conversation to Markdown specific for Trello. 

This was particularly challenging since the existing Chrome Plugin for converting ChatGPT conversations into Markdown did not meet my requirements. Hence, I made the decision to develop my own solution.

> [!NOTE]
> 1. Trello is sensitive to Markdown syntax. Sometimes, a minor variation in line breaks can cause display problems. 
> 2. Despite the availability of the [built-in sharing conversation feature](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) in ChatGPT, there is still a need for selectively sharing specific fragments of conversations. As a result, this project will not be abandoned in the near future.


## Installation

1. Install [Tampermoneky](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) on your browser
2. Access https://raw.githubusercontent.com/changchiyou/ChatGPT-to-Markdown-for-Trello/main/scripts/chatgpt2markdown.user.js with the browser (copy & paste or simply click the hyperlink) which has already installed [Tampermoneky](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) and click `Install` button.

## Usage

> [!TIP]
> Check [demo](/demo/README.MD) first to quickly understand how to convert conversation with this plugin.

By clicking the `Markdown` button, the conversation would be convert to markdown syntax and storage in your clipboard.

You can test the feature with the ChatGPT conversation below:

- [ChatGPT - Random Code Demos](https://chat.openai.com/share/a06b46e1-f9f8-46fb-9deb-54ce4b75f78b)

  <details>
    <summary>Expected Result</summary>

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